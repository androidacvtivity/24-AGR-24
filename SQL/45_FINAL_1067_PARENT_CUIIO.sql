WITH RELATII AS (
    SELECT 
        A.CUIIO AS PARENT_CUIIO,
        A.CUATM AS PARENT_CUATM,
        B.CUIIO AS CHILD_CUIIO
    FROM USER_BANCU.KATALOG_45_1063 A
    JOIN USER_BANCU.KATALOG_45_1063 B
        ON A.CUIIO <> B.CUIIO
       AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
       AND SUBSTR(TO_CHAR(B.CUIIO), -2) = SUBSTR(TRIM(B.CUATM), 1, 2)
),
CUIIO_RELATII AS (
    SELECT PARENT_CUIIO AS CUIIO
    FROM RELATII

    UNION

    SELECT CHILD_CUIIO AS CUIIO
    FROM RELATII
),
DATE_CU_PARENT AS (
    SELECT
        A.CUIIO,
        COALESCE(R.PARENT_CUIIO, A.CUIIO) AS PARENT_CUIIO,
        A.CUIIO_VERS,
        A.DENUMIRE,
        A.CUATM,
        COALESCE(R.PARENT_CUATM, A.CUATM) AS PARENT_CUATM,
        A.CFP,
        A.CFOJ,
        A.COCM,
        A.CAEM2,
        A.CAEM,
        A.IDNO
    FROM USER_BANCU.KATALOG_45_1063 A
    LEFT JOIN RELATII R
        ON A.CUIIO = R.CHILD_CUIIO
)
SELECT *
FROM (
    -- Partea 1: rândurile care au rela?ie mama-filiala valida dupa CUIIO + CUATM
    SELECT 
        A.*,
        1 AS SORT_ORDER
    FROM DATE_CU_PARENT A
    WHERE A.CUIIO IN (
        SELECT CUIIO
        FROM CUIIO_RELATII
    )

    UNION ALL

    -- Rând gol pentru separare între Partea 1 ?i Partea 2
    SELECT 
        NULL AS CUIIO,
        NULL AS PARENT_CUIIO,
        NULL AS CUIIO_VERS,
        NULL AS DENUMIRE,
        NULL AS CUATM,
        NULL AS PARENT_CUATM,
        NULL AS CFP,
        NULL AS CFOJ,
        NULL AS COCM,
        NULL AS CAEM2,
        NULL AS CAEM,
        NULL AS IDNO,
        2 AS SORT_ORDER
    FROM DUAL

    UNION ALL

    -- Partea 2.1: fara rela?ie, CUIIO cu lungimea 9 sau 10
    SELECT 
        A.*,
        3 AS SORT_ORDER
    FROM DATE_CU_PARENT A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) IN (9, 10)
      AND A.CUIIO NOT IN (
          SELECT CUIIO
          FROM CUIIO_RELATII
      )

    UNION ALL

    -- Rând gol pentru separare între Partea 2.1 ?i Partea 2.2
    SELECT 
        NULL AS CUIIO,
        NULL AS PARENT_CUIIO,
        NULL AS CUIIO_VERS,
        NULL AS DENUMIRE,
        NULL AS CUATM,
        NULL AS PARENT_CUATM,
        NULL AS CFP,
        NULL AS CFOJ,
        NULL AS COCM,
        NULL AS CAEM2,
        NULL AS CAEM,
        NULL AS IDNO,
        4 AS SORT_ORDER
    FROM DUAL

    UNION ALL

    -- Partea 2.2: restul rândurilor fara rela?ie
    SELECT 
        A.*,
        5 AS SORT_ORDER
    FROM DATE_CU_PARENT A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) NOT IN (9, 10)
      AND A.CUIIO NOT IN (
          SELECT CUIIO
          FROM CUIIO_RELATII
      )
)
ORDER BY 
    SORT_ORDER,
    CASE 
        WHEN SORT_ORDER = 1 
        THEN SUBSTR(TO_CHAR(CUIIO), 1, 10) 
    END,
    CASE 
        WHEN SORT_ORDER = 1 
        THEN LENGTH(TO_CHAR(CUIIO)) 
    END,
    CASE 
        WHEN SORT_ORDER IN (3, 5) 
        THEN CUIIO 
    END DESC;