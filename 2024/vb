Sub InserareFilialaSiColorareGalbenInColoanaH()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    
    ' Selectam foaia activa
    Set ws = ActiveSheet
    
    ' Gasim ultimul rând din coloana A ?i ultima coloana cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 7 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value)) ' Convertim valoarea numerica din coloana A în ?ir de caractere ?i eliminam spa?iile
        
        ' Ignoram celulele goale din coloana A
        If Len(cuiio) > 0 Then
            ' Verificam toate celulele din tabel
            For j = 1 To lastRow
                If i <> j Then
                    If InStr(1, ws.Cells(j, 1).Value, cuiio, vbTextCompare) > 0 Then
                        ' Coloram rândul care con?ine substringul în verde
                        For col = 1 To lastCol
                            ws.Cells(i, col).Interior.Color = RGB(0, 255, 0) ' Verde
                        Next col
                        
                        ' Coloram rândul care con?ine stringul în galben
                        For col = 1 To lastCol
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col
                        
                        ' Inseram textul "FILIALA" ?i coloram celula din coloana H în galben
                        If ws.Cells(j, 1).Interior.Color = RGB(255, 255, 0) Then
                            ws.Cells(j, 8).Value = "FILIALA"
                            ws.Cells(j, 8).Interior.Color = RGB(255, 255, 0) ' Galben
                        End If
                        
                        ' Coloram primele 2 caractere din coloana C în ro?u (daca lungimea este >= 2)
                        If Len(ws.Cells(j, 3).Value) >= 2 Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Ro?u
                                .Bold = True
                            End With
                        End If
                        
                        ' Coloram ultimele 2 caractere din coloana A în ro?u (daca lungimea este >= 2)
                        Dim cuiioTrimmed As String
                        cuiioTrimmed = Trim(CStr(ws.Cells(j, 1).Value)) ' Eliminam spa?iile ?i convertim la text
                        If Len(cuiioTrimmed) >= 2 Then
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiioTrimmed) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Ro?u
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
        End If
    Next i
    
    MsgBox "Inserarea textului 'FILIALA' ?i colorarea celulei în galben în rândurile galbene au fost finalizate!", vbInformation
End Sub


Modifica acest code - Adauga inca o functionalitatea - Sa verifice coloana CUIIO si care nu au relatia string - substring 
dar au lungimea de 10 sau 9 caractere si ultimile 2 caractere sunt egale cu primele 2 caractere din coloana C sa insereze in coloana 
H textul filiala si sa coloreze in galben coloana 



Noua condiție:
Coloana CUIIO (coloana A) nu are relația string-substring.
Lungimea este 9 sau 10 caractere.
Ultimele 2 caractere din coloana A sunt egale cu primele 2 caractere din coloana C.


Acțiune:
Inserează textul "FILIALA" în coloana H pentru rândurile care îndeplinesc aceste condiții.
Celula din coloana H este colorată în galben.
Fără modificări la logica existentă.

de mai adaugat inca niste actiuni 

sa fie colorate in rosu  - Ultimele 2 caractere din coloana A 
si primele 2 caractere din coloana C

Ultimele 2 caractere din coloana A care sunt  egale cu primele 2 caractere din coloana C.