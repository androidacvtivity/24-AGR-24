Sub InserareFilialaCuCodInColoanaH()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    
    ' Selectăm foaia activă
    Set ws = ActiveSheet
    
    ' Găsim ultimul rând din coloana A și ultima coloană cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 7 ' Coloanele A-G (1-7)
    
    ' Parcurgem fiecare valoare din coloana A
    For i = 1 To lastRow
        cuiio = Trim(CStr(ws.Cells(i, 1).Value)) ' Convertim valoarea numerică din coloana A în șir de caractere și eliminăm spațiile
        
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
                        
                        ' Inserăm textul "UNITATEA STATISTICA PARINTE" și colorăm celula din coloana H în verde
                        If ws.Cells(i, 1).Interior.Color = RGB(0, 255, 0) Then
                            ws.Cells(i, 8).Value = "UNITATEA STATISTICA PARINTE"
                            ws.Cells(i, 8).Interior.Color = RGB(0, 255, 0) ' Verde
                        End If
                        
                        ' Colorăm rândul care conține stringul în galben
                        For col = 1 To lastCol
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col
                        
                        ' Inserăm textul "FILIALA - COD" și colorăm ultimele 2 caractere în roșu în coloana H
                        If ws.Cells(j, 1).Interior.Color = RGB(255, 255, 0) Then
                            Dim codA As String
                            codA = Trim(CStr(ws.Cells(j, 1).Value)) ' Convertim la text
                            If Len(codA) >= 2 Then
                                ws.Cells(j, 8).Value = "FILIALA - " & codA
                                ws.Cells(j, 8).Interior.Color = RGB(255, 255, 0) ' Galben
                                ' Colorăm ultimele 2 caractere ale textului în roșu
                                With ws.Cells(j, 8).Characters(Start:=Len(ws.Cells(j, 8).Value) - 1, Length:=2).Font
                                    .Color = RGB(255, 0, 0) ' Roșu
                                    .Bold = True
                                End With
                            Else
                                ws.Cells(j, 8).Value = "FILIALA - " & codA
                                ws.Cells(j, 8).Interior.Color = RGB(255, 255, 0) ' Galben
                            End If
                        End If
                        
                        ' Colorăm primele 2 caractere din coloana C în roșu (dacă lungimea este >= 2)
                        If Len(ws.Cells(j, 3).Value) >= 2 Then
                            With ws.Cells(j, 3).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Roșu
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
        End If
    Next i
    
    MsgBox "Inserarea și colorarea textului în coloana H au fost finalizate!", vbInformation
End Sub
