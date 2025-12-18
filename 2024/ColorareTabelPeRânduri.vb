
' Si acum mai adauga o logica daca in coloana A este string coloreaza ultimile 2 caractere in rosu si in coloana C coloreaza 
' primele 2 caractere in rosu 
Sub ColorareTabelPeRânduri()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    Dim targetCell As Range
    
    ' Selectăm foaia activă
    Set ws = ActiveSheet
    
    ' Găsim ultimul rând din coloana A și ultima coloană cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 7 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = ws.Cells(i, 1).Value ' Substring-ul curent din coloana A
        
        ' Ignorăm celulele goale din coloana A
        If Len(cuiio) > 0 Then
            ' Verificăm toate celulele din tabel
            For j = 1 To lastRow
                If i <> j Then
                    If InStr(1, ws.Cells(j, 1).Value, cuiio, vbTextCompare) > 0 Then
                        ' Colorăm rândul care conține substringul în verde
                        For col = 1 To lastCol
                            ws.Cells(i, col).Interior.Color = RGB(0, 255, 0) ' Verde
                        Next col
                        
                        ' Colorăm rândul care conține stringul în galben
                        For col = 1 To lastCol
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col
                    End If
                End If
            Next j
        End If
    Next i
    
    MsgBox "Colorarea rândurilor a fost finalizată!", vbInformation
End Sub
