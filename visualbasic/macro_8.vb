Sub versiune2()
    Dim ws As Worksheet
    Dim lastRow As Long, lastCol As Long
    Dim i As Long, j As Long
    Dim cuiio As String
    
    ' Selectam foaia activa
    Set ws = ActiveSheet
    
    ' Gasim ultimul rând din coloana A ?i ultima coloana cu date
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = 10 ' Coloanele A-I (1-9)
    
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
                        
                        ' Inseram textul "UNITATEA STATISTICA PARINTE" ?i coloram celula din coloana H în verde
                        If ws.Cells(i, 1).Interior.Color = RGB(0, 255, 0) Then
                            ws.Cells(i, 11).Value = "UNITATEA STATISTICA PARINTE"
                            ws.Cells(i, 11).Interior.Color = RGB(0, 255, 0) ' Verde
                        End If
                        
                        ' Coloram rândul care con?ine stringul în galben
                        For col = 1 To lastCol
                            ws.Cells(j, col).Interior.Color = RGB(255, 255, 0) ' Galben
                        Next col
                        
                        ' Inseram textul "FILIALA - COD" ?i coloram ultimele 2 caractere în ro?u în coloana H
                        If ws.Cells(j, 1).Interior.Color = RGB(255, 255, 0) Then
                            Dim codA As String
                            codA = Trim(CStr(ws.Cells(j, 1).Value)) ' Convertim la text
                            If Len(codA) >= 2 Then
                                ws.Cells(j, 11).Value = "FILIALA - " & codA
                                ws.Cells(j, 11).Interior.Color = RGB(255, 255, 0) ' Galben
                                ' Coloram ultimele 2 caractere ale textului în ro?u
                                With ws.Cells(j, 11).Characters(Start:=Len(ws.Cells(j, 11).Value) - 1, Length:=2).Font
                                    .Color = RGB(255, 0, 0) ' Ro?u
                                    .Bold = True
                                End With
                            Else
                                ws.Cells(j, 11).Value = "FILIALA - " & codA
                                ws.Cells(j, 11).Interior.Color = RGB(255, 255, 0) ' Galben
                            End If
                        End If
                        
                        ' Coloram primele 2 caractere din coloana C în ro?u (daca lungimea este >= 2)
                        If Len(ws.Cells(j, 4).Value) >= 2 Then
                            With ws.Cells(j, 4).Characters(Start:=1, Length:=2).Font
                                .Color = RGB(255, 0, 0) ' Ro?u
                                .Bold = True
                            End With
                        End If
                    End If
                End If
            Next j
        End If
    Next i
    
    MsgBox "Inserarea ?i colorarea textului în coloana H au fost finalizate!", vbInformation
End Sub

