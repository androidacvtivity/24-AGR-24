Sub ColorareTabelPeRânduriCuGalben()
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
        cuiio = CStr(ws.Cells(i, 1).Value) ' Convertim valoarea numerică din coloana A în șir de caractere
        
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
                        
                        ' Colorăm primele 2 caractere din coloana C în roșu (dacă lungimea este >= 2)
                        If Len(ws.Cells(j, 3).Value) >= 2 Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Roșu
                                .Bold = True
                            End With
                        End If
                        
                        ' Colorăm ultimele 2 caractere din coloana A în roșu (dacă lungimea este >= 2)
                        Dim cuiioConverted As String
                        cuiioConverted = CStr(ws.Cells(j, 1).Value)
                        If Len(cuiioConverted) >= 2 Then
                            With ws.Cells(j, 1).Characters(Start:=Len(cuiioConverted) - 1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Roșu
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
        End If
    Next i
    
    MsgBox "Colorarea rândurilor cu galben a fost finalizată!", vbInformation
End Sub
