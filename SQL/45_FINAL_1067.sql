WITH RELATII AS (
    SELECT 
        A.CUIIO AS CUIIO_MAMA,
        B.CUIIO AS CUIIO_FILIALA
    FROM USER_BANCU.KATALOG_45_1063 A
    JOIN USER_BANCU.KATALOG_45_1063 B
        ON A.CUIIO <> B.CUIIO
       AND TO_CHAR(B.CUIIO) LIKE TO_CHAR(A.CUIIO) || '%'
       AND SUBSTR(TO_CHAR(B.CUIIO), -2) = SUBSTR(TRIM(B.CUATM), 1, 2)
),
CUIIO_RELATII AS (
    SELECT CUIIO_MAMA AS CUIIO
    FROM RELATII

    UNION

    SELECT CUIIO_FILIALA AS CUIIO
    FROM RELATII
)
SELECT *
FROM (
    -- Partea 1: Rândurile care satisfac rela?ia mama-filiala + condi?ia CUATM
    SELECT 
        A.*, 
        1 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
    WHERE A.CUIIO IN (
        SELECT CUIIO
        FROM CUIIO_RELATII
    )

    UNION ALL

    -- Rând gol pentru separare între Partea 1 ?i Partea 2
    SELECT 
        NULL AS CUIIO,
        NULL AS CUIIO_VERS,
        NULL AS DENUMIRE,
        NULL AS CUATM,
        NULL AS CFP,
        NULL AS CFOJ,
        NULL AS COCM,
        NULL AS CAEM2,
        NULL AS CAEM,
        NULL AS IDNO,
        2 AS SORT_ORDER
    FROM DUAL

    UNION ALL

    -- Partea 2.1: Rândurile fara rela?ie, cu lungimea CUIIO egala cu 9 sau 10
    SELECT 
        A.*, 
        3 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
    WHERE LENGTH(TO_CHAR(A.CUIIO)) IN (9, 10)
      AND A.CUIIO NOT IN (
          SELECT CUIIO
          FROM CUIIO_RELATII
      )

    UNION ALL

    -- Rând gol pentru separare între Partea 2.1 ?i Partea 2.2
    SELECT 
        NULL AS CUIIO,
        NULL AS CUIIO_VERS,
        NULL AS DENUMIRE,
        NULL AS CUATM,
        NULL AS CFP,
        NULL AS CFOJ,
        NULL AS COCM,
        NULL AS CAEM2,
        NULL AS CAEM,
        NULL AS IDNO,
        4 AS SORT_ORDER
    FROM DUAL

    UNION ALL

    -- Partea 2.2: Celelalte rânduri fara rela?ie
    SELECT 
        A.*, 
        5 AS SORT_ORDER
    FROM USER_BANCU.KATALOG_45_1063 A
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