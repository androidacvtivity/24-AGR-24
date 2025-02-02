(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.agro24_24 = {
        attach: function (context, settings) {
            // Verificare input numeric
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            // Verificare input float
            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });




        }
    };
})(jQuery);


webform.validators.agro24_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;



    validatePhoneNumber(values.PHONE);
    validate_CUATM_FILIAL(values);
    validate_CAP21_CAP22(values);
    validate_CAP21_CAP22_F(values);
    validate_CAP21_C23(values);
    validate_CAP21_C23F(values);
    validate_CAP21_R35_C1(values);
    validate_CAP21_R35_C1_F(values);
    validate_CAP21_R36_C1(values);
    validate_CAP21_R36_C1_F(values);
    validate_CAP21_R37_C1(values);
    validate_CAP21_R37_C1_F(values);
    validate_CAP21_R49_C1(values);
    validate_CAP21_R49_C1_F(values);
    validate_CAP21_R51_C1_F(values);
    validate_CAP21_R51_C1(values);

    validate_CAP21_R50_C1(values);
    validate_CAP21_R52_C1(values);
    validate_CAP21_R54_C1(values);

    validate_CAP21_R50_C1_F(values);
    validate_CAP21_R52_C1_F(values);
    validate_CAP21_R54_C1_F(values);

    validate_CAP21_R54_C1_to_CAP111_R21_C1(values);
    validate_CAP21_R54_C1_to_CAP111_R21_C1_F(values);
   
   
    // validate_CAP111_R2_to_R3(values);
    // validate_CAP111_R2_to_R3_F(values);


    validate27_059(values);


    //-----------------------------------------------

    validate33_001(values);
    validate33_001_F(values);
    validate27_039(values);
    validate27_039_F(values);

    validate27_041_F(values);
    validate27_041(values);

    validate27_042(values);
    validate27_042_F(values);
    validate27_043(values);
    validate27_043_F(values);
    validate27_045(values);
    validate27_045_F(values);
    validate27_046(values);
    validate27_046_F(values);
    validate27_047(values);
    validate27_047_F(values);
    validate27_048(values);
    validate27_048_F(values);
    validate27_049(values);
    validate27_049_F(values);
    validate27_050(values);
    validate27_050_F(values);
    validate27_033(values);
    validate27_033_F(values);
    validate27_035(values);
    validate27_035_F(values);
    validate27_038(values);
    validate27_038_F(values);
    validate27_057(values);
    validate27_057_F(values);
    validate27_036(values);
    validate27_036_F(values);
    validate27_051(values);
    validate27_051_F(values);

 
    validate27_029(values);
    validate27_030(values);
    validate27_031(values);
    validate27_032(values);
    validate27_034(values);
    validate27_037(values);

    validate27_040(values);
    validate27_044(values);
    validate27_052(values);
    validate27_053(values);
    validate27_054(values);
    validate27_055(values);
    validate27_056(values);
    validate27_073(values);
    validate27_074(values);
    validate27_075(values);
    validate27_015(values);
    validate27_016(values);
    validate27_017(values);
    validate27_018(values);
    validate27_019(values);
    validate27_020(values);
    validate27_021(values);
    validate27_022(values);
    validate27_023(values);
    validate27_024(values);
    validate27_025(values);
    validate27_026(values);
    validate27_027_1(values);
    validate27_027(values);
    validate27_058(values);
    validate27_058_1(values);

    validate27_060(values);

    validate_CAP21_R21_to_CAP111_R20(values);
    validate_CAP21_R21_to_CAP111_R20_F(values);
    //------------------------------------------------

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['agro24_24'] = 1;
    validateWebform();
}

//---------------------------------------------------


function validate27_058_1(values) {
    // Definirea coloanelor pentru fiecare tabel
    var colsTab22 = ["C9", "C12"]; // Tab. 2.2, Rind.3
    var colsTab11 = ["C8", "C8"];  // Tab. 1.1, Rind.1

    // Iterăm prin perechi de coloane în ordine
    for (var i = 0; i < colsTab22.length; i++) {
        var colTab22 = colsTab22[i];
        var colTab11 = colsTab11[i];

        var valueTab22 = !isNaN(Number(values["CAP22_R3_" + colTab22])) ? Number(values["CAP22_R3_" + colTab22]) : 0;
        var valueTab11 = !isNaN(Number(values["CAP11_R1_" + colTab11])) ? Number(values["CAP11_R1_" + colTab11]) : 0;

        // Verificare în ordine: Tab. 2.2 → Tab. 1.1
        if (valueTab22 !== 0 && valueTab11 === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R1_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-058.1. Dacă Tab. 2.2, Rând.3 COL (@colTab22) ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) trebuie să fie ≠ 0.', {
                    '@colTab22': colTab22,
                    '@colTab11': colTab11
                })
            });
        }

        // Verificare inversă: Tab. 1.1 → Tab. 2.2
        if (valueTab11 !== 0 && valueTab22 === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R3_' + colTab22,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-058.1. Dacă Tab. 1.1, Rând.1 COL (@colTab11) ≠ 0, atunci Tab. 2.2, Rând.3 COL (@colTab22) trebuie să fie ≠ 0.', {
                    '@colTab22': colTab22,
                    '@colTab11': colTab11
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < colsTab22.length; i++) {
                var colTab22_F = colsTab22[i];
                var colTab11_F = colsTab11[i];

                var valueTab22_F = values["CAP22_R3_" + colTab22_F + "_FILIAL"] && !isNaN(Number(values["CAP22_R3_" + colTab22_F + "_FILIAL"][j]))
                    ? Number(values["CAP22_R3_" + colTab22_F + "_FILIAL"][j])
                    : 0;
                var valueTab11_F = values["CAP11_R1_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                // Verificare în ordine: Tab. 2.2 → Tab. 1.1 pentru FILIAL
                if (valueTab22_F !== 0 && valueTab11_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R1_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-058.1-F. Dacă Tab. 2.2, Rând.3 COL (@colTab22) ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab22': colTab22_F,
                            '@colTab11': colTab11_F
                        })
                    });
                }

                // Verificare inversă: Tab. 1.1 → Tab. 2.2 pentru FILIAL
                if (valueTab11_F !== 0 && valueTab22_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R3_' + colTab22_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-058.1-F. Dacă Tab. 1.1, Rând.1 COL (@colTab11) ≠ 0, atunci Tab. 2.2, Rând.3 COL (@colTab22) trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab22': colTab22_F,
                            '@colTab11': colTab11_F
                        })
                    });
                }
            }
        }
    }
}

//--------------------------------------------------

function validate27_058(values) {
    // Coloanele pentru fiecare tabel
    var colsTab22 = ["C1", "C4", "C6", "C11"]; // Tab. 2.2, Rind.3
    var colsTab11 = ["C1", "C3", "C4", "C6"];  // Tab. 1.1, Rind.1

    // Verificare principală
    for (var i = 0; i < colsTab22.length; i++) {
        var colTab22 = colsTab22[i];
        var colTab11 = colsTab11[i];

        var valueTab22 = !isNaN(Number(values["CAP22_R3_" + colTab22])) ? Number(values["CAP22_R3_" + colTab22]) : 0;
        var valueTab11 = !isNaN(Number(values["CAP11_R1_" + colTab11])) ? Number(values["CAP11_R1_" + colTab11]) : 0;

        // Verificare Tab. 2.2 → Tab. 1.1
        if (valueTab22 !== 0 && valueTab11 === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R1_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-058. Dacă Tab. 2.2, Rând.3 COL (@colTab22) ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) trebuie să fie ≠ 0.', {
                    '@colTab22': colTab22,
                    '@colTab11': colTab11
                })
            });
        }

        // Verificare inversă Tab. 1.1 → Tab. 2.2
        if (valueTab11 !== 0 && valueTab22 === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R3_' + colTab22,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-058. Dacă Tab. 1.1, Rând.1 COL (@colTab11) ≠ 0, atunci Tab. 2.2, Rând.3 COL (@colTab22) trebuie să fie ≠ 0.', {
                    '@colTab22': colTab22,
                    '@colTab11': colTab11
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < colsTab22.length; i++) {
                var colTab22_F = colsTab22[i];
                var colTab11_F = colsTab11[i];

                var valueTab22_F = values["CAP22_R3_" + colTab22_F + "_FILIAL"] && !isNaN(Number(values["CAP22_R3_" + colTab22_F + "_FILIAL"][j]))
                    ? Number(values["CAP22_R3_" + colTab22_F + "_FILIAL"][j])
                    : 0;

                var valueTab11_F = values["CAP11_R1_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                // Verificare FILIAL Tab. 2.2 → Tab. 1.1
                if (valueTab22_F !== 0 && valueTab11_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R1_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-058-F. Dacă Tab. 2.2, Rând.3 COL (@colTab22) ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab22': colTab22_F,
                            '@colTab11': colTab11_F
                        })
                    });
                }

                // Verificare FILIAL Tab. 1.1 → Tab. 2.2
                if (valueTab11_F !== 0 && valueTab22_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R3_' + colTab22_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-058-F. Dacă Tab. 1.1, Rând.1 COL (@colTab11) ≠ 0, atunci Tab. 2.2, Rând.3 COL (@colTab22) trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab22': colTab22_F,
                            '@colTab11': colTab11_F
                        })
                    });
                }
            }
        }
    }
}


//----------------------------------------------

function validate27_027_1(values) {
    var col8 = "C8";
    var col12 = "C12";
    var col9 = "C9";

    // Main Data Validation
    var Rd4_Col8_Tab11 = !isNaN(Number(values["CAP11_R4_" + col8])) ? Number(values["CAP11_R4_" + col8]) : 0;
    var Rd10_Col12_Tab22 = !isNaN(Number(values["CAP22_R10_" + col12])) ? Number(values["CAP22_R10_" + col12]) : 0;
    var Rd10_Col9_Tab22 = !isNaN(Number(values["CAP22_R10_" + col9])) ? Number(values["CAP22_R10_" + col9]) : 0;

    // If Rind.4 COL.8 in Tab. 1.1 ≠ 0, then Rind.10 COL.12 or COL.9 in Tab. 2.2 ≠ 0
    if (Rd4_Col8_Tab11 !== 0 && (Rd10_Col12_Tab22 === 0 && Rd10_Col9_Tab22 === 0)) {
        webform.warnings.push({
            'fieldName': 'CAP22_R10_' + col12,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-027.1. Dacă Tab. 1.1, Rând.4 COL.8 ≠ 0, atunci Tab. 2.2, Rând.10 COL.12 sau COL.9 trebuie să fie ≠ 0. Valori: R4-C8(@Rd4_Col8_Tab11), R10-C12(@Rd10_Col12_Tab22), R10-C9(@Rd10_Col9_Tab22)', {
                '@Rd4_Col8_Tab11': Rd4_Col8_Tab11,
                '@Rd10_Col12_Tab22': Rd10_Col12_Tab22,
                '@Rd10_Col9_Tab22': Rd10_Col9_Tab22
            })
        });
    }

    // If Rind.10 COL.12 or COL.9 in Tab. 2.2 ≠ 0, then Rind.4 COL.8 in Tab. 1.1 ≠ 0
    if ((Rd10_Col12_Tab22 !== 0 || Rd10_Col9_Tab22 !== 0) && Rd4_Col8_Tab11 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP11_R4_' + col8,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-027.1. Dacă Tab. 2.2, Rând.10 COL.12 sau COL.9 ≠ 0, atunci Tab. 1.1, Rând.4 COL.8 trebuie să fie ≠ 0. Valori: R10-C12(@Rd10_Col12_Tab22), R10-C9(@Rd10_Col9_Tab22), R4-C8(@Rd4_Col8_Tab11)', {
                '@Rd10_Col12_Tab22': Rd10_Col12_Tab22,
                '@Rd10_Col9_Tab22': Rd10_Col9_Tab22,
                '@Rd4_Col8_Tab11': Rd4_Col8_Tab11
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd4_Col8_Tab11_F = values["CAP11_R4_" + col8 + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_" + col8 + "_FILIAL"][j]))
                ? Number(values["CAP11_R4_" + col8 + "_FILIAL"][j])
                : 0;
            var Rd10_Col12_Tab22_F = values["CAP22_R10_" + col12 + "_FILIAL"] && !isNaN(Number(values["CAP22_R10_" + col12 + "_FILIAL"][j]))
                ? Number(values["CAP22_R10_" + col12 + "_FILIAL"][j])
                : 0;
            var Rd10_Col9_Tab22_F = values["CAP22_R10_" + col9 + "_FILIAL"] && !isNaN(Number(values["CAP22_R10_" + col9 + "_FILIAL"][j]))
                ? Number(values["CAP22_R10_" + col9 + "_FILIAL"][j])
                : 0;

            // Validate FILIAL logic
            if (Rd4_Col8_Tab11_F !== 0 && (Rd10_Col12_Tab22_F === 0 && Rd10_Col9_Tab22_F === 0)) {
                webform.warnings.push({
                    'fieldName': 'CAP22_R10_' + col12 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-027.1-F. Dacă Tab. 1.1, Rând.4 COL.8 ≠ 0, atunci Tab. 2.2, Rând.10 COL.12 sau COL.9 trebuie să fie ≠ 0. Valori: R4-C8(@Rd4_Col8_Tab11_F), R10-C12(@Rd10_Col12_Tab22_F), R10-C9(@Rd10_Col9_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd4_Col8_Tab11_F': Rd4_Col8_Tab11_F,
                        '@Rd10_Col12_Tab22_F': Rd10_Col12_Tab22_F,
                        '@Rd10_Col9_Tab22_F': Rd10_Col9_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_027(values) {
    // Coloanele pentru fiecare tabel
    var colsTab11 = ["C1", "C3", "C4", "C5", "C6"];   // Tab. 1.1, Rind.4
    var colsTab22 = ["C1", "C4", "C6", "C7", "C11"]; // Tab. 2.2, Rind.10

    // Verificare principală: TAB. 1.1 → TAB. 2.2
    for (var i = 0; i < colsTab11.length; i++) {
        var colTab11 = colsTab11[i];
        var colTab22 = colsTab22[i];

        var valueTab11 = !isNaN(Number(values["CAP11_R4_" + colTab11])) ? Number(values["CAP11_R4_" + colTab11]) : 0;
        var valueTab22 = !isNaN(Number(values["CAP22_R10_" + colTab22])) ? Number(values["CAP22_R10_" + colTab22]) : 0;

        // Dacă TAB. 1.1 ≠ 0 și TAB. 2.2 == 0
        if (valueTab11 !== 0 && valueTab22 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP22_R10_' + colTab22,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-027. Dacă Tab. 1.1, Rând.4 COL (@colTab11) = @valueTab11 ≠ 0, atunci Tab. 2.2, Rând.10 COL (@colTab22) = @valueTab22 trebuie să fie ≠ 0.', {
                    '@colTab11': colTab11,
                    '@colTab22': colTab22,
                    '@valueTab11': valueTab11,
                    '@valueTab22': valueTab22
                })
            });
        }

        // Verificare inversă: TAB. 2.2 → TAB. 1.1
        if (valueTab22 !== 0 && valueTab11 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP11_R4_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-027. Dacă Tab. 2.2, Rând.10 COL (@colTab22) = @valueTab22 ≠ 0, atunci Tab. 1.1, Rând.4 COL (@colTab11) = @valueTab11 trebuie să fie ≠ 0.', {
                    '@colTab11': colTab11,
                    '@colTab22': colTab22,
                    '@valueTab11': valueTab11,
                    '@valueTab22': valueTab22
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < colsTab11.length; i++) {
                var colTab11_F = colsTab11[i];
                var colTab22_F = colsTab22[i];

                var valueTab11_F = values["CAP11_R4_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R4_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                var valueTab22_F = values["CAP22_R10_" + colTab22_F + "_FILIAL"] && !isNaN(Number(values["CAP22_R10_" + colTab22_F + "_FILIAL"][j]))
                    ? Number(values["CAP22_R10_" + colTab22_F + "_FILIAL"][j])
                    : 0;

                // Verificare FILIAL Tab. 1.1 → Tab. 2.2
                if (valueTab11_F !== 0 && valueTab22_F === 0) {
                    webform.warnings.push({
                        'fieldName': 'CAP22_R10_' + colTab22_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-027-F. Dacă Tab. 1.1, Rând.4 COL (@colTab11) = @valueTab11_F ≠ 0, atunci Tab. 2.2, Rând.10 COL (@colTab22) = @valueTab22_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@colTab22': colTab22_F,
                            '@valueTab11_F': valueTab11_F,
                            '@valueTab22_F': valueTab22_F
                        })
                    });
                }

                // Verificare inversă FILIAL Tab. 2.2 → Tab. 1.1
                if (valueTab22_F !== 0 && valueTab11_F === 0) {
                    webform.warnings.push({
                        'fieldName': 'CAP11_R4_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-027-F. Dacă Tab. 2.2, Rând.10 COL (@colTab22) = @valueTab22_F ≠ 0, atunci Tab. 1.1, Rând.4 COL (@colTab11) = @valueTab11_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@colTab22': colTab22_F,
                            '@valueTab11_F': valueTab11_F,
                            '@valueTab22_F': valueTab22_F
                        })
                    });
                }
            }
        }
    }
}


//----------------------------------------------

function validate27_040(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col1 = !isNaN(Number(values["CAP111_R11_" + col1])) ? Number(values["CAP111_R11_" + col1]) : 0;
    var Rd54_Col1 = !isNaN(Number(values["CAP21_R54_" + col1])) ? Number(values["CAP21_R54_" + col1]) : 0;

    // If Rd.11 COL.1 ≠ 0, then Rd.54 COL.1 ≠ 0
    if (Rd11_Col1 !== 0 && Rd54_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R54_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-040. Dacă Tab. 1.1.1, Rând.11 COL.1 ≠ 0, atunci Tab. 2.1, Rând.54 COL.1 trebuie să fie ≠ 0. Valori: R11-C1(@Rd11_Col1), R54-C1(@Rd54_Col1)', {
                '@Rd11_Col1': Rd11_Col1,
                '@Rd54_Col1': Rd54_Col1
            })
        });
    }

    // If Rd.54 COL.1 ≠ 0, then Rd.11 COL.1 ≠ 0
    if (Rd54_Col1 !== 0 && Rd11_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R11_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-040. Dacă Tab. 2.1, Rând.54 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.11 COL.1 trebuie să fie ≠ 0. Valori: R54-C1(@Rd54_Col1), R11-C1(@Rd11_Col1)', {
                '@Rd54_Col1': Rd54_Col1,
                '@Rd11_Col1': Rd11_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col1_F = values["CAP111_R11_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R11_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd54_Col1_F = values["CAP21_R54_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R54_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R54_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.1 ≠ 0 in FILIAL, then Rd.54 COL.1 ≠ 0
            if (Rd11_Col1_F !== 0 && Rd54_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R54_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-040-F. Dacă Tab. 1.1.1, Rând.11 COL.1 ≠ 0, atunci Tab. 2.1, Rând.54 COL.1 trebuie să fie ≠ 0. Valori: R11-C1(@Rd11_Col1_F), R54-C1(@Rd54_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col1_F': Rd11_Col1_F,
                        '@Rd54_Col1_F': Rd54_Col1_F
                    })
                });
            }

            // If Rd.54 COL.1 ≠ 0 in FILIAL, then Rd.11 COL.1 ≠ 0
            if (Rd54_Col1_F !== 0 && Rd11_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R11_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-040-F. Dacă Tab. 2.1, Rând.54 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.11 COL.1 trebuie să fie ≠ 0. Valori: R54-C1(@Rd54_Col1_F), R11-C1(@Rd11_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd54_Col1_F': Rd54_Col1_F,
                        '@Rd11_Col1_F': Rd11_Col1_F
                    })
                });
            }
        }
    }
}
function validate27_044(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd13_Col1 = !isNaN(Number(values["CAP111_R13_" + col1])) ? Number(values["CAP111_R13_" + col1]) : 0;
    var Rd43_Col1 = !isNaN(Number(values["CAP21_R43_" + col1])) ? Number(values["CAP21_R43_" + col1]) : 0;

    // If Rd.13 COL.1 ≠ 0, then Rd.43 COL.1 ≠ 0
    if (Rd13_Col1 !== 0 && Rd43_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R43_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-044. Dacă Tab. 1.1.1, Rând.13 COL.1 ≠ 0, atunci Tab. 2.1, Rând.43 COL.1 trebuie să fie ≠ 0. Valori: R13-C1(@Rd13_Col1), R43-C1(@Rd43_Col1)', {
                '@Rd13_Col1': Rd13_Col1,
                '@Rd43_Col1': Rd43_Col1
            })
        });
    }

    // If Rd.43 COL.1 ≠ 0, then Rd.13 COL.1 ≠ 0
    if (Rd43_Col1 !== 0 && Rd13_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R13_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-044. Dacă Tab. 2.1, Rând.43 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.13 COL.1 trebuie să fie ≠ 0. Valori: R43-C1(@Rd43_Col1), R13-C1(@Rd13_Col1)', {
                '@Rd43_Col1': Rd43_Col1,
                '@Rd13_Col1': Rd13_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd13_Col1_F = values["CAP111_R13_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R13_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R13_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd43_Col1_F = values["CAP21_R43_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R43_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R43_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.13 COL.1 ≠ 0 in FILIAL, then Rd.43 COL.1 ≠ 0
            if (Rd13_Col1_F !== 0 && Rd43_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R43_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-044-F. Dacă Tab. 1.1.1, Rând.13 COL.1 ≠ 0, atunci Tab. 2.1, Rând.43 COL.1 trebuie să fie ≠ 0. Valori: R13-C1(@Rd13_Col1_F), R43-C1(@Rd43_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd13_Col1_F': Rd13_Col1_F,
                        '@Rd43_Col1_F': Rd43_Col1_F
                    })
                });
            }

            // If Rd.43 COL.1 ≠ 0 in FILIAL, then Rd.13 COL.1 ≠ 0
            if (Rd43_Col1_F !== 0 && Rd13_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R13_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-044-F. Dacă Tab. 2.1, Rând.43 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.13 COL.1 trebuie să fie ≠ 0. Valori: R43-C1(@Rd43_Col1_F), R13-C1(@Rd13_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd43_Col1_F': Rd43_Col1_F,
                        '@Rd13_Col1_F': Rd13_Col1_F
                    })
                });
            }
        }
    }
}
function validate27_052(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd18_Col1 = !isNaN(Number(values["CAP111_R18_" + col1])) ? Number(values["CAP111_R18_" + col1]) : 0;
    var Rd17_Col1 = !isNaN(Number(values["CAP111_R17_" + col1])) ? Number(values["CAP111_R17_" + col1]) : 0;

    // If Rd.18 COL.1 ≠ 0, then Rd.17 COL.1 ≠ 0
    if (Rd18_Col1 !== 0 && Rd17_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R17_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-052. Dacă Tab. 1.1.1, Rând.18 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≠ 0. Valori: R18-C1(@Rd18_Col1), R17-C1(@Rd17_Col1)', {
                '@Rd18_Col1': Rd18_Col1,
                '@Rd17_Col1': Rd17_Col1
            })
        });
    }

    // If Rd.17 COL.1 ≠ 0, then Rd.18 COL.1 ≠ 0
    if (Rd17_Col1 !== 0 && Rd18_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R18_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-052. Dacă Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.18 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@Rd17_Col1), R18-C1(@Rd18_Col1)', {
                '@Rd17_Col1': Rd17_Col1,
                '@Rd18_Col1': Rd18_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd18_Col1_F = values["CAP111_R18_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R18_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd17_Col1_F = values["CAP111_R17_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R17_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.18 COL.1 ≠ 0 in FILIAL, then Rd.17 COL.1 ≠ 0
            if (Rd18_Col1_F !== 0 && Rd17_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-052-F. Dacă Tab. 1.1.1, Rând.18 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≠ 0. Valori: R18-C1(@Rd18_Col1_F), R17-C1(@Rd17_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd18_Col1_F': Rd18_Col1_F,
                        '@Rd17_Col1_F': Rd17_Col1_F
                    })
                });
            }

            // If Rd.17 COL.1 ≠ 0 in FILIAL, then Rd.18 COL.1 ≠ 0
            if (Rd17_Col1_F !== 0 && Rd18_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R18_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-052-F. Dacă Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.18 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@Rd17_Col1_F), R18-C1(@Rd18_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd17_Col1_F': Rd17_Col1_F,
                        '@Rd18_Col1_F': Rd18_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_053(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd19_Col1 = !isNaN(Number(values["CAP111_R19_" + col1])) ? Number(values["CAP111_R19_" + col1]) : 0;
    var Rd17_Col1 = !isNaN(Number(values["CAP111_R17_" + col1])) ? Number(values["CAP111_R17_" + col1]) : 0;

    // If Rd.19 COL.1 ≠ 0, then Rd.17 COL.1 ≠ 0
    if (Rd19_Col1 !== 0 && Rd17_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R17_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-053. Dacă Tab. 1.1.1, Rând.19 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≠ 0. Valori: R19-C1(@Rd19_Col1), R17-C1(@Rd17_Col1)', {
                '@Rd19_Col1': Rd19_Col1,
                '@Rd17_Col1': Rd17_Col1
            })
        });
    }

    // If Rd.17 COL.1 ≠ 0, then Rd.19 COL.1 ≠ 0
    if (Rd17_Col1 !== 0 && Rd19_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R19_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-053. Dacă Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.19 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@Rd17_Col1), R19-C1(@Rd19_Col1)', {
                '@Rd17_Col1': Rd17_Col1,
                '@Rd19_Col1': Rd19_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd19_Col1_F = values["CAP111_R19_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R19_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R19_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd17_Col1_F = values["CAP111_R17_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R17_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.19 COL.1 ≠ 0 in FILIAL, then Rd.17 COL.1 ≠ 0
            if (Rd19_Col1_F !== 0 && Rd17_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-053-F. Dacă Tab. 1.1.1, Rând.19 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≠ 0. Valori: R19-C1(@Rd19_Col1_F), R17-C1(@Rd17_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd19_Col1_F': Rd19_Col1_F,
                        '@Rd17_Col1_F': Rd17_Col1_F
                    })
                });
            }

            // If Rd.17 COL.1 ≠ 0 in FILIAL, then Rd.19 COL.1 ≠ 0
            if (Rd17_Col1_F !== 0 && Rd19_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R19_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-053-F. Dacă Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.19 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@Rd17_Col1_F), R19-C1(@Rd19_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd17_Col1_F': Rd17_Col1_F,
                        '@Rd19_Col1_F': Rd19_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_054(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd20_Col1 = !isNaN(Number(values["CAP111_R20_" + col1])) ? Number(values["CAP111_R20_" + col1]) : 0;
    var Rd21_Col1 = !isNaN(Number(values["CAP21_R21_" + col1])) ? Number(values["CAP21_R21_" + col1]) : 0;

    // If Rd.20 COL.1 ≠ 0, then Rd.21 COL.1 ≠ 0
    if (Rd20_Col1 !== 0 && Rd21_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-054. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1), R21-C1(@Rd21_Col1)', {
                '@Rd20_Col1': Rd20_Col1,
                '@Rd21_Col1': Rd21_Col1
            })
        });
    }

    // If Rd.21 COL.1 ≠ 0, then Rd.20 COL.1 ≠ 0
    if (Rd21_Col1 !== 0 && Rd20_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R20_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-054. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1), R20-C1(@Rd20_Col1)', {
                '@Rd21_Col1': Rd21_Col1,
                '@Rd20_Col1': Rd20_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd20_Col1_F = values["CAP111_R20_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R20_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd21_Col1_F = values["CAP21_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R21_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R21_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.20 COL.1 ≠ 0 in FILIAL, then Rd.21 COL.1 ≠ 0
            if (Rd20_Col1_F !== 0 && Rd21_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R21_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-054-F. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1_F), R21-C1(@Rd21_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd20_Col1_F': Rd20_Col1_F,
                        '@Rd21_Col1_F': Rd21_Col1_F
                    })
                });
            }

            // If Rd.21 COL.1 ≠ 0 in FILIAL, then Rd.20 COL.1 ≠ 0
            if (Rd21_Col1_F !== 0 && Rd20_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R20_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-054-F. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_F), R20-C1(@Rd20_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd21_Col1_F': Rd21_Col1_F,
                        '@Rd20_Col1_F': Rd20_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_055(values) {
    var col1 = "C1";
    var col2 = "C2";

    // Main Data Validation
    var Rd20_Col1 = !isNaN(Number(values["CAP111_R20_" + col1])) ? Number(values["CAP111_R20_" + col1]) : 0;
    var Rd11_Col2 = !isNaN(Number(values["CAP22_R11_" + col2])) ? Number(values["CAP22_R11_" + col2]) : 0;

    // If Rd.20 COL.1 ≠ 0, then Rd.11 COL.2 ≠ 0
    if (Rd20_Col1 !== 0 && Rd11_Col2 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col2,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-055. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1), R11-C2(@Rd11_Col2)', {
                '@Rd20_Col1': Rd20_Col1,
                '@Rd11_Col2': Rd11_Col2
            })
        });
    }

    // If Rd.11 COL.2 ≠ 0, then Rd.20 COL.1 ≠ 0
    if (Rd11_Col2 !== 0 && Rd20_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R20_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-055. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2), R20-C1(@Rd20_Col1)', {
                '@Rd11_Col2': Rd11_Col2,
                '@Rd20_Col1': Rd20_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd20_Col1_F = values["CAP111_R20_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R20_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd11_Col2_F = values["CAP22_R11_" + col2 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col2 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col2 + "_FILIAL"][j])
                : 0;

            // If Rd.20 COL.1 ≠ 0 in FILIAL, then Rd.11 COL.2 ≠ 0
            if (Rd20_Col1_F !== 0 && Rd11_Col2_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col2 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-055-F. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1_F), R11-C2(@Rd11_Col2_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd20_Col1_F': Rd20_Col1_F,
                        '@Rd11_Col2_F': Rd11_Col2_F
                    })
                });
            }

            // If Rd.11 COL.2 ≠ 0 in FILIAL, then Rd.20 COL.1 ≠ 0
            if (Rd11_Col2_F !== 0 && Rd20_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R20_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-055-F. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2_F), R20-C1(@Rd20_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col2_F': Rd11_Col2_F,
                        '@Rd20_Col1_F': Rd20_Col1_F
                    })
                });
            }
        }
    }
}


function validate27_056(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd21_Col1 = !isNaN(Number(values["CAP111_R21_" + col1])) ? Number(values["CAP111_R21_" + col1]) : 0;
    var Rd54_Col1 = !isNaN(Number(values["CAP21_R54_" + col1])) ? Number(values["CAP21_R54_" + col1]) : 0;

    // If Rd.21 COL.1 ≠ 0, then Rd.54 COL.1 ≠ 0
    if (Rd21_Col1 !== 0 && Rd54_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R54_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-056. Dacă Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.1, Rând.54 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1), R54-C1(@Rd54_Col1)', {
                '@Rd21_Col1': Rd21_Col1,
                '@Rd54_Col1': Rd54_Col1
            })
        });
    }

    // If Rd.54 COL.1 ≠ 0, then Rd.21 COL.1 ≠ 0
    if (Rd54_Col1 !== 0 && Rd21_Col1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-056. Dacă Tab. 2.1, Rând.54 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R54-C1(@Rd54_Col1), R21-C1(@Rd21_Col1)', {
                '@Rd54_Col1': Rd54_Col1,
                '@Rd21_Col1': Rd21_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd21_Col1_F = values["CAP111_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R21_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R21_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd54_Col1_F = values["CAP21_R54_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R54_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R54_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.21 COL.1 ≠ 0 in FILIAL, then Rd.54 COL.1 ≠ 0
            if (Rd21_Col1_F !== 0 && Rd54_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R54_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-056-F. Dacă Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.1, Rând.54 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_F), R54-C1(@Rd54_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd21_Col1_F': Rd21_Col1_F,
                        '@Rd54_Col1_F': Rd54_Col1_F
                    })
                });
            }

            // If Rd.54 COL.1 ≠ 0 in FILIAL, then Rd.21 COL.1 ≠ 0
            if (Rd54_Col1_F !== 0 && Rd21_Col1_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R21_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-056-F. Dacă Tab. 2.1, Rând.54 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R54-C1(@Rd54_Col1_F), R21-C1(@Rd21_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd54_Col1_F': Rd54_Col1_F,
                        '@Rd21_Col1_F': Rd21_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_073(values) {
    var cols = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12"];

    // Main Data Validation
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];

        var Rd1_Col = !isNaN(Number(values["CAP22_R1_" + col])) ? Number(values["CAP22_R1_" + col]) : 0;
        var Rd2_Col = !isNaN(Number(values["CAP22_R2_" + col])) ? Number(values["CAP22_R2_" + col]) : 0;

        // If Rd.1 COL ≠ 0, then Rd.2 COL ≠ 0
        if (Rd1_Col !== 0 && Rd2_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R2_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-073. Dacă Tab. 2.2, Rând.1 COL.@col ≠ 0, atunci Tab. 2.2, Rând.2 COL.@col trebuie să fie ≠ 0. Valori: R1-C@col(@Rd1_Col), R2-C@col(@Rd2_Col)', {
                    '@col': col,
                    '@Rd1_Col': Rd1_Col,
                    '@Rd2_Col': Rd2_Col
                })
            });
        }

        // If Rd.2 COL ≠ 0, then Rd.1 COL ≠ 0
        if (Rd2_Col !== 0 && Rd1_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R1_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-073. Dacă Tab. 2.2, Rând.2 COL.@col ≠ 0, atunci Tab. 2.2, Rând.1 COL.@col trebuie să fie ≠ 0. Valori: R2-C@col(@Rd2_Col), R1-C@col(@Rd1_Col)', {
                    '@col': col,
                    '@Rd2_Col': Rd2_Col,
                    '@Rd1_Col': Rd1_Col
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < cols.length; i++) {
                var col = cols[i];

                var Rd1_Col_F = values["CAP22_R1_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R1_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R1_" + col + "_FILIAL"][j])
                    : 0;
                var Rd2_Col_F = values["CAP22_R2_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R2_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R2_" + col + "_FILIAL"][j])
                    : 0;

                // If Rd.1 COL FILIAL ≠ 0, then Rd.2 COL FILIAL ≠ 0
                if (Rd1_Col_F !== 0 && Rd2_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R2_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-073-F. Dacă Tab. 2.2, Rând.1 COL.@col ≠ 0, atunci Tab. 2.2, Rând.2 COL.@col trebuie să fie ≠ 0. Valori: R1-C@col(@Rd1_Col_F), R2-C@col(@Rd2_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd1_Col_F': Rd1_Col_F,
                            '@Rd2_Col_F': Rd2_Col_F
                        })
                    });
                }

                // If Rd.2 COL FILIAL ≠ 0, then Rd.1 COL FILIAL ≠ 0
                if (Rd2_Col_F !== 0 && Rd1_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R1_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-073-F. Dacă Tab. 2.2, Rând.2 COL.@col ≠ 0, atunci Tab. 2.2, Rând.1 COL.@col trebuie să fie ≠ 0. Valori: R2-C@col(@Rd2_Col_F), R1-C@col(@Rd1_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd2_Col_F': Rd2_Col_F,
                            '@Rd1_Col_F': Rd1_Col_F
                        })
                    });
                }
            }
        }
    }
}

function validate27_074(values) {
    var cols = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12"];

    // Main Data Validation
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];

        var Rd6_Col = !isNaN(Number(values["CAP22_R6_" + col])) ? Number(values["CAP22_R6_" + col]) : 0;
        var Rd7_Col = !isNaN(Number(values["CAP22_R7_" + col])) ? Number(values["CAP22_R7_" + col]) : 0;

        // If Rd.6 COL ≠ 0, then Rd.7 COL ≠ 0
        if (Rd6_Col !== 0 && Rd7_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R7_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-074. Dacă Tab. 2.2, Rând.6 COL.@col ≠ 0, atunci Tab. 2.2, Rând.7 COL.@col trebuie să fie ≠ 0. Valori: R6-C@col(@Rd6_Col), R7-C@col(@Rd7_Col)', {
                    '@col': col,
                    '@Rd6_Col': Rd6_Col,
                    '@Rd7_Col': Rd7_Col
                })
            });
        }

        // If Rd.7 COL ≠ 0, then Rd.6 COL ≠ 0
        if (Rd7_Col !== 0 && Rd6_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R6_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-074. Dacă Tab. 2.2, Rând.7 COL.@col ≠ 0, atunci Tab. 2.2, Rând.6 COL.@col trebuie să fie ≠ 0. Valori: R7-C@col(@Rd7_Col), R6-C@col(@Rd6_Col)', {
                    '@col': col,
                    '@Rd7_Col': Rd7_Col,
                    '@Rd6_Col': Rd6_Col
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < cols.length; i++) {
                var col = cols[i];

                var Rd6_Col_F = values["CAP22_R6_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R6_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R6_" + col + "_FILIAL"][j])
                    : 0;
                var Rd7_Col_F = values["CAP22_R7_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R7_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R7_" + col + "_FILIAL"][j])
                    : 0;

                // If Rd.6 COL FILIAL ≠ 0, then Rd.7 COL FILIAL ≠ 0
                if (Rd6_Col_F !== 0 && Rd7_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R7_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-074-F. Dacă Tab. 2.2, Rând.6 COL.@col ≠ 0, atunci Tab. 2.2, Rând.7 COL.@col trebuie să fie ≠ 0. Valori: R6-C@col(@Rd6_Col_F), R7-C@col(@Rd7_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd6_Col_F': Rd6_Col_F,
                            '@Rd7_Col_F': Rd7_Col_F
                        })
                    });
                }

                // If Rd.7 COL FILIAL ≠ 0, then Rd.6 COL FILIAL ≠ 0
                if (Rd7_Col_F !== 0 && Rd6_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R6_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-074-F. Dacă Tab. 2.2, Rând.7 COL.@col ≠ 0, atunci Tab. 2.2, Rând.6 COL.@col trebuie să fie ≠ 0. Valori: R7-C@col(@Rd7_Col_F), R6-C@col(@Rd6_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd7_Col_F': Rd7_Col_F,
                            '@Rd6_Col_F': Rd6_Col_F
                        })
                    });
                }
            }
        }
    }
}


function validate27_075(values) {
    var cols = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12"];

    // Main Data Validation
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];

        var Rd8_Col = !isNaN(Number(values["CAP22_R8_" + col])) ? Number(values["CAP22_R8_" + col]) : 0;
        var Rd9_Col = !isNaN(Number(values["CAP22_R9_" + col])) ? Number(values["CAP22_R9_" + col]) : 0;

        // If Rd.8 COL ≠ 0, then Rd.9 COL ≠ 0
        if (Rd8_Col !== 0 && Rd9_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R9_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-075. Dacă Tab. 2.2, Rând.8 COL.@col ≠ 0, atunci Tab. 2.2, Rând.9 COL.@col trebuie să fie ≠ 0. Valori: R8-C@col(@Rd8_Col), R9-C@col(@Rd9_Col)', {
                    '@col': col,
                    '@Rd8_Col': Rd8_Col,
                    '@Rd9_Col': Rd9_Col
                })
            });
        }

        // If Rd.9 COL ≠ 0, then Rd.8 COL ≠ 0
        if (Rd9_Col !== 0 && Rd8_Col === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R8_' + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-075. Dacă Tab. 2.2, Rând.9 COL.@col ≠ 0, atunci Tab. 2.2, Rând.8 COL.@col trebuie să fie ≠ 0. Valori: R9-C@col(@Rd9_Col), R8-C@col(@Rd8_Col)', {
                    '@col': col,
                    '@Rd9_Col': Rd9_Col,
                    '@Rd8_Col': Rd8_Col
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < cols.length; i++) {
                var col = cols[i];

                var Rd8_Col_F = values["CAP22_R8_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R8_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R8_" + col + "_FILIAL"][j])
                    : 0;
                var Rd9_Col_F = values["CAP22_R9_" + col + "_FILIAL"] && !isNaN(Number(values["CAP22_R9_" + col + "_FILIAL"][j]))
                    ? Number(values["CAP22_R9_" + col + "_FILIAL"][j])
                    : 0;

                // If Rd.8 COL FILIAL ≠ 0, then Rd.9 COL FILIAL ≠ 0
                if (Rd8_Col_F !== 0 && Rd9_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R9_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-075-F. Dacă Tab. 2.2, Rând.8 COL.@col ≠ 0, atunci Tab. 2.2, Rând.9 COL.@col trebuie să fie ≠ 0. Valori: R8-C@col(@Rd8_Col_F), R9-C@col(@Rd9_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd8_Col_F': Rd8_Col_F,
                            '@Rd9_Col_F': Rd9_Col_F
                        })
                    });
                }

                // If Rd.9 COL FILIAL ≠ 0, then Rd.8 COL FILIAL ≠ 0
                if (Rd9_Col_F !== 0 && Rd8_Col_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP22_R8_' + col + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-075-F. Dacă Tab. 2.2, Rând.9 COL.@col ≠ 0, atunci Tab. 2.2, Rând.8 COL.@col trebuie să fie ≠ 0. Valori: R9-C@col(@Rd9_Col_F), R8-C@col(@Rd8_Col_F)', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col': col,
                            '@Rd9_Col_F': Rd9_Col_F,
                            '@Rd8_Col_F': Rd8_Col_F
                        })
                    });
                }
            }
        }
    }
}


function validate27_015(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col1_Tab22 = !isNaN(Number(values["CAP22_R11_" + col1])) ? Number(values["CAP22_R11_" + col1]) : 0;
    var Rd23_Col1_Tab21 = !isNaN(Number(values["CAP21_R23_" + col1])) ? Number(values["CAP21_R23_" + col1]) : 0;

    // If Rd.11 COL.1 in Tab. 2.2 ≠ 0, then Rd.23 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col1_Tab22 !== 0 && Rd23_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R23_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-015. Dacă Tab. 2.2, Rând.11 COL.1 ≠ 0, atunci Tab. 2.1, Rând.23 COL.1 trebuie să fie ≠ 0. Valori: R11-C1(@Rd11_Col1_Tab22), R23-C1(@Rd23_Col1_Tab21)', {
                '@Rd11_Col1_Tab22': Rd11_Col1_Tab22,
                '@Rd23_Col1_Tab21': Rd23_Col1_Tab21
            })
        });
    }

    // If Rd.23 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.1 in Tab. 2.2 ≠ 0
    if (Rd23_Col1_Tab21 !== 0 && Rd11_Col1_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-015. Dacă Tab. 2.1, Rând.23 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.1 trebuie să fie ≠ 0. Valori: R23-C1(@Rd23_Col1_Tab21), R11-C1(@Rd11_Col1_Tab22)', {
                '@Rd23_Col1_Tab21': Rd23_Col1_Tab21,
                '@Rd11_Col1_Tab22': Rd11_Col1_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col1_Tab22_F = values["CAP22_R11_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd23_Col1_Tab21_F = values["CAP21_R23_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R23_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R23_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.1 FILIAL ≠ 0 in Tab. 2.2, then Rd.23 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col1_Tab22_F !== 0 && Rd23_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R23_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-015-F. Dacă Tab. 2.2, Rând.11 COL.1 ≠ 0, atunci Tab. 2.1, Rând.23 COL.1 trebuie să fie ≠ 0. Valori: R11-C1(@Rd11_Col1_Tab22_F), R23-C1(@Rd23_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col1_Tab22_F': Rd11_Col1_Tab22_F,
                        '@Rd23_Col1_Tab21_F': Rd23_Col1_Tab21_F
                    })
                });
            }

            // If Rd.23 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.1 FILIAL ≠ 0 in Tab. 2.2
            if (Rd23_Col1_Tab21_F !== 0 && Rd11_Col1_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-015-F. Dacă Tab. 2.1, Rând.23 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.1 trebuie să fie ≠ 0. Valori: R23-C1(@Rd23_Col1_Tab21_F), R11-C1(@Rd11_Col1_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd23_Col1_Tab21_F': Rd23_Col1_Tab21_F,
                        '@Rd11_Col1_Tab22_F': Rd11_Col1_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_016(values) {
    var col2 = "C2";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col2_Tab22 = !isNaN(Number(values["CAP22_R11_" + col2])) ? Number(values["CAP22_R11_" + col2]) : 0;
    var Rd21_Col1_Tab21 = !isNaN(Number(values["CAP21_R21_" + col1])) ? Number(values["CAP21_R21_" + col1]) : 0;

    // If Rd.11 COL.2 in Tab. 2.2 ≠ 0, then Rd.21 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col2_Tab22 !== 0 && Rd21_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-016. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2_Tab22), R21-C1(@Rd21_Col1_Tab21)', {
                '@Rd11_Col2_Tab22': Rd11_Col2_Tab22,
                '@Rd21_Col1_Tab21': Rd21_Col1_Tab21
            })
        });
    }

    // If Rd.21 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.2 in Tab. 2.2 ≠ 0
    if (Rd21_Col1_Tab21 !== 0 && Rd11_Col2_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col2,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-016. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_Tab21), R11-C2(@Rd11_Col2_Tab22)', {
                '@Rd21_Col1_Tab21': Rd21_Col1_Tab21,
                '@Rd11_Col2_Tab22': Rd11_Col2_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col2_Tab22_F = values["CAP22_R11_" + col2 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col2 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col2 + "_FILIAL"][j])
                : 0;
            var Rd21_Col1_Tab21_F = values["CAP21_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R21_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R21_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.2 FILIAL ≠ 0 in Tab. 2.2, then Rd.21 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col2_Tab22_F !== 0 && Rd21_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R21_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-016-F. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2_Tab22_F), R21-C1(@Rd21_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col2_Tab22_F': Rd11_Col2_Tab22_F,
                        '@Rd21_Col1_Tab21_F': Rd21_Col1_Tab21_F
                    })
                });
            }

            // If Rd.21 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.2 FILIAL ≠ 0 in Tab. 2.2
            if (Rd21_Col1_Tab21_F !== 0 && Rd11_Col2_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col2 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-016-F. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_Tab21_F), R11-C2(@Rd11_Col2_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd21_Col1_Tab21_F': Rd21_Col1_Tab21_F,
                        '@Rd11_Col2_Tab22_F': Rd11_Col2_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_017(values) {
    var col3 = "C3";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col3_Tab22 = !isNaN(Number(values["CAP22_R11_" + col3])) ? Number(values["CAP22_R11_" + col3]) : 0;
    var Rd15_Col1_Tab21 = !isNaN(Number(values["CAP21_R15_" + col1])) ? Number(values["CAP21_R15_" + col1]) : 0;

    // If Rd.11 COL.3 in Tab. 2.2 ≠ 0, then Rd.15 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col3_Tab22 !== 0 && Rd15_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R15_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-017. Dacă Tab. 2.2, Rând.11 COL.3 ≠ 0, atunci Tab. 2.1, Rând.15 COL.1 trebuie să fie ≠ 0. Valori: R11-C3(@Rd11_Col3_Tab22), R15-C1(@Rd15_Col1_Tab21)', {
                '@Rd11_Col3_Tab22': Rd11_Col3_Tab22,
                '@Rd15_Col1_Tab21': Rd15_Col1_Tab21
            })
        });
    }

    // If Rd.15 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.3 in Tab. 2.2 ≠ 0
    if (Rd15_Col1_Tab21 !== 0 && Rd11_Col3_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col3,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-017. Dacă Tab. 2.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.3 trebuie să fie ≠ 0. Valori: R15-C1(@Rd15_Col1_Tab21), R11-C3(@Rd11_Col3_Tab22)', {
                '@Rd15_Col1_Tab21': Rd15_Col1_Tab21,
                '@Rd11_Col3_Tab22': Rd11_Col3_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col3_Tab22_F = values["CAP22_R11_" + col3 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col3 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col3 + "_FILIAL"][j])
                : 0;
            var Rd15_Col1_Tab21_F = values["CAP21_R15_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R15_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R15_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.3 FILIAL ≠ 0 in Tab. 2.2, then Rd.15 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col3_Tab22_F !== 0 && Rd15_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R15_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-017-F. Dacă Tab. 2.2, Rând.11 COL.3 ≠ 0, atunci Tab. 2.1, Rând.15 COL.1 trebuie să fie ≠ 0. Valori: R11-C3(@Rd11_Col3_Tab22_F), R15-C1(@Rd15_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col3_Tab22_F': Rd11_Col3_Tab22_F,
                        '@Rd15_Col1_Tab21_F': Rd15_Col1_Tab21_F
                    })
                });
            }

            // If Rd.15 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.3 FILIAL ≠ 0 in Tab. 2.2
            if (Rd15_Col1_Tab21_F !== 0 && Rd11_Col3_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col3 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-017-F. Dacă Tab. 2.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.3 trebuie să fie ≠ 0. Valori: R15-C1(@Rd15_Col1_Tab21_F), R11-C3(@Rd11_Col3_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd15_Col1_Tab21_F': Rd15_Col1_Tab21_F,
                        '@Rd11_Col3_Tab22_F': Rd11_Col3_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_018(values) {
    var col4 = "C4";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col4_Tab22 = !isNaN(Number(values["CAP22_R11_" + col4])) ? Number(values["CAP22_R11_" + col4]) : 0;
    var Rd36_Col1_Tab21 = !isNaN(Number(values["CAP21_R36_" + col1])) ? Number(values["CAP21_R36_" + col1]) : 0;

    // If Rd.11 COL.4 in Tab. 2.2 ≠ 0, then Rd.36 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col4_Tab22 !== 0 && Rd36_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R36_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-018. Dacă Tab. 2.2, Rând.11 COL.4 ≠ 0, atunci Tab. 2.1, Rând.36 COL.1 trebuie să fie ≠ 0. Valori: R11-C4(@Rd11_Col4_Tab22), R36-C1(@Rd36_Col1_Tab21)', {
                '@Rd11_Col4_Tab22': Rd11_Col4_Tab22,
                '@Rd36_Col1_Tab21': Rd36_Col1_Tab21
            })
        });
    }

    // If Rd.36 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.4 in Tab. 2.2 ≠ 0
    if (Rd36_Col1_Tab21 !== 0 && Rd11_Col4_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col4,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-018. Dacă Tab. 2.1, Rând.36 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.4 trebuie să fie ≠ 0. Valori: R36-C1(@Rd36_Col1_Tab21), R11-C4(@Rd11_Col4_Tab22)', {
                '@Rd36_Col1_Tab21': Rd36_Col1_Tab21,
                '@Rd11_Col4_Tab22': Rd11_Col4_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col4_Tab22_F = values["CAP22_R11_" + col4 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col4 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col4 + "_FILIAL"][j])
                : 0;
            var Rd36_Col1_Tab21_F = values["CAP21_R36_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R36_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R36_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.4 FILIAL ≠ 0 in Tab. 2.2, then Rd.36 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col4_Tab22_F !== 0 && Rd36_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R36_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-018-F. Dacă Tab. 2.2, Rând.11 COL.4 ≠ 0, atunci Tab. 2.1, Rând.36 COL.1 trebuie să fie ≠ 0. Valori: R11-C4(@Rd11_Col4_Tab22_F), R36-C1(@Rd36_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col4_Tab22_F': Rd11_Col4_Tab22_F,
                        '@Rd36_Col1_Tab21_F': Rd36_Col1_Tab21_F
                    })
                });
            }

            // If Rd.36 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.4 FILIAL ≠ 0 in Tab. 2.2
            if (Rd36_Col1_Tab21_F !== 0 && Rd11_Col4_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col4 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-018-F. Dacă Tab. 2.1, Rând.36 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.4 trebuie să fie ≠ 0. Valori: R36-C1(@Rd36_Col1_Tab21_F), R11-C4(@Rd11_Col4_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd36_Col1_Tab21_F': Rd36_Col1_Tab21_F,
                        '@Rd11_Col4_Tab22_F': Rd11_Col4_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_019(values) {
    var col5 = "C5";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col5_Tab22 = !isNaN(Number(values["CAP22_R11_" + col5])) ? Number(values["CAP22_R11_" + col5]) : 0;
    var Rd30_Col1_Tab21 = !isNaN(Number(values["CAP21_R30_" + col1])) ? Number(values["CAP21_R30_" + col1]) : 0;

    // If Rd.11 COL.5 in Tab. 2.2 ≠ 0, then Rd.30 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col5_Tab22 !== 0 && Rd30_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R30_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-019. Dacă Tab. 2.2, Rând.11 COL.5 ≠ 0, atunci Tab. 2.1, Rând.30 COL.1 trebuie să fie ≠ 0. Valori: R11-C5(@Rd11_Col5_Tab22), R30-C1(@Rd30_Col1_Tab21)', {
                '@Rd11_Col5_Tab22': Rd11_Col5_Tab22,
                '@Rd30_Col1_Tab21': Rd30_Col1_Tab21
            })
        });
    }

    // If Rd.30 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.5 in Tab. 2.2 ≠ 0
    if (Rd30_Col1_Tab21 !== 0 && Rd11_Col5_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col5,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-019. Dacă Tab. 2.1, Rând.30 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.5 trebuie să fie ≠ 0. Valori: R30-C1(@Rd30_Col1_Tab21), R11-C5(@Rd11_Col5_Tab22)', {
                '@Rd30_Col1_Tab21': Rd30_Col1_Tab21,
                '@Rd11_Col5_Tab22': Rd11_Col5_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col5_Tab22_F = values["CAP22_R11_" + col5 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col5 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col5 + "_FILIAL"][j])
                : 0;
            var Rd30_Col1_Tab21_F = values["CAP21_R30_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R30_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R30_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.5 FILIAL ≠ 0 in Tab. 2.2, then Rd.30 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col5_Tab22_F !== 0 && Rd30_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R30_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-019-F. Dacă Tab. 2.2, Rând.11 COL.5 ≠ 0, atunci Tab. 2.1, Rând.30 COL.1 trebuie să fie ≠ 0. Valori: R11-C5(@Rd11_Col5_Tab22_F), R30-C1(@Rd30_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col5_Tab22_F': Rd11_Col5_Tab22_F,
                        '@Rd30_Col1_Tab21_F': Rd30_Col1_Tab21_F
                    })
                });
            }

            // If Rd.30 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.5 FILIAL ≠ 0 in Tab. 2.2
            if (Rd30_Col1_Tab21_F !== 0 && Rd11_Col5_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col5 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-019-F. Dacă Tab. 2.1, Rând.30 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.5 trebuie să fie ≠ 0. Valori: R30-C1(@Rd30_Col1_Tab21_F), R11-C5(@Rd11_Col5_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd30_Col1_Tab21_F': Rd30_Col1_Tab21_F,
                        '@Rd11_Col5_Tab22_F': Rd11_Col5_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_020(values) {
    var col6 = "C6";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col6_Tab22 = !isNaN(Number(values["CAP22_R11_" + col6])) ? Number(values["CAP22_R11_" + col6]) : 0;
    var Rd49_Col1_Tab21 = !isNaN(Number(values["CAP21_R49_" + col1])) ? Number(values["CAP21_R49_" + col1]) : 0;

    // If Rd.11 COL.6 in Tab. 2.2 ≠ 0, then Rd.49 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col6_Tab22 !== 0 && Rd49_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R49_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-020. Dacă Tab. 2.2, Rând.11 COL.6 ≠ 0, atunci Tab. 2.1, Rând.49 COL.1 trebuie să fie ≠ 0. Valori: R11-C6(@Rd11_Col6_Tab22), R49-C1(@Rd49_Col1_Tab21)', {
                '@Rd11_Col6_Tab22': Rd11_Col6_Tab22,
                '@Rd49_Col1_Tab21': Rd49_Col1_Tab21
            })
        });
    }

    // If Rd.49 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.6 in Tab. 2.2 ≠ 0
    if (Rd49_Col1_Tab21 !== 0 && Rd11_Col6_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col6,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-020. Dacă Tab. 2.1, Rând.49 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.6 trebuie să fie ≠ 0. Valori: R49-C1(@Rd49_Col1_Tab21), R11-C6(@Rd11_Col6_Tab22)', {
                '@Rd49_Col1_Tab21': Rd49_Col1_Tab21,
                '@Rd11_Col6_Tab22': Rd11_Col6_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col6_Tab22_F = values["CAP22_R11_" + col6 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col6 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col6 + "_FILIAL"][j])
                : 0;
            var Rd49_Col1_Tab21_F = values["CAP21_R49_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R49_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R49_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.6 FILIAL ≠ 0 in Tab. 2.2, then Rd.49 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col6_Tab22_F !== 0 && Rd49_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R49_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-020-F. Dacă Tab. 2.2, Rând.11 COL.6 ≠ 0, atunci Tab. 2.1, Rând.49 COL.1 trebuie să fie ≠ 0. Valori: R11-C6(@Rd11_Col6_Tab22_F), R49-C1(@Rd49_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col6_Tab22_F': Rd11_Col6_Tab22_F,
                        '@Rd49_Col1_Tab21_F': Rd49_Col1_Tab21_F
                    })
                });
            }

            // If Rd.49 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.6 FILIAL ≠ 0 in Tab. 2.2
            if (Rd49_Col1_Tab21_F !== 0 && Rd11_Col6_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col6 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-020-F. Dacă Tab. 2.1, Rând.49 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.6 trebuie să fie ≠ 0. Valori: R49-C1(@Rd49_Col1_Tab21_F), R11-C6(@Rd11_Col6_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd49_Col1_Tab21_F': Rd49_Col1_Tab21_F,
                        '@Rd11_Col6_Tab22_F': Rd11_Col6_Tab22_F
                    })
                });
            }
        }
    }
}


function validate27_021(values) {
    var col7 = "C7";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col7_Tab22 = !isNaN(Number(values["CAP22_R11_" + col7])) ? Number(values["CAP22_R11_" + col7]) : 0;
    var Rd37_Col1_Tab21 = !isNaN(Number(values["CAP21_R37_" + col1])) ? Number(values["CAP21_R37_" + col1]) : 0;

    // If Rd.11 COL.7 in Tab. 2.2 ≠ 0, then Rd.37 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col7_Tab22 !== 0 && Rd37_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R37_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-021. Dacă Tab. 2.2, Rând.11 COL.7 ≠ 0, atunci Tab. 2.1, Rând.37 COL.1 trebuie să fie ≠ 0. Valori: R11-C7(@Rd11_Col7_Tab22), R37-C1(@Rd37_Col1_Tab21)', {
                '@Rd11_Col7_Tab22': Rd11_Col7_Tab22,
                '@Rd37_Col1_Tab21': Rd37_Col1_Tab21
            })
        });
    }

    // If Rd.37 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.7 in Tab. 2.2 ≠ 0
    if (Rd37_Col1_Tab21 !== 0 && Rd11_Col7_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col7,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-021. Dacă Tab. 2.1, Rând.37 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R37-C1(@Rd37_Col1_Tab21), R11-C7(@Rd11_Col7_Tab22)', {
                '@Rd37_Col1_Tab21': Rd37_Col1_Tab21,
                '@Rd11_Col7_Tab22': Rd11_Col7_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col7_Tab22_F = values["CAP22_R11_" + col7 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col7 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col7 + "_FILIAL"][j])
                : 0;
            var Rd37_Col1_Tab21_F = values["CAP21_R37_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R37_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R37_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.7 FILIAL ≠ 0 in Tab. 2.2, then Rd.37 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col7_Tab22_F !== 0 && Rd37_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R37_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-021-F. Dacă Tab. 2.2, Rând.11 COL.7 ≠ 0, atunci Tab. 2.1, Rând.37 COL.1 trebuie să fie ≠ 0. Valori: R11-C7(@Rd11_Col7_Tab22_F), R37-C1(@Rd37_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col7_Tab22_F': Rd11_Col7_Tab22_F,
                        '@Rd37_Col1_Tab21_F': Rd37_Col1_Tab21_F
                    })
                });
            }

            // If Rd.37 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.7 FILIAL ≠ 0 in Tab. 2.2
            if (Rd37_Col1_Tab21_F !== 0 && Rd11_Col7_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col7 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-021-F. Dacă Tab. 2.1, Rând.37 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R37-C1(@Rd37_Col1_Tab21_F), R11-C7(@Rd11_Col7_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd37_Col1_Tab21_F': Rd37_Col1_Tab21_F,
                        '@Rd11_Col7_Tab22_F': Rd11_Col7_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_022(values) {
    var col8 = "C8";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col8_Tab22 = !isNaN(Number(values["CAP22_R11_" + col8])) ? Number(values["CAP22_R11_" + col8]) : 0;
    var Rd38_Col1_Tab21 = !isNaN(Number(values["CAP21_R38_" + col1])) ? Number(values["CAP21_R38_" + col1]) : 0;

    // If Rd.11 COL.8 in Tab. 2.2 ≠ 0, then Rd.38 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col8_Tab22 !== 0 && Rd38_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R38_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-022. Dacă Tab. 2.2, Rând.11 COL.8 ≠ 0, atunci Tab. 2.1, Rând.38 COL.1 trebuie să fie ≠ 0. Valori: R11-C8(@Rd11_Col8_Tab22), R38-C1(@Rd38_Col1_Tab21)', {
                '@Rd11_Col8_Tab22': Rd11_Col8_Tab22,
                '@Rd38_Col1_Tab21': Rd38_Col1_Tab21
            })
        });
    }

    // If Rd.38 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.8 in Tab. 2.2 ≠ 0
    if (Rd38_Col1_Tab21 !== 0 && Rd11_Col8_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col8,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-022. Dacă Tab. 2.1, Rând.38 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R38-C1(@Rd38_Col1_Tab21), R11-C8(@Rd11_Col8_Tab22)', {
                '@Rd38_Col1_Tab21': Rd38_Col1_Tab21,
                '@Rd11_Col8_Tab22': Rd11_Col8_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col8_Tab22_F = values["CAP22_R11_" + col8 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col8 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col8 + "_FILIAL"][j])
                : 0;
            var Rd38_Col1_Tab21_F = values["CAP21_R38_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R38_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R38_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.8 FILIAL ≠ 0 in Tab. 2.2, then Rd.38 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col8_Tab22_F !== 0 && Rd38_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R38_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-022-F. Dacă Tab. 2.2, Rând.11 COL.8 ≠ 0, atunci Tab. 2.1, Rând.38 COL.1 trebuie să fie ≠ 0. Valori: R11-C8(@Rd11_Col8_Tab22_F), R38-C1(@Rd38_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col8_Tab22_F': Rd11_Col8_Tab22_F,
                        '@Rd38_Col1_Tab21_F': Rd38_Col1_Tab21_F
                    })
                });
            }

            // If Rd.38 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.8 FILIAL ≠ 0 in Tab. 2.2
            if (Rd38_Col1_Tab21_F !== 0 && Rd11_Col8_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col8 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-022-F. Dacă Tab. 2.1, Rând.38 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R38-C1(@Rd38_Col1_Tab21_F), R11-C8(@Rd11_Col8_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd38_Col1_Tab21_F': Rd38_Col1_Tab21_F,
                        '@Rd11_Col8_Tab22_F': Rd11_Col8_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_023(values) {
    var col8 = "C8";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col8_Tab22 = !isNaN(Number(values["CAP22_R11_" + col8])) ? Number(values["CAP22_R11_" + col8]) : 0;
    var Rd45_Col1_Tab21 = !isNaN(Number(values["CAP21_R45_" + col1])) ? Number(values["CAP21_R45_" + col1]) : 0;

    // If Rd.11 COL.8 in Tab. 2.2 ≠ 0, then Rd.45 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col8_Tab22 !== 0 && Rd45_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R45_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-023. Dacă Tab. 2.2, Rând.11 COL.8 ≠ 0, atunci Tab. 2.1, Rând.45 COL.1 trebuie să fie ≠ 0. Valori: R11-C8(@Rd11_Col8_Tab22), R45-C1(@Rd45_Col1_Tab21)', {
                '@Rd11_Col8_Tab22': Rd11_Col8_Tab22,
                '@Rd45_Col1_Tab21': Rd45_Col1_Tab21
            })
        });
    }

    // If Rd.45 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.8 in Tab. 2.2 ≠ 0
    if (Rd45_Col1_Tab21 !== 0 && Rd11_Col8_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col8,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-023. Dacă Tab. 2.1, Rând.45 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R45-C1(@Rd45_Col1_Tab21), R11-C8(@Rd11_Col8_Tab22)', {
                '@Rd45_Col1_Tab21': Rd45_Col1_Tab21,
                '@Rd11_Col8_Tab22': Rd11_Col8_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col8_Tab22_F = values["CAP22_R11_" + col8 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col8 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col8 + "_FILIAL"][j])
                : 0;
            var Rd45_Col1_Tab21_F = values["CAP21_R45_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R45_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R45_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.8 FILIAL ≠ 0 in Tab. 2.2, then Rd.45 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col8_Tab22_F !== 0 && Rd45_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R45_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-023-F. Dacă Tab. 2.2, Rând.11 COL.8 ≠ 0, atunci Tab. 2.1, Rând.45 COL.1 trebuie să fie ≠ 0. Valori: R11-C8(@Rd11_Col8_Tab22_F), R45-C1(@Rd45_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col8_Tab22_F': Rd11_Col8_Tab22_F,
                        '@Rd45_Col1_Tab21_F': Rd45_Col1_Tab21_F
                    })
                });
            }

            // If Rd.45 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.8 FILIAL ≠ 0 in Tab. 2.2
            if (Rd45_Col1_Tab21_F !== 0 && Rd11_Col8_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col8 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-023-F. Dacă Tab. 2.1, Rând.45 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R45-C1(@Rd45_Col1_Tab21_F), R11-C8(@Rd11_Col8_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd45_Col1_Tab21_F': Rd45_Col1_Tab21_F,
                        '@Rd11_Col8_Tab22_F': Rd11_Col8_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_024(values) {
    var col9 = "C9";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col9_Tab22 = !isNaN(Number(values["CAP22_R11_" + col9])) ? Number(values["CAP22_R11_" + col9]) : 0;
    var Rd50_Col1_Tab21 = !isNaN(Number(values["CAP21_R50_" + col1])) ? Number(values["CAP21_R50_" + col1]) : 0;

    // If Rd.11 COL.9 in Tab. 2.2 ≠ 0, then Rd.50 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col9_Tab22 !== 0 && Rd50_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R50_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-024. Dacă Tab. 2.2, Rând.11 COL.9 ≠ 0, atunci Tab. 2.1, Rând.50 COL.1 trebuie să fie ≠ 0. Valori: R11-C9(@Rd11_Col9_Tab22), R50-C1(@Rd50_Col1_Tab21)', {
                '@Rd11_Col9_Tab22': Rd11_Col9_Tab22,
                '@Rd50_Col1_Tab21': Rd50_Col1_Tab21
            })
        });
    }

    // If Rd.50 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.9 in Tab. 2.2 ≠ 0
    if (Rd50_Col1_Tab21 !== 0 && Rd11_Col9_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col9,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-024. Dacă Tab. 2.1, Rând.50 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.9 trebuie să fie ≠ 0. Valori: R50-C1(@Rd50_Col1_Tab21), R11-C9(@Rd11_Col9_Tab22)', {
                '@Rd50_Col1_Tab21': Rd50_Col1_Tab21,
                '@Rd11_Col9_Tab22': Rd11_Col9_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col9_Tab22_F = values["CAP22_R11_" + col9 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col9 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col9 + "_FILIAL"][j])
                : 0;
            var Rd50_Col1_Tab21_F = values["CAP21_R50_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R50_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R50_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.9 FILIAL ≠ 0 in Tab. 2.2, then Rd.50 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col9_Tab22_F !== 0 && Rd50_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R50_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-024-F. Dacă Tab. 2.2, Rând.11 COL.9 ≠ 0, atunci Tab. 2.1, Rând.50 COL.1 trebuie să fie ≠ 0. Valori: R11-C9(@Rd11_Col9_Tab22_F), R50-C1(@Rd50_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col9_Tab22_F': Rd11_Col9_Tab22_F,
                        '@Rd50_Col1_Tab21_F': Rd50_Col1_Tab21_F
                    })
                });
            }

            // If Rd.50 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.9 FILIAL ≠ 0 in Tab. 2.2
            if (Rd50_Col1_Tab21_F !== 0 && Rd11_Col9_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col9 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-024-F. Dacă Tab. 2.1, Rând.50 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.9 trebuie să fie ≠ 0. Valori: R50-C1(@Rd50_Col1_Tab21_F), R11-C9(@Rd11_Col9_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd50_Col1_Tab21_F': Rd50_Col1_Tab21_F,
                        '@Rd11_Col9_Tab22_F': Rd11_Col9_Tab22_F
                    })
                });
            }
        }
    }
}

function validate27_025(values) {
    var col11 = "C11";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col11_Tab22 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;
    var Rd52_Col1_Tab21 = !isNaN(Number(values["CAP21_R52_" + col1])) ? Number(values["CAP21_R52_" + col1]) : 0;

    // If Rd.11 COL.11 in Tab. 2.2 ≠ 0, then Rd.52 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col11_Tab22 !== 0 && Rd52_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R52_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-025. Dacă Tab. 2.2, Rând.11 COL.11 ≠ 0, atunci Tab. 2.1, Rând.52 COL.1 trebuie să fie ≠ 0. Valori: R11-C11(@Rd11_Col11_Tab22), R52-C1(@Rd52_Col1_Tab21)', {
                '@Rd11_Col11_Tab22': Rd11_Col11_Tab22,
                '@Rd52_Col1_Tab21': Rd52_Col1_Tab21
            })
        });
    }

    // If Rd.52 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.11 in Tab. 2.2 ≠ 0
    if (Rd52_Col1_Tab21 !== 0 && Rd11_Col11_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col11,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-025. Dacă Tab. 2.1, Rând.52 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R52-C1(@Rd52_Col1_Tab21), R11-C11(@Rd11_Col11_Tab22)', {
                '@Rd52_Col1_Tab21': Rd52_Col1_Tab21,
                '@Rd11_Col11_Tab22': Rd11_Col11_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col11_Tab22_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
                : 0;
            var Rd52_Col1_Tab21_F = values["CAP21_R52_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R52_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R52_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.11 FILIAL ≠ 0 in Tab. 2.2, then Rd.52 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col11_Tab22_F !== 0 && Rd52_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R52_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-025-F. Dacă Tab. 2.2, Rând.11 COL.11 ≠ 0, atunci Tab. 2.1, Rând.52 COL.1 trebuie să fie ≠ 0. Valori: R11-C11(@Rd11_Col11_Tab22_F), R52-C1(@Rd52_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col11_Tab22_F': Rd11_Col11_Tab22_F,
                        '@Rd52_Col1_Tab21_F': Rd52_Col1_Tab21_F
                    })
                });
            }

            // If Rd.52 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.11 FILIAL ≠ 0 in Tab. 2.2
            if (Rd52_Col1_Tab21_F !== 0 && Rd11_Col11_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col11 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-025-F. Dacă Tab. 2.1, Rând.52 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R52-C1(@Rd52_Col1_Tab21_F), R11-C11(@Rd11_Col11_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd52_Col1_Tab21_F': Rd52_Col1_Tab21_F,
                        '@Rd11_Col11_Tab22_F': Rd11_Col11_Tab22_F
                    })
                });
            }
        }
    }
}
function validate27_026(values) {
    var col12 = "C12";
    var col1 = "C1";

    // Main Data Validation
    var Rd11_Col12_Tab22 = !isNaN(Number(values["CAP22_R11_" + col12])) ? Number(values["CAP22_R11_" + col12]) : 0;
    var Rd55_Col1_Tab21 = !isNaN(Number(values["CAP21_R55_" + col1])) ? Number(values["CAP21_R55_" + col1]) : 0;

    // If Rd.11 COL.12 in Tab. 2.2 ≠ 0, then Rd.55 COL.1 in Tab. 2.1 ≠ 0
    if (Rd11_Col12_Tab22 !== 0 && Rd55_Col1_Tab21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R55_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-026. Dacă Tab. 2.2, Rând.11 COL.12 ≠ 0, atunci Tab. 2.1, Rând.55 COL.1 trebuie să fie ≠ 0. Valori: R11-C12(@Rd11_Col12_Tab22), R55-C1(@Rd55_Col1_Tab21)', {
                '@Rd11_Col12_Tab22': Rd11_Col12_Tab22,
                '@Rd55_Col1_Tab21': Rd55_Col1_Tab21
            })
        });
    }

    // If Rd.55 COL.1 in Tab. 2.1 ≠ 0, then Rd.11 COL.12 in Tab. 2.2 ≠ 0
    if (Rd55_Col1_Tab21 !== 0 && Rd11_Col12_Tab22 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col12,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-026. Dacă Tab. 2.1, Rând.55 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.12 trebuie să fie ≠ 0. Valori: R55-C1(@Rd55_Col1_Tab21), R11-C12(@Rd11_Col12_Tab22)', {
                '@Rd55_Col1_Tab21': Rd55_Col1_Tab21,
                '@Rd11_Col12_Tab22': Rd11_Col12_Tab22
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd11_Col12_Tab22_F = values["CAP22_R11_" + col12 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col12 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col12 + "_FILIAL"][j])
                : 0;
            var Rd55_Col1_Tab21_F = values["CAP21_R55_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R55_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R55_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.11 COL.12 FILIAL ≠ 0 in Tab. 2.2, then Rd.55 COL.1 FILIAL ≠ 0 in Tab. 2.1
            if (Rd11_Col12_Tab22_F !== 0 && Rd55_Col1_Tab21_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP21_R55_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-026-F. Dacă Tab. 2.2, Rând.11 COL.12 ≠ 0, atunci Tab. 2.1, Rând.55 COL.1 trebuie să fie ≠ 0. Valori: R11-C12(@Rd11_Col12_Tab22_F), R55-C1(@Rd55_Col1_Tab21_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col12_Tab22_F': Rd11_Col12_Tab22_F,
                        '@Rd55_Col1_Tab21_F': Rd55_Col1_Tab21_F
                    })
                });
            }

            // If Rd.55 COL.1 FILIAL ≠ 0 in Tab. 2.1, then Rd.11 COL.12 FILIAL ≠ 0 in Tab. 2.2
            if (Rd55_Col1_Tab21_F !== 0 && Rd11_Col12_Tab22_F === 0) {
                webform.errors.push({
                    'fieldName': 'CAP22_R11_' + col12 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-026-F. Dacă Tab. 2.1, Rând.55 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.12 trebuie să fie ≠ 0. Valori: R55-C1(@Rd55_Col1_Tab21_F), R11-C12(@Rd11_Col12_Tab22_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd55_Col1_Tab21_F': Rd55_Col1_Tab21_F,
                        '@Rd11_Col12_Tab22_F': Rd11_Col12_Tab22_F
                    })
                });
            }
        }
    }
}




//--------------------------------------------------


function validate27_030(values) {
    var col1 = "C1";

    var Rd7_Col1 = !isNaN(Number(values["CAP111_R7_" + col1])) ? Number(values["CAP111_R7_" + col1]) : 0;
    var Rd21_Col1 = !isNaN(Number(values["CAP21_R21_" + col1])) ? Number(values["CAP21_R21_" + col1]) : 0;

    if (Rd7_Col1 !== 0 && Rd21_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP21_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-030. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1), R21-C1(@Rd21_Col1)', {
                '@Rd7_Col1': Rd7_Col1,
                '@Rd21_Col1': Rd21_Col1
            })
        });
    }

    if (Rd21_Col1 !== 0 && Rd7_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R7_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-030. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1), R7-C1(@Rd7_Col1)', {
                '@Rd21_Col1': Rd21_Col1,
                '@Rd7_Col1': Rd7_Col1
            })
        });
    }

    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd7_Col1_F = values["CAP111_R7_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R7_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd21_Col1_F = values["CAP21_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R21_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R21_" + col1 + "_FILIAL"][j])
                : 0;

            if (Rd7_Col1_F !== 0 && Rd21_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP21_R21_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-030-F. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 2.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1_F), R21-C1(@Rd21_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd7_Col1_F': Rd7_Col1_F,
                        '@Rd21_Col1_F': Rd21_Col1_F
                    })
                });
            }

            if (Rd21_Col1_F !== 0 && Rd7_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R7_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-030-F. Dacă Tab. 2.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_F), R7-C1(@Rd7_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd21_Col1_F': Rd21_Col1_F,
                        '@Rd7_Col1_F': Rd7_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_031(values) {
    var col1 = "C1";
    var col2 = "C2";

    // Main Data Validation
    var Rd7_Col1 = !isNaN(Number(values["CAP111_R7_" + col1])) ? Number(values["CAP111_R7_" + col1]) : 0;
    var Rd11_Col2 = !isNaN(Number(values["CAP22_R11_" + col2])) ? Number(values["CAP22_R11_" + col2]) : 0;

    // If Rd.7 COL.1 ≠ 0, then Rd.11 COL.2 ≠ 0
    if (Rd7_Col1 !== 0 && Rd11_Col2 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP22_R11_' + col2,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-031. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1), R11-C2(@Rd11_Col2)', {
                '@Rd7_Col1': Rd7_Col1,
                '@Rd11_Col2': Rd11_Col2
            })
        });
    }

    // If Rd.11 COL.2 ≠ 0, then Rd.7 COL.1 ≠ 0
    if (Rd11_Col2 !== 0 && Rd7_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R7_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-031. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2), R7-C1(@Rd7_Col1)', {
                '@Rd11_Col2': Rd11_Col2,
                '@Rd7_Col1': Rd7_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd7_Col1_F = values["CAP111_R7_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R7_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd11_Col2_F = values["CAP22_R11_" + col2 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col2 + "_FILIAL"][j]))
                ? Number(values["CAP22_R11_" + col2 + "_FILIAL"][j])
                : 0;

            // If Rd.7 COL.1 ≠ 0 in FILIAL, then Rd.11 COL.2 ≠ 0
            if (Rd7_Col1_F !== 0 && Rd11_Col2_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP22_R11_' + col2 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-031-F. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.2 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1_F), R11-C2(@Rd11_Col2_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd7_Col1_F': Rd7_Col1_F,
                        '@Rd11_Col2_F': Rd11_Col2_F
                    })
                });
            }

            // If Rd.11 COL.2 ≠ 0 in FILIAL, then Rd.7 COL.1 ≠ 0
            if (Rd11_Col2_F !== 0 && Rd7_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R7_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-031-F. Dacă Tab. 2.2, Rând.11 COL.2 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R11-C2(@Rd11_Col2_F), R7-C1(@Rd7_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd11_Col2_F': Rd11_Col2_F,
                        '@Rd7_Col1_F': Rd7_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_032(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd8_Col1 = !isNaN(Number(values["CAP111_R8_" + col1])) ? Number(values["CAP111_R8_" + col1]) : 0;
    var Rd39_Col1 = !isNaN(Number(values["CAP21_R39_" + col1])) ? Number(values["CAP21_R39_" + col1]) : 0;

    // If Rd.8 COL.1 ≠ 0, then Rd.39 COL.1 ≠ 0
    if (Rd8_Col1 !== 0 && Rd39_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP21_R39_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-032. Dacă Tab. 1.1.1, Rând.8 COL.1 ≠ 0, atunci Tab. 2.1, Rând.39 COL.1 trebuie să fie ≠ 0. Valori: R8-C1(@Rd8_Col1), R39-C1(@Rd39_Col1)', {
                '@Rd8_Col1': Rd8_Col1,
                '@Rd39_Col1': Rd39_Col1
            })
        });
    }

    // If Rd.39 COL.1 ≠ 0, then Rd.8 COL.1 ≠ 0
    if (Rd39_Col1 !== 0 && Rd8_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R8_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-032. Dacă Tab. 2.1, Rând.39 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.8 COL.1 trebuie să fie ≠ 0. Valori: R39-C1(@Rd39_Col1), R8-C1(@Rd8_Col1)', {
                '@Rd39_Col1': Rd39_Col1,
                '@Rd8_Col1': Rd8_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd8_Col1_F = values["CAP111_R8_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R8_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R8_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd39_Col1_F = values["CAP21_R39_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R39_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R39_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.8 COL.1 ≠ 0 in FILIAL, then Rd.39 COL.1 ≠ 0
            if (Rd8_Col1_F !== 0 && Rd39_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP21_R39_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-032-F. Dacă Tab. 1.1.1, Rând.8 COL.1 ≠ 0, atunci Tab. 2.1, Rând.39 COL.1 trebuie să fie ≠ 0. Valori: R8-C1(@Rd8_Col1_F), R39-C1(@Rd39_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd8_Col1_F': Rd8_Col1_F,
                        '@Rd39_Col1_F': Rd39_Col1_F
                    })
                });
            }

            // If Rd.39 COL.1 ≠ 0 in FILIAL, then Rd.8 COL.1 ≠ 0
            if (Rd39_Col1_F !== 0 && Rd8_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R8_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-032-F. Dacă Tab. 2.1, Rând.39 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.8 COL.1 trebuie să fie ≠ 0. Valori: R39-C1(@Rd39_Col1_F), R8-C1(@Rd8_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd39_Col1_F': Rd39_Col1_F,
                        '@Rd8_Col1_F': Rd8_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_034(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd9_Col1 = !isNaN(Number(values["CAP111_R9_" + col1])) ? Number(values["CAP111_R9_" + col1]) : 0;
    var Rd46_Col1 = !isNaN(Number(values["CAP21_R46_" + col1])) ? Number(values["CAP21_R46_" + col1]) : 0;

    // If Rd.9 COL.1 ≠ 0, then Rd.46 COL.1 ≠ 0
    if (Rd9_Col1 !== 0 && Rd46_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP21_R46_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-034. Dacă Tab. 1.1.1, Rând.9 COL.1 ≠ 0, atunci Tab. 2.1, Rând.46 COL.1 trebuie să fie ≠ 0. Valori: R9-C1(@Rd9_Col1), R46-C1(@Rd46_Col1)', {
                '@Rd9_Col1': Rd9_Col1,
                '@Rd46_Col1': Rd46_Col1
            })
        });
    }

    // If Rd.46 COL.1 ≠ 0, then Rd.9 COL.1 ≠ 0
    if (Rd46_Col1 !== 0 && Rd9_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R9_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-034. Dacă Tab. 2.1, Rând.46 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.9 COL.1 trebuie să fie ≠ 0. Valori: R46-C1(@Rd46_Col1), R9-C1(@Rd9_Col1)', {
                '@Rd46_Col1': Rd46_Col1,
                '@Rd9_Col1': Rd9_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd9_Col1_F = values["CAP111_R9_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R9_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R9_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd46_Col1_F = values["CAP21_R46_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R46_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP21_R46_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.9 COL.1 ≠ 0 in FILIAL, then Rd.46 COL.1 ≠ 0
            if (Rd9_Col1_F !== 0 && Rd46_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP21_R46_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-034-F. Dacă Tab. 1.1.1, Rând.9 COL.1 ≠ 0, atunci Tab. 2.1, Rând.46 COL.1 trebuie să fie ≠ 0. Valori: R9-C1(@Rd9_Col1_F), R46-C1(@Rd46_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd9_Col1_F': Rd9_Col1_F,
                        '@Rd46_Col1_F': Rd46_Col1_F
                    })
                });
            }

            // If Rd.46 COL.1 ≠ 0 in FILIAL, then Rd.9 COL.1 ≠ 0
            if (Rd46_Col1_F !== 0 && Rd9_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R9_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-034-F. Dacă Tab. 2.1, Rând.46 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.9 COL.1 trebuie să fie ≠ 0. Valori: R46-C1(@Rd46_Col1_F), R9-C1(@Rd9_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd46_Col1_F': Rd46_Col1_F,
                        '@Rd9_Col1_F': Rd9_Col1_F
                    })
                });
            }
        }
    }
}

function validate27_037(values) {
    var col1 = "C1";

    // Main Data Validation
    var Rd10_Col1 = !isNaN(Number(values["CAP111_R10_" + col1])) ? Number(values["CAP111_R10_" + col1]) : 0;
    var Rd21_Col1 = !isNaN(Number(values["CAP111_R21_" + col1])) ? Number(values["CAP111_R21_" + col1]) : 0;

    // If Rd.10 COL.1 ≠ 0, then Rd.21 COL.1 ≠ 0
    if (Rd10_Col1 !== 0 && Rd21_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-037. Dacă Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R10-C1(@Rd10_Col1), R21-C1(@Rd21_Col1)', {
                '@Rd10_Col1': Rd10_Col1,
                '@Rd21_Col1': Rd21_Col1
            })
        });
    }

    // If Rd.21 COL.1 ≠ 0, then Rd.10 COL.1 ≠ 0
    if (Rd21_Col1 !== 0 && Rd10_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R10_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-037. Dacă Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.10 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1), R10-C1(@Rd10_Col1)', {
                '@Rd21_Col1': Rd21_Col1,
                '@Rd10_Col1': Rd10_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd10_Col1_F = values["CAP111_R10_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R10_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd21_Col1_F = values["CAP111_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R21_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R21_" + col1 + "_FILIAL"][j])
                : 0;

            // If Rd.10 COL.1 ≠ 0 in FILIAL, then Rd.21 COL.1 ≠ 0
            if (Rd10_Col1_F !== 0 && Rd21_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R21_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-037-F. Dacă Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.21 COL.1 trebuie să fie ≠ 0. Valori: R10-C1(@Rd10_Col1_F), R21-C1(@Rd21_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd10_Col1_F': Rd10_Col1_F,
                        '@Rd21_Col1_F': Rd21_Col1_F
                    })
                });
            }

            // If Rd.21 COL.1 ≠ 0 in FILIAL, then Rd.10 COL.1 ≠ 0
            if (Rd21_Col1_F !== 0 && Rd10_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R10_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-037-F. Dacă Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.10 COL.1 trebuie să fie ≠ 0. Valori: R21-C1(@Rd21_Col1_F), R10-C1(@Rd10_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd21_Col1_F': Rd21_Col1_F,
                        '@Rd10_Col1_F': Rd10_Col1_F
                    })
                });
            }
        }
    }
}


//----------------------------------------------------------------------------------------------------

function validate27_029(values) {
    var col1 = "C1";

    // Retrieve the values for Rd.7 COL.1 and Rd.20 COL.1
    var Rd7_Col1 = !isNaN(Number(values["CAP111_R7_" + col1])) ? Number(values["CAP111_R7_" + col1]) : 0;
    var Rd20_Col1 = !isNaN(Number(values["CAP111_R20_" + col1])) ? Number(values["CAP111_R20_" + col1]) : 0;

    // Validation: Rd.7 COL.1 ≠ 0 implies Rd.20 COL.1 ≠ 0
    if (Rd7_Col1 !== 0 && Rd20_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R20_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-029. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1), R20-C1(@Rd20_Col1)', {
                '@Rd7_Col1': Rd7_Col1,
                '@Rd20_Col1': Rd20_Col1
            })
        });
    }

    // Validation: Rd.20 COL.1 ≠ 0 implies Rd.7 COL.1 ≠ 0
    if (Rd20_Col1 !== 0 && Rd7_Col1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP111_R7_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-029. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1), R7-C1(@Rd7_Col1)', {
                '@Rd20_Col1': Rd20_Col1,
                '@Rd7_Col1': Rd7_Col1
            })
        });
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            var Rd7_Col1_F = values["CAP111_R7_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R7_" + col1 + "_FILIAL"][j])
                : 0;
            var Rd20_Col1_F = values["CAP111_R20_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_" + col1 + "_FILIAL"][j]))
                ? Number(values["CAP111_R20_" + col1 + "_FILIAL"][j])
                : 0;

            // Validation: Rd.7 COL.1 ≠ 0 implies Rd.20 COL.1 ≠ 0
            if (Rd7_Col1_F !== 0 && Rd20_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R20_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-029-F. Dacă Tab. 1.1.1, Rând.7 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.20 COL.1 trebuie să fie ≠ 0. Valori: R7-C1(@Rd7_Col1_F), R20-C1(@Rd20_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd7_Col1_F': Rd7_Col1_F,
                        '@Rd20_Col1_F': Rd20_Col1_F
                    })
                });
            }

            // Validation: Rd.20 COL.1 ≠ 0 implies Rd.7 COL.1 ≠ 0
            if (Rd20_Col1_F !== 0 && Rd7_Col1_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R7_' + col1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-029-F. Dacă Tab. 1.1.1, Rând.20 COL.1 ≠ 0, atunci Tab. 1.1.1, Rând.7 COL.1 trebuie să fie ≠ 0. Valori: R20-C1(@Rd20_Col1_F), R7-C1(@Rd7_Col1_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@Rd20_Col1_F': Rd20_Col1_F,
                        '@Rd7_Col1_F': Rd7_Col1_F
                    })
                });
            }
        }
    }
}


//-----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------------------
// Validation function for 27-036: Tab. 1.1.1, rd.10 COL1 ≥ Tab. 1.1.1 rd.11 COL1
function validate27_036(values) {
    var col1 = "C1";

    var CAP111_R10_C1 = !isNaN(Number(values["CAP111_R10_" + col1])) ? Number(values["CAP111_R10_" + col1]) : 0;
    var CAP111_R11_C1 = !isNaN(Number(values["CAP111_R11_" + col1])) ? Number(values["CAP111_R11_" + col1]) : 0;

    if (CAP111_R10_C1 < CAP111_R11_C1) {
        webform.warnings.push({
            'fieldName': 'CAP111_R10_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-036. Tab. 1.1.1, Rând.10 COL.1 trebuie să fie ≥ Tab. 1.1.1, Rând.11 COL.1. Valori: R10-C1(@CAP111_R10_C1), R11-C1(@CAP111_R11_C1)', {
                '@CAP111_R10_C1': CAP111_R10_C1,
                '@CAP111_R11_C1': CAP111_R11_C1
            })
        });
    }
}

// Validation function for 27-051: Tab. 1.1.1, Rind.17 COL1 ≥ Tab. 1.1.1 Rind.18 COL1
function validate27_051(values) {
    var col1 = "C1";

    var CAP111_R17_C1 = !isNaN(Number(values["CAP111_R17_" + col1])) ? Number(values["CAP111_R17_" + col1]) : 0;
    var CAP111_R18_C1 = !isNaN(Number(values["CAP111_R18_" + col1])) ? Number(values["CAP111_R18_" + col1]) : 0;

    if (CAP111_R17_C1 < CAP111_R18_C1) {
        webform.errors.push({
            'fieldName': 'CAP111_R17_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-051. Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≥ Tab. 1.1.1, Rând.18 COL.1. Valori: R17-C1(@CAP111_R17_C1), R18-C1(@CAP111_R18_C1)', {
                '@CAP111_R17_C1': CAP111_R17_C1,
                '@CAP111_R18_C1': CAP111_R18_C1
            })
        });
    }
}


// Validation function for 27-036 (FILIAL): Tab. 1.1.1, rd.10 COL1 ≥ Tab. 1.1.1 rd.11 COL1
function validate27_036_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R10_C1_F = values["CAP111_R10_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R10_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP111_R11_C1_F = values["CAP111_R11_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R11_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP111_R10_C1_F < CAP111_R11_C1_F) {
            webform.warnings.push({
                'fieldName': 'CAP111_R10_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Atenție: 27-036-F. Tab. 1.1.1, Rând.10 COL.1 trebuie să fie ≥ Tab. 1.1.1, Rând.11 COL.1. Valori: R10-C1(@CAP111_R10_C1_F), R11-C1(@CAP111_R11_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R10_C1_F': CAP111_R10_C1_F,
                    '@CAP111_R11_C1_F': CAP111_R11_C1_F
                })
            });
        }
    }
}

// Validation function for 27-051 (FILIAL): Tab. 1.1.1, Rind.17 COL1 ≥ Tab. 1.1.1 Rind.18 COL1
function validate27_051_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R17_C1_F = values["CAP111_R17_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R17_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP111_R18_C1_F = values["CAP111_R18_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R18_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP111_R17_C1_F < CAP111_R18_C1_F) {
            webform.errors.push({
                'fieldName': 'CAP111_R17_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-051-F. Tab. 1.1.1, Rând.17 COL.1 trebuie să fie ≥ Tab. 1.1.1, Rând.18 COL.1. Valori: R17-C1(@CAP111_R17_C1_F), R18-C1(@CAP111_R18_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R17_C1_F': CAP111_R17_C1_F,
                    '@CAP111_R18_C1_F': CAP111_R18_C1_F
                })
            });
        }
    }
}

//---------------------------------------------------------------------------------------------------

// Validation function for 27-033 (FILIAL): Tab. 1.1.1, Daca Rd.8 COL. 1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.8 ≠ 0
function validate27_033_F(values) {
    var col1 = "C1";
    var col8 = "C8";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R8_C1_F = values["CAP111_R8_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R8_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R8_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C8_F = values["CAP22_R11_" + col8 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col8 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col8 + "_FILIAL"][j])
            : 0;

        if (CAP111_R8_C1_F !== 0 && CAP22_R11_C8_F === 0) {
            webform.warnings.push({
                'fieldName': 'CAP22_R11_' + col8 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Atenție: 27-033-F. Tab. 1.1.1, Rând.8 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R8-C1(@CAP111_R8_C1_F), R11-C8(@CAP22_R11_C8_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R8_C1_F': CAP111_R8_C1_F,
                    '@CAP22_R11_C8_F': CAP22_R11_C8_F
                })
            });
        }
    }
}

// Validation function for 27-035 (FILIAL): Tab. 1.1.1, Daca Rd.9 COL. 1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.8 ≠ 0
function validate27_035_F(values) {
    var col1 = "C1";
    var col8 = "C8";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R9_C1_F = values["CAP111_R9_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R9_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R9_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C8_F = values["CAP22_R11_" + col8 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col8 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col8 + "_FILIAL"][j])
            : 0;

        if (CAP111_R9_C1_F !== 0 && CAP22_R11_C8_F === 0) {
            webform.warnings.push({
                'fieldName': 'CAP22_R11_' + col8 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Atenție: 27-035-F. Tab. 1.1.1, Rând.9 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R9-C1(@CAP111_R9_C1_F), R11-C8(@CAP22_R11_C8_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R9_C1_F': CAP111_R9_C1_F,
                    '@CAP22_R11_C8_F': CAP22_R11_C8_F
                })
            });
        }
    }
}

// Validation function for 27-038 (FILIAL): Tab. 1.1.1, Daca rd.10 COL.1 ≠ 0, atunci Tab. 2.1, Rind.53 COL.1 ≠ 0
function validate27_038_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R10_C1_F = values["CAP111_R10_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R10_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R53_C1_F = values["CAP21_R53_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R53_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R53_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP111_R10_C1_F !== 0 && CAP21_R53_C1_F === 0) {
            webform.warnings.push({
                'fieldName': 'CAP21_R53_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Atenție: 27-038-F. Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 2.1, Rând.53 COL.1 trebuie să fie ≠ 0. Valori: R10-C1(@CAP111_R10_C1_F), R53-C1(@CAP21_R53_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R10_C1_F': CAP111_R10_C1_F,
                    '@CAP21_R53_C1_F': CAP21_R53_C1_F
                })
            });
        }
    }
}

// Validation function for 27-057 (FILIAL): Tab. 1.1.1, Daca rd.21 COL.1 ≠ 0, atunci Tab. 2.2 , rd.11 COL.11 ≠ 0
function validate27_057_F(values) {
    var col1 = "C1";
    var col11 = "C11";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R21_C1_F = values["CAP111_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R21_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R21_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C11_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
            : 0;

        if (CAP111_R21_C1_F !== 0 && CAP22_R11_C11_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col11 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-057-F. Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R21-C1(@CAP111_R21_C1_F), R11-C11(@CAP22_R11_C11_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R21_C1_F': CAP111_R21_C1_F,
                    '@CAP22_R11_C11_F': CAP22_R11_C11_F
                })
            });
        }
    }
}


// Validation function for 27-033: Tab. 1.1.1, Daca Rd.8 COL. 1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.8 ≠ 0
function validate27_033(values) {
    var col1 = "C1";
    var col8 = "C8";

    var CAP111_R8_C1 = !isNaN(Number(values["CAP111_R8_" + col1])) ? Number(values["CAP111_R8_" + col1]) : 0;
    var CAP22_R11_C8 = !isNaN(Number(values["CAP22_R11_" + col8])) ? Number(values["CAP22_R11_" + col8]) : 0;

    if (CAP111_R8_C1 !== 0 && CAP22_R11_C8 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP22_R11_' + col8,
            'weight': 19,
            'msg': Drupal.t('Atenție: 27-033. Tab. 1.1.1, Rând.8 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R8-C1(@CAP111_R8_C1), R11-C8(@CAP22_R11_C8)', {
                '@CAP111_R8_C1': CAP111_R8_C1,
                '@CAP22_R11_C8': CAP22_R11_C8
            })
        });
    }
}

// Validation function for 27-035: Tab. 1.1.1, Daca Rd.9 COL. 1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.8 ≠ 0
function validate27_035(values) {
    var col1 = "C1";
    var col8 = "C8";

    var CAP111_R9_C1 = !isNaN(Number(values["CAP111_R9_" + col1])) ? Number(values["CAP111_R9_" + col1]) : 0;
    var CAP22_R11_C8 = !isNaN(Number(values["CAP22_R11_" + col8])) ? Number(values["CAP22_R11_" + col8]) : 0;

    if (CAP111_R9_C1 !== 0 && CAP22_R11_C8 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP22_R11_' + col8,
            'weight': 19,
            'msg': Drupal.t('Atenție: 27-035. Tab. 1.1.1, Rând.9 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.8 trebuie să fie ≠ 0. Valori: R9-C1(@CAP111_R9_C1), R11-C8(@CAP22_R11_C8)', {
                '@CAP111_R9_C1': CAP111_R9_C1,
                '@CAP22_R11_C8': CAP22_R11_C8
            })
        });
    }
}

// Validation function for 27-038: Tab. 1.1.1, Daca rd.10 COL.1 ≠ 0, atunci Tab. 2.1, Rind.53 COL.1 ≠ 0
function validate27_038(values) {
    var col1 = "C1";

    var CAP111_R10_C1 = !isNaN(Number(values["CAP111_R10_" + col1])) ? Number(values["CAP111_R10_" + col1]) : 0;
    var CAP21_R53_C1 = !isNaN(Number(values["CAP21_R53_" + col1])) ? Number(values["CAP21_R53_" + col1]) : 0;

    if (CAP111_R10_C1 !== 0 && CAP21_R53_C1 === 0) {
        webform.warnings.push({
            'fieldName': 'CAP21_R53_' + col1,
            'weight': 19,
            'msg': Drupal.t('Atenție: 27-038. Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 2.1, Rând.53 COL.1 trebuie să fie ≠ 0. Valori: R10-C1(@CAP111_R10_C1), R53-C1(@CAP21_R53_C1)', {
                '@CAP111_R10_C1': CAP111_R10_C1,
                '@CAP21_R53_C1': CAP21_R53_C1
            })
        });
    }
}

// Validation function for 27-057: Tab. 1.1.1, Daca rd.21 COL.1 ≠ 0, atunci Tab. 2.2 , rd.11 COL.11 ≠ 0
function validate27_057(values) {
    var col1 = "C1";
    var col11 = "C11";

    var CAP111_R21_C1 = !isNaN(Number(values["CAP111_R21_" + col1])) ? Number(values["CAP111_R21_" + col1]) : 0;
    var CAP22_R11_C11 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;

    if (CAP111_R21_C1 !== 0 && CAP22_R11_C11 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col11,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-057. Tab. 1.1.1, Rând.21 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R21-C1(@CAP111_R21_C1), R11-C11(@CAP22_R11_C11)', {
                '@CAP111_R21_C1': CAP111_R21_C1,
                '@CAP22_R11_C11': CAP22_R11_C11
            })
        });
    }
}


//-----------------------------------------------------------------------------------------------

// Validation function for 27-047 (FILIAL): Tab. 1.1.1, Daca rd.14 COL.1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.7 ≠ 0
function validate27_047_F(values) {
    var col1 = "C1";
    var col7 = "C7";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R14_C1_F = values["CAP111_R14_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R14_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R14_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C7_F = values["CAP22_R11_" + col7 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col7 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col7 + "_FILIAL"][j])
            : 0;

        if (CAP111_R14_C1_F !== 0 && CAP22_R11_C7_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col7 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-047-F. Tab. 1.1.1, Rând.14 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R14-C1(@CAP111_R14_C1_F), R11-C7(@CAP22_R11_C7_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R14_C1_F': CAP111_R14_C1_F,
                    '@CAP22_R11_C7_F': CAP22_R11_C7_F
                })
            });
        }
    }
}

// Validation function for 27-048 (FILIAL): Tab. 1.1.1, Daca rd.15 COL.1 ≠ 0, atunci Tab. 2.1, Rind.55 COL.1 ≠ 0
function validate27_048_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R15_C1_F = values["CAP111_R15_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R15_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R15_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R55_C1_F = values["CAP21_R55_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R55_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R55_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP111_R15_C1_F !== 0 && CAP21_R55_C1_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP21_R55_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-048-F. Tab. 1.1.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.1, Rând.55 COL.1 trebuie să fie ≠ 0. Valori: R15-C1(@CAP111_R15_C1_F), R55-C1(@CAP21_R55_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R15_C1_F': CAP111_R15_C1_F,
                    '@CAP21_R55_C1_F': CAP21_R55_C1_F
                })
            });
        }
    }
}

// Validation function for 27-049 (FILIAL): Tab. 1.1.1, Daca rd.15 COL.1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.12 ≠ 0
function validate27_049_F(values) {
    var col1 = "C1";
    var col12 = "C12";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R15_C1_F = values["CAP111_R15_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R15_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R15_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C12_F = values["CAP22_R11_" + col12 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col12 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col12 + "_FILIAL"][j])
            : 0;

        if (CAP111_R15_C1_F !== 0 && CAP22_R11_C12_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col12 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-049-F. Tab. 1.1.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.12 trebuie să fie ≠ 0. Valori: R15-C1(@CAP111_R15_C1_F), R11-C12(@CAP22_R11_C12_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R15_C1_F': CAP111_R15_C1_F,
                    '@CAP22_R11_C12_F': CAP22_R11_C12_F
                })
            });
        }
    }
}

// Validation function for 27-050 (FILIAL): Tab. 1.1.1, Daca rd.17 COL.1 ≠ 0, atunci Tab. 2.1, Rind.56 COL.1≠0
function validate27_050_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R17_C1_F = values["CAP111_R17_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R17_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R56_C1_F = values["CAP21_R56_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R56_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R56_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP111_R17_C1_F !== 0 && CAP21_R56_C1_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP21_R56_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-050-F. Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 2.1, Rând.56 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@CAP111_R17_C1_F), R56-C1(@CAP21_R56_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R17_C1_F': CAP111_R17_C1_F,
                    '@CAP21_R56_C1_F': CAP21_R56_C1_F
                })
            });
        }
    }
}


//------------------------------------------------------------------------------------------------

// Validation function for 27-047: Tab. 1.1.1, Daca rd.14 COL.1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.7 ≠ 0
function validate27_047(values) {
    var col1 = "C1";
    var col7 = "C7";

    var CAP111_R14_C1 = !isNaN(Number(values["CAP111_R14_" + col1])) ? Number(values["CAP111_R14_" + col1]) : 0;
    var CAP22_R11_C7 = !isNaN(Number(values["CAP22_R11_" + col7])) ? Number(values["CAP22_R11_" + col7]) : 0;

    if (CAP111_R14_C1 !== 0 && CAP22_R11_C7 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col7,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-047. Tab. 1.1.1, Rând.14 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R14-C1(@CAP111_R14_C1), R11-C7(@CAP22_R11_C7)', {
                '@CAP111_R14_C1': CAP111_R14_C1,
                '@CAP22_R11_C7': CAP22_R11_C7
            })
        });
    }
}

// Validation function for 27-048: Tab. 1.1.1, Daca rd.15 COL.1 ≠ 0, atunci Tab. 2.1, Rind.55 COL.1 ≠ 0
function validate27_048(values) {
    var col1 = "C1";

    var CAP111_R15_C1 = !isNaN(Number(values["CAP111_R15_" + col1])) ? Number(values["CAP111_R15_" + col1]) : 0;
    var CAP21_R55_C1 = !isNaN(Number(values["CAP21_R55_" + col1])) ? Number(values["CAP21_R55_" + col1]) : 0;

    if (CAP111_R15_C1 !== 0 && CAP21_R55_C1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R55_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-048. Tab. 1.1.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.1, Rând.55 COL.1 trebuie să fie ≠ 0. Valori: R15-C1(@CAP111_R15_C1), R55-C1(@CAP21_R55_C1)', {
                '@CAP111_R15_C1': CAP111_R15_C1,
                '@CAP21_R55_C1': CAP21_R55_C1
            })
        });
    }
}

// Validation function for 27-049: Tab. 1.1.1, Daca rd.15 COL.1 ≠ 0, atunci Tab. 2.2, Rind.11 COL.12 ≠ 0
function validate27_049(values) {
    var col1 = "C1";
    var col12 = "C12";

    var CAP111_R15_C1 = !isNaN(Number(values["CAP111_R15_" + col1])) ? Number(values["CAP111_R15_" + col1]) : 0;
    var CAP22_R11_C12 = !isNaN(Number(values["CAP22_R11_" + col12])) ? Number(values["CAP22_R11_" + col12]) : 0;

    if (CAP111_R15_C1 !== 0 && CAP22_R11_C12 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col12,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-049. Tab. 1.1.1, Rând.15 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.12 trebuie să fie ≠ 0. Valori: R15-C1(@CAP111_R15_C1), R11-C12(@CAP22_R11_C12)', {
                '@CAP111_R15_C1': CAP111_R15_C1,
                '@CAP22_R11_C12': CAP22_R11_C12
            })
        });
    }
}

// Validation function for 27-050: Tab. 1.1.1, Daca rd.17 COL.1 ≠ 0, atunci Tab. 2.1, Rind.56 COL.1≠0
function validate27_050(values) {
    var col1 = "C1";

    var CAP111_R17_C1 = !isNaN(Number(values["CAP111_R17_" + col1])) ? Number(values["CAP111_R17_" + col1]) : 0;
    var CAP21_R56_C1 = !isNaN(Number(values["CAP21_R56_" + col1])) ? Number(values["CAP21_R56_" + col1]) : 0;

    if (CAP111_R17_C1 !== 0 && CAP21_R56_C1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R56_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-050. Tab. 1.1.1, Rând.17 COL.1 ≠ 0, atunci Tab. 2.1, Rând.56 COL.1 trebuie să fie ≠ 0. Valori: R17-C1(@CAP111_R17_C1), R56-C1(@CAP21_R56_C1)', {
                '@CAP111_R17_C1': CAP111_R17_C1,
                '@CAP21_R56_C1': CAP21_R56_C1
            })
        });
    }
}

//------------------------------------------------------------------------------------------------

// Validation function: Dacă CAP111_R14_C1 ≠ 0, atunci CAP21_R42_C1 ≠ 0
function validate27_046(values) {
    var col1 = "C1";

    var CAP111_R14_C1 = !isNaN(Number(values["CAP111_R14_" + col1])) ? Number(values["CAP111_R14_" + col1]) : 0;
    var CAP21_R42_C1 = !isNaN(Number(values["CAP21_R42_" + col1])) ? Number(values["CAP21_R42_" + col1]) : 0;

    // Dacă Rând.14 COL.1 ≠ 0 și Rând.42 COL.1 = 0
    if (CAP111_R14_C1 !== 0 && CAP21_R42_C1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R42_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-046. Tab. 1.1.1, Rând.14 COL.1 ≠ 0, atunci Tab. 2.1, Rând.42 COL.1 trebuie să fie ≠ 0. Valori: R14-C1(@CAP111_R14_C1), R42-C1(@CAP21_R42_C1)', {
                '@CAP111_R14_C1': CAP111_R14_C1,
                '@CAP21_R42_C1': CAP21_R42_C1
            })
        });
    }
}

// Validation function for FILIAL: Dacă CAP111_R14_C1 ≠ 0, atunci CAP21_R42_C1 ≠ 0
function validate27_046_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R14_C1_F = values["CAP111_R14_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R14_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R14_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R42_C1_F = values["CAP21_R42_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R42_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R42_" + col1 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.14 COL.1 ≠ 0 și Rând.42 COL.1 = 0
        if (CAP111_R14_C1_F !== 0 && CAP21_R42_C1_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP21_R42_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-046-F. Tab. 1.1.1, Rând.14 COL.1 ≠ 0, atunci Tab. 2.1, Rând.42 COL.1 trebuie să fie ≠ 0. Valori: R14-C1(@CAP111_R14_C1_F), R42-C1(@CAP21_R42_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R14_C1_F': CAP111_R14_C1_F,
                    '@CAP21_R42_C1_F': CAP21_R42_C1_F
                })
            });
        }
    }
}


//------------------------------------------------------------------------------------------------
// Validation function: Dacă CAP111_R13_C1 ≠ 0, atunci CAP22_R11_C7 ≠ 0
function validate27_045(values) {
    var col1 = "C1";
    var col7 = "C7";

    var CAP111_R13_C1 = !isNaN(Number(values["CAP111_R13_" + col1])) ? Number(values["CAP111_R13_" + col1]) : 0;
    var CAP22_R11_C7 = !isNaN(Number(values["CAP22_R11_" + col7])) ? Number(values["CAP22_R11_" + col7]) : 0;

    // Dacă Rând.13 COL.1 ≠ 0 și Rând.11 COL.7 = 0
    if (CAP111_R13_C1 !== 0 && CAP22_R11_C7 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col7,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-045. Tab. 1.1.1, Rând.13 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R13-C1(@CAP111_R13_C1), R11-C7(@CAP22_R11_C7)', {
                '@CAP111_R13_C1': CAP111_R13_C1,
                '@CAP22_R11_C7': CAP22_R11_C7
            })
        });
    }
}
// Validation function for FILIAL: Dacă CAP111_R13_C1 ≠ 0, atunci CAP22_R11_C7 ≠ 0
function validate27_045_F(values) {
    var col1 = "C1";
    var col7 = "C7";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R13_C1_F = values["CAP111_R13_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R13_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R13_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C7_F = values["CAP22_R11_" + col7 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col7 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col7 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.13 COL.1 ≠ 0 și Rând.11 COL.7 = 0
        if (CAP111_R13_C1_F !== 0 && CAP22_R11_C7_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col7 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-045-F. Tab. 1.1.1, Rând.13 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.7 trebuie să fie ≠ 0. Valori: R13-C1(@CAP111_R13_C1_F), R11-C7(@CAP22_R11_C7_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R13_C1_F': CAP111_R13_C1_F,
                    '@CAP22_R11_C7_F': CAP22_R11_C7_F
                })
            });
        }
    }
}

//-------------------------------------------------------------------------------------------------

// Validation function: Dacă CAP111_R12_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_043(values) {
    var col1 = "C1";
    var col11 = "C11";

    var CAP111_R12_C1 = !isNaN(Number(values["CAP111_R12_" + col1])) ? Number(values["CAP111_R12_" + col1]) : 0;
    var CAP22_R11_C11 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;

    // Dacă Rând.12 COL.1 ≠ 0 și Rând.11 COL.11 = 0
    if (CAP111_R12_C1 !== 0 && CAP22_R11_C11 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col11,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-043. Tab. 1.1.1, Rând.12 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R12-C1(@CAP111_R12_C1), R11-C11(@CAP22_R11_C11)', {
                '@CAP111_R12_C1': CAP111_R12_C1,
                '@CAP22_R11_C11': CAP22_R11_C11
            })
        });
    }
}
// Validation function for FILIAL: Dacă CAP111_R12_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_043_F(values) {
    var col1 = "C1";
    var col11 = "C11";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R12_C1_F = values["CAP111_R12_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R12_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R12_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C11_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.12 COL.1 ≠ 0 și Rând.11 COL.11 = 0
        if (CAP111_R12_C1_F !== 0 && CAP22_R11_C11_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col11 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-043-F. Tab. 1.1.1, Rând.12 COL.1 ≠ 0, atunci Tab. 2.2, Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R12-C1(@CAP111_R12_C1_F), R11-C11(@CAP22_R11_C11_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R12_C1_F': CAP111_R12_C1_F,
                    '@CAP22_R11_C11_F': CAP22_R11_C11_F
                })
            });
        }
    }
}

//-------------------------------------------------------------------------------------------------

// Validation function: Dacă CAP111_R12_C1 ≠ 0, atunci CAP21_R53_C1 ≠ 0
function validate27_042(values) {
    var col1 = "C1";

    var CAP111_R12_C1 = !isNaN(Number(values["CAP111_R12_" + col1])) ? Number(values["CAP111_R12_" + col1]) : 0;
    var CAP21_R53_C1 = !isNaN(Number(values["CAP21_R53_" + col1])) ? Number(values["CAP21_R53_" + col1]) : 0;

    // Dacă Rând.12 COL.1 ≠ 0 și Rând.53 COL.1 = 0
    if (CAP111_R12_C1 !== 0 && CAP21_R53_C1 === 0) {
        webform.errors.push({
            'fieldName': 'CAP21_R53_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-042. Tab. 1.1.1, Rând.12 COL.1 ≠ 0, atunci Tab. 2.1, Rând.53 COL.1 trebuie să fie ≠ 0. Valori: R12-C1(@CAP111_R12_C1), R53-C1(@CAP21_R53_C1)', {
                '@CAP111_R12_C1': CAP111_R12_C1,
                '@CAP21_R53_C1': CAP21_R53_C1
            })
        });
    }
}

// Validation function for FILIAL: Dacă CAP111_R12_C1 ≠ 0, atunci CAP21_R53_C1 ≠ 0
function validate27_042_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R12_C1_F = values["CAP111_R12_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R12_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R12_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R53_C1_F = values["CAP21_R53_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R53_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R53_" + col1 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.12 COL.1 ≠ 0 și Rând.53 COL.1 = 0
        if (CAP111_R12_C1_F !== 0 && CAP21_R53_C1_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP21_R53_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-042-F. Tab. 1.1.1, Rând.12 COL.1 ≠ 0, atunci Tab. 2.1, Rând.53 COL.1 trebuie să fie ≠ 0. Valori: R12-C1(@CAP111_R12_C1_F), R53-C1(@CAP21_R53_C1_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R12_C1_F': CAP111_R12_C1_F,
                    '@CAP21_R53_C1_F': CAP21_R53_C1_F
                })
            });
        }
    }
}

//-------------------------------------------------------------------------------------------------

// Validation function: Dacă CAP111_R11_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_041(values) {
    var col1 = "C1";
    var col11 = "C11";

    var CAP111_R11_C1 = !isNaN(Number(values["CAP111_R11_" + col1])) ? Number(values["CAP111_R11_" + col1]) : 0;
    var CAP22_R11_C11 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;

    // Dacă Rând.11 COL.1 ≠ 0 și Rând.11 COL.11 = 0
    if (CAP111_R11_C1 !== 0 && CAP22_R11_C11 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col11,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-041. Tab. 1.1.1, Rând.11 COL.1 ≠ 0, atunci Tab. 2.2 Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R11-C1(@CAP111_R11_C1), R11-C11(@CAP22_R11_C11)', {
                '@CAP111_R11_C1': CAP111_R11_C1,
                '@CAP22_R11_C11': CAP22_R11_C11
            })
        });
    }
}


// Validation function for FILIAL: Dacă CAP111_R11_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_041_F(values) {
    var col1 = "C1";
    var col11 = "C11";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R11_C1_F = values["CAP111_R11_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R11_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C11_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.11 COL.1 ≠ 0 și Rând.11 COL.11 = 0
        if (CAP111_R11_C1_F !== 0 && CAP22_R11_C11_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col11 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-041-F. Tab. 1.1.1, Rând.11 COL.1 ≠ 0, atunci Tab. 2.2 Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R11-C1(@CAP111_R11_C1_F), R11-C11(@CAP22_R11_C11_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R11_C1_F': CAP111_R11_C1_F,
                    '@CAP22_R11_C11_F': CAP22_R11_C11_F
                })
            });
        }
    }
}

//---------------------------------------------------------------------------------
// Validation function: Dacă CAP111_R10_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_039(values) {
    var col1 = "C1";
    var col11 = "C11";

    var CAP111_R10_C1 = !isNaN(Number(values["CAP111_R10_" + col1])) ? Number(values["CAP111_R10_" + col1]) : 0;
    var CAP22_R11_C11 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;

    // Dacă Rând.10 COL.1 ≠ 0 și Rând.11 COL.11 = 0
    if (CAP111_R10_C1 !== 0 && CAP22_R11_C11 === 0) {
        webform.errors.push({
            'fieldName': 'CAP22_R11_' + col11,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-039. Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 2.2 Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R10-C1(@CAP111_R10_C1), R11-C11(@CAP22_R11_C11)', {
                '@CAP111_R10_C1': CAP111_R10_C1,
                '@CAP22_R11_C11': CAP22_R11_C11
            })
        });
    }
}


// Validation function for FILIAL: Dacă CAP111_R10_C1 ≠ 0, atunci CAP22_R11_C11 ≠ 0
function validate27_039_F(values) {
    var col1 = "C1";
    var col11 = "C11";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP111_R10_C1_F = values["CAP111_R10_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R10_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C11_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
            : 0;

        // Dacă Rând.10 COL.1 ≠ 0 și Rând.11 COL.11 = 0
        if (CAP111_R10_C1_F !== 0 && CAP22_R11_C11_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP22_R11_' + col11 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-039-F. Tab. 1.1.1, Rând.10 COL.1 ≠ 0, atunci Tab. 2.2 Rând.11 COL.11 trebuie să fie ≠ 0. Valori: R10-C1(@CAP111_R10_C1_F), R11-C11(@CAP22_R11_C11_F)', {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                    '@CAP111_R10_C1_F': CAP111_R10_C1_F,
                    '@CAP22_R11_C11_F': CAP22_R11_C11_F
                })
            });
        }
    }
}

//----------------------------------------------------------------------------------------------
// Validation function: If CAP21_R21_C1 ≠ 0, then CAP111_R20_C1 ≠ 0
function validate_CAP21_R21_to_CAP111_R20(values) {
    var col1 = "C1";

    var CAP21_R21 = !isNaN(Number(values["CAP21_R21_" + col1])) ? Number(values["CAP21_R21_" + col1]) : 0;
    var CAP111_R20 = !isNaN(Number(values["CAP111_R20_" + col1])) ? Number(values["CAP111_R20_" + col1]) : 0;

    if (CAP21_R21 !== 0 && CAP111_R20 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R20_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-012. Dacă CAP21 Rând.21 col.1 ≠ 0, atunci CAP111 Rând.20 col.1 trebuie să fie ≠ 0. Valoare CAP21 R21 col.1: ' + CAP21_R21 + ', valoare CAP111 R20 col.1: ' + CAP111_R20)
        });
    }
}

// Validation function for FILIAL: If CAP21_R21_C1 ≠ 0, then CAP111_R20_C1 ≠ 0
function validate_CAP21_R21_to_CAP111_R20_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R21_F = values["CAP21_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R21_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R21_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP111_R20_F = values["CAP111_R20_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R20_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R21_F !== 0 && CAP111_R20_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP111_R20_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-012-F. Dacă CAP21 Rând.21 col.1 ≠ 0, atunci CAP111 Rând.20 col.1 trebuie să fie ≠ 0. Valoare CAP21 R21 col.1: ' + CAP21_R21_F + ', valoare CAP111 R20 col.1: ' + CAP111_R20_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//----------------------------------------------------------------------------------------------

// Validation function for FILIAL: If CAP21_R54_C1 ≠ 0, then CAP111_R21_C1 ≠ 0
function validate_CAP21_R54_C1_to_CAP111_R21_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R54_F = values["CAP21_R54_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R54_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R54_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP111_R21_F = values["CAP111_R21_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP111_R21_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP111_R21_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R54_F !== 0 && CAP111_R21_F === 0) {
            webform.errors.push({
                'fieldName': 'CAP111_R21_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-011-F. Dacă CAP.2.1 Rând.54 col.1 ≠ 0, atunci CAP.1.1 Rând.21 col.1 trebuie să fie ≠ 0. Valoare CAP.2.1 R54 col.1: ' + CAP21_R54_F + ', valoare CAP.1.1 R21 col.1: ' + CAP111_R21_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//---------------------------------------------------------------------------------------------

// Validation function: If CAP21_R54_C1 ≠ 0, then CAP111_R21_C1 ≠ 0
function validate_CAP21_R54_C1_to_CAP111_R21_C1(values) {
    var col1 = "C1";

    var CAP21_R54 = !isNaN(Number(values["CAP21_R54_" + col1])) ? Number(values["CAP21_R54_" + col1]) : 0;
    var CAP111_R21 = !isNaN(Number(values["CAP111_R21_" + col1])) ? Number(values["CAP111_R21_" + col1]) : 0;

    if (CAP21_R54 !== 0 && CAP111_R21 === 0) {
        webform.errors.push({
            'fieldName': 'CAP111_R21_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-011. Dacă CAP.2.1 Rând.54 col.1 ≠ 0, atunci CAP.1.1 Rând.21 col.1 trebuie să fie ≠ 0. Valoare CAP.2.1 R54 col.1: ' + CAP21_R54 + ', valoare CAP.1.1  R21 col.1: ' + CAP111_R21)
        });
    }
}


//---------------------------------------------------------------------------------------------

// Validation function for CAP21 and CAP22: CAP21_R50_C1 = CAP22_R11_C9
function validate_CAP21_R50_C1(values) {
    var col1 = "C1";
    var col9 = "C9";

    var CAP21_R50 = !isNaN(Number(values["CAP21_R50_" + col1])) ? Number(values["CAP21_R50_" + col1]) : 0;
    var CAP22_R11_C9 = !isNaN(Number(values["CAP22_R11_" + col9])) ? Number(values["CAP22_R11_" + col9]) : 0;

    if (CAP21_R50 !== CAP22_R11_C9) {
        webform.errors.push({
            'fieldName': 'CAP21_R50_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-008. Valoarea CAP.2.1 Rând.50 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.9. Valoarea găsită: ' + CAP21_R50 + '------' + CAP22_R11_C9)
        });
    }
}

// Validation function for CAP21 and CAP22: CAP21_R52_C1 = CAP22_R11_C11
function validate_CAP21_R52_C1(values) {
    var col1 = "C1";
    var col11 = "C11";

    var CAP21_R52 = !isNaN(Number(values["CAP21_R52_" + col1])) ? Number(values["CAP21_R52_" + col1]) : 0;
    var CAP22_R11_C11 = !isNaN(Number(values["CAP22_R11_" + col11])) ? Number(values["CAP22_R11_" + col11]) : 0;

    if (CAP21_R52 !== CAP22_R11_C11) {
        webform.errors.push({
            'fieldName': 'CAP21_R52_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-009. Valoarea CAP.2.1 Rând.52 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.11. Valoarea găsită: ' + CAP21_R52 + '----- ' + CAP22_R11_C11)
        });
    }
}

// Validation function for CAP21: CAP21_R54_C1 ≤ CAP21_R53_C1
function validate_CAP21_R54_C1(values) {
    var col1 = "C1";

    var CAP21_R54 = !isNaN(Number(values["CAP21_R54_" + col1])) ? Number(values["CAP21_R54_" + col1]) : 0;
    var CAP21_R53 = !isNaN(Number(values["CAP21_R53_" + col1])) ? Number(values["CAP21_R53_" + col1]) : 0;

    if (CAP21_R54 > CAP21_R53) {
        webform.errors.push({
            'fieldName': 'CAP21_R54_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-010. Valoarea CAP.2.1 Rând.54 col.1 trebuie să fie ≤ CAP.2.1 Rând.53 col.1. Valoarea găsită: ' + CAP21_R54 + '----' + CAP21_R53)
        });
    }
}

//---------------------------------------------------------------------------------------------------------

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R50_C1 = CAP22_R11_C9
function validate_CAP21_R50_C1_F(values) {
    var col1 = "C1";
    var col9 = "C9";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R50_F = values["CAP21_R50_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R50_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R50_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C9_F = values["CAP22_R11_" + col9 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col9 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col9 + "_FILIAL"][j])
            : 0;

        if (CAP21_R50_F !== CAP22_R11_C9_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R50_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-008-F. Valoarea CAP.2.1 Rând.50 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.9. Valoarea găsită: ' + CAP21_R50_F + '---' + CAP22_R11_C9_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R52_C1 = CAP22_R11_C11
function validate_CAP21_R52_C1_F(values) {
    var col1 = "C1";
    var col11 = "C11";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R52_F = values["CAP21_R52_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R52_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R52_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_C11_F = values["CAP22_R11_" + col11 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col11 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col11 + "_FILIAL"][j])
            : 0;

        if (CAP21_R52_F !== CAP22_R11_C11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R52_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-009-F. Valoarea CAP21 Rând.52 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.11. Valoarea găsită: ' + CAP21_R52_F + '--- ' + CAP22_R11_C11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

// Validation function for CAP21 FILIAL: CAP21_R54_C1 ≤ CAP21_R53_C1
function validate_CAP21_R54_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R54_F = values["CAP21_R54_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R54_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R54_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R53_F = values["CAP21_R53_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R53_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R53_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R54_F > CAP21_R53_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R54_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-010-F. Valoarea CAP.2.1 Rând.54 col.1 trebuie să fie ≤ CAP.2.1 Rând.53 col.1. Valoarea găsită: ' + CAP21_R54_F + '---' + CAP21_R53_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//------------------------------------------------------------------------------------------------

// Validation function for CAP21: CAP21_R51_C1 ≤ CAP21_R50_C1
function validate_CAP21_R51_C1(values) {
    var col1 = "C1";

    var CAP21_R51 = !isNaN(Number(values["CAP21_R51_" + col1])) ? Number(values["CAP21_R51_" + col1]) : 0;
    var CAP21_R50 = !isNaN(Number(values["CAP21_R50_" + col1])) ? Number(values["CAP21_R50_" + col1]) : 0;

    if (CAP21_R51 > CAP21_R50) {
        webform.errors.push({
            'fieldName': 'CAP21_R51_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-007. Valoarea CAP.2.1 Rând.51 col.1 trebuie să fie ≤ CAP.2.1 Rând.50 col.1. Valoarea găsită: ' + CAP21_R51 + '---- ' + CAP21_R50)
        });
    }
}


// Validation function for CAP21 FILIAL: CAP21_R51_C1 ≤ CAP21_R50_C1
function validate_CAP21_R51_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R51_F = values["CAP21_R51_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R51_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R51_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R50_F = values["CAP21_R50_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R50_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R50_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R51_F > CAP21_R50_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R51_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-007-F. Valoarea CAP.2.1 Rând.51 col.1 trebuie să fie ≤ CAP.2.1 Rând.50 col.1. Valoarea găsită: ' + CAP21_R51_F + '--- ' + CAP21_R50_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//------------------------------------------------------------------------------------------------


// Validation function for CAP21 and CAP22: CAP21_R36_C1 = CAP22_R11_C4
function validate_CAP21_R36_C1(values) {
    var col1 = "C1";
    var col4 = "C4";

    var CAP21_R36 = !isNaN(Number(values["CAP21_R36_" + col1])) ? Number(values["CAP21_R36_" + col1]) : 0;
    var CAP22_R11 = !isNaN(Number(values["CAP22_R11_" + col4])) ? Number(values["CAP22_R11_" + col4]) : 0;

    if (CAP21_R36 !== CAP22_R11) {
        webform.errors.push({
            'fieldName': 'CAP21_R36_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-004. Valoarea CAP21 Rând.36 col.1 trebuie să fie egală cu CAP22 Rând.11 col.4. Valoarea găsită: ' + CAP21_R36 + ', valoarea așteptată: ' + CAP22_R11)
        });
    }
}

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R36_C1 = CAP22_R11_C4
function validate_CAP21_R36_C1_F(values) {
    var col1 = "C1";
    var col4 = "C4";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R36_F = values["CAP21_R36_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R36_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R36_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_F = values["CAP22_R11_" + col4 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col4 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col4 + "_FILIAL"][j])
            : 0;

        if (CAP21_R36_F !== CAP22_R11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R36_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-004-F. Valoarea CAP21 Rând.36 col.1 trebuie să fie egală cu CAP22 Rând.11 col.4. Valoarea găsită: ' + CAP21_R36_F + ', valoarea așteptată: ' + CAP22_R11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//-----------------------------------------------------------------------------------------------

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R49_C1 = CAP22_R11_C6
function validate_CAP21_R49_C1_F(values) {
    var col1 = "C1";
    var col6 = "C6";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R49_F = values["CAP21_R49_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R49_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R49_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_F = values["CAP22_R11_" + col6 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col6 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col6 + "_FILIAL"][j])
            : 0;

        if (CAP21_R49_F !== CAP22_R11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R49_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-006-F. Valoarea CAP.2.1 Rând.49 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.6. Valoarea găsită: ' + CAP21_R49_F + '-- ' + CAP22_R11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//----------------------------------------------------------------------------------------------

// Validation function for CAP21 and CAP22: CAP21_R49_C1 = CAP22_R11_C6
function validate_CAP21_R49_C1(values) {
    var col1 = "C1";
    var col6 = "C6";

    var CAP21_R49 = !isNaN(Number(values["CAP21_R49_" + col1])) ? Number(values["CAP21_R49_" + col1]) : 0;
    var CAP22_R11 = !isNaN(Number(values["CAP22_R11_" + col6])) ? Number(values["CAP22_R11_" + col6]) : 0;

    if (CAP21_R49 !== CAP22_R11) {
        webform.errors.push({
            'fieldName': 'CAP21_R49_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-006. Valoarea CAP.2.1 Rând.49 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.6. Valoarea găsită: ' + CAP21_R49 + ' --  ' + CAP22_R11)
        });
    }
}

//-------------------------------------------------------------------------------------------

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R37_C1 = CAP22_R11_C7
function validate_CAP21_R37_C1_F(values) {
    var col1 = "C1";
    var col7 = "C7";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R37_F = values["CAP21_R37_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R37_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R37_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_F = values["CAP22_R11_" + col7 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col7 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col7 + "_FILIAL"][j])
            : 0;

        if (CAP21_R37_F !== CAP22_R11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R37_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-005-F. Valoarea CAP.2.1 Rând.37 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.7. Valoarea găsită: ' + CAP21_R37_F + ' --- ' + CAP22_R11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//----------------------------------------------------------------------

// Validation function for CAP21 and CAP22: CAP21_R37_C1 = CAP22_R11_C7
function validate_CAP21_R37_C1(values) {
    var col1 = "C1";
    var col7 = "C7";

    var CAP21_R37 = !isNaN(Number(values["CAP21_R37_" + col1])) ? Number(values["CAP21_R37_" + col1]) : 0;
    var CAP22_R11 = !isNaN(Number(values["CAP22_R11_" + col7])) ? Number(values["CAP22_R11_" + col7]) : 0;

    if (CAP21_R37 !== CAP22_R11) {
        webform.errors.push({
            'fieldName': 'CAP21_R37_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-005. Valoarea CAP.2.1 Rând.37 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.7. Valoarea găsită: ' + CAP21_R37 + '--- ' + CAP22_R11)
        });
    }
}


//-------------------------------------------------------------

// Validation function for CAP21 FILIAL: CAP21_R35_C1 ≤ CAP21_R34_C1
function validate_CAP21_R35_C1_F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R35_F = values["CAP21_R35_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R35_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R35_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP21_R34_F = values["CAP21_R34_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R34_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R34_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R35_F > CAP21_R34_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R35_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-003-F. Valoarea CAP21 Rând.35 col.1 trebuie să fie ≤ CAP21 Rând.34 col.1. Valoarea găsită: ' + CAP21_R35_F + ' --- ' + CAP21_R34_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}


//----------------------------------------------------------

// Validation function for CAP21: CAP21_R35_C1 ≤ CAP21_R34_C1
function validate_CAP21_R35_C1(values) {
    var col1 = "C1";

    var CAP21_R35 = !isNaN(Number(values["CAP21_R35_" + col1])) ? Number(values["CAP21_R35_" + col1]) : 0;
    var CAP21_R34 = !isNaN(Number(values["CAP21_R34_" + col1])) ? Number(values["CAP21_R34_" + col1]) : 0;

    if (CAP21_R35 > CAP21_R34) {
        webform.errors.push({
            'fieldName': 'CAP21_R35_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-003. Valoarea CAP.2.1 Rând.35 col.1 trebuie să fie ≤ CAP.2.1 Rând.34 col.1. Valoarea găsită: ' + CAP21_R35 + '---- ' + CAP21_R34)
        });
    }
}

//----------------------------------------------------------

function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;

}

function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}
//-------------------------------------------------------------------------------------------

function validate_CUATM_FILIAL(values) {
    var seenCUATM = new Set(); // Set to track duplicates

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j] || "").trim(); // Safely handle undefined or null
        var CAP_NUM_FILIAL = Number(values.CAP_NUM_FILIAL[j]);

        // Check if CAP_NUM_FILIAL exists but CAP_CUATM_FILIAL is missing
        if (CAP_NUM_FILIAL && CAP_CUATM_FILIAL === "") {
            webform.errors.push({
                'fieldName': 'CAP_CUATM_FILIAL',
                'index': j,
                'weight': 20,
                'msg': Drupal.t('Raion: @CAP_NUM_FILIAL - Cod eroare: 45-020.  - Dacă există Nr. [@CAP_NUM_FILIAL], atunci trebuie să existe și cod CUATM.', {
                    '@CAP_NUM_FILIAL': CAP_NUM_FILIAL,
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }

        // Check for duplicate CAP_CUATM_FILIAL values
        if (CAP_CUATM_FILIAL) {
            if (seenCUATM.has(CAP_CUATM_FILIAL)) {
                webform.errors.push({
                    'fieldName': 'CAP_CUATM_FILIAL',
                    'index': j,
                    'weight': 10,
                    'msg': Drupal.t('Codul CUATM: @CAP_CUATM_FILIAL este duplicat. Fiecare cod CUATM trebuie să fie unic.', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            } else {
                seenCUATM.add(CAP_CUATM_FILIAL);
            }
        }
    }
}

//------------------------------------------------------------------------------------------------
// Validation function for CAP21 and CAP22: CAP21_R15_C1 = CAP22_R11_C3
function validate_CAP21_CAP22(values) {
    var col1 = "C1";
    var col3 = "C3";

    var CAP21_R15 = !isNaN(Number(values["CAP21_R15_" + col1])) ? Number(values["CAP21_R15_" + col1]) : 0;
    var CAP22_R11 = !isNaN(Number(values["CAP22_R11_" + col3])) ? Number(values["CAP22_R11_" + col3]) : 0;

    if (CAP21_R15 !== CAP22_R11) {
        webform.errors.push({
            'fieldName': 'CAP21_R15_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-001. Valoarea CAP.2.1 Rând.15 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.3. Valoarea găsită: ' + CAP21_R15 + ', --  ' + CAP22_R11)
        });
    }
}

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R15_C1 = CAP22_R11_C3
function validate_CAP21_CAP22_F(values) {
    var col1 = "C1";
    var col3 = "C3";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R15_F = values["CAP21_R15_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R15_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R15_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_F = values["CAP22_R11_" + col3 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col3 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col3 + "_FILIAL"][j])
            : 0;

        if (CAP21_R15_F !== CAP22_R11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R15_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-001-F. Valoarea CAP.2.1 Rând.15 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.3. Valoarea găsită: ' + CAP21_R15_F + ', -- ' + CAP22_R11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//------------------------------------------------------------------------------------------------
// Validation function for CAP21 and CAP22: CAP21_R23_C1 = CAP22_R11_C1
function validate_CAP21_C23(values) {
    var col1 = "C1";

    var CAP21_R23 = !isNaN(Number(values["CAP21_R23_" + col1])) ? Number(values["CAP21_R23_" + col1]) : 0;
    var CAP22_R11 = !isNaN(Number(values["CAP22_R11_" + col1])) ? Number(values["CAP22_R11_" + col1]) : 0;

    if (CAP21_R23 !== CAP22_R11) {
        webform.errors.push({
            'fieldName': 'CAP21_R23_' + col1,
            'weight': 19,
            'msg': Drupal.t('Cod eroare: 27-002 Valoarea CAP.2.1 Rând.23 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.1. Valoarea găsită: ' + CAP21_R23 + ' --- ' + CAP22_R11)
        });
    }
}

// Validation function for CAP21 and CAP22 FILIAL: CAP21_R23_C1 = CAP22_R11_C1
function validate_CAP21_C23F(values) {
    var col1 = "C1";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP21_R23_F = values["CAP21_R23_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP21_R23_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP21_R23_" + col1 + "_FILIAL"][j])
            : 0;
        var CAP22_R11_F = values["CAP22_R11_" + col1 + "_FILIAL"] && !isNaN(Number(values["CAP22_R11_" + col1 + "_FILIAL"][j]))
            ? Number(values["CAP22_R11_" + col1 + "_FILIAL"][j])
            : 0;

        if (CAP21_R23_F !== CAP22_R11_F) {
            webform.errors.push({
                'fieldName': 'CAP21_R23_' + col1 + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-002-F. Valoarea CAP.2.1 Rând.23 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.1. Valoarea găsită: ' + CAP21_R23_F + ' --  ' + CAP22_R11_F, {
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }
    }
}

//Added validation from TRIM report 
//-----------------------------------------------------------------------------------------------
// --It is need

function validate33_001(values) {
    // 33-001 validation logic
    for (var i = 0; i <= 8; i++) {
        if (i !== 2 && i !== 7) {
            var CAP1_R5_C = !isNaN(Number(values["CAP11_R5_C" + i])) ? Number(values["CAP11_R5_C" + i]) : 0;
            var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + i])) ? Number(values["CAP11_R1_C" + i]) : 0;
            var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + i])) ? Number(values["CAP11_R2_C" + i]) : 0;
            var CAP1_R4_C = !isNaN(Number(values["CAP11_R4_C" + i])) ? Number(values["CAP11_R4_C" + i]) : 0;

            var result_33_001 = CAP1_R1_C + CAP1_R2_C - CAP1_R4_C;

            if (CAP1_R5_C !== result_33_001) {
                webform.warnings.push({
                    'fieldName': 'CAP11_R5_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 27-028. [@col] - Tab.1.1, rd.5 pe COL (@col), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4)) COL(1,3,4,5,6,8), @CAP1_R5_C <> @result_33_001', { '@col': i, '@CAP1_R5_C': CAP1_R5_C, '@result_33_001': result_33_001 })
                });
            }
        }
    }
}



function validate33_001_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) {
            var R5_C = 0, R1_C = 0, R2_C = 0, R4_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP11_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R5_C" + i + "_FILIAL"][j]))) {
                R5_C = Number(values["CAP11_R5_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R1_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_C" + i + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP11_R1_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_C" + i + "_FILIAL"][j]))) {
                R4_C = Number(values["CAP11_R4_C" + i + "_FILIAL"][j]);
            }

            var result_33_001_F = R1_C + R2_C - R4_C;

            if (R5_C !== result_33_001_F) {
                webform.warnings.push({
                    'fieldName': 'CAP11_R5_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-028-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }
    }
}

//--------------------------------------------------------------------------------------------------------
function validate27_060(values) {
    // Coloanele verificate pentru Tab. 1.1
    var colsTab11 = ["C1", "C3", "C4", "C5", "C6", "C8"];

    // Verificare principală: TAB. 1.1 Rând.1 → TAB. 1.1 Rând.2
    for (var i = 0; i < colsTab11.length; i++) {
        var colTab11 = colsTab11[i];

        var valueTab11_R1 = !isNaN(Number(values["CAP11_R1_" + colTab11])) ? Number(values["CAP11_R1_" + colTab11]) : 0;
        var valueTab11_R2 = !isNaN(Number(values["CAP11_R2_" + colTab11])) ? Number(values["CAP11_R2_" + colTab11]) : 0;

        // Dacă TAB. 1.1 Rând.1 ≠ 0 și TAB. 1.1 Rând.2 == 0
        if (valueTab11_R1 !== 0 && valueTab11_R2 === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R2_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-060. Dacă Tab. 1.1, Rând.1 COL (@colTab11) = @valueTab11_R1 ≠ 0, atunci Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2 trebuie să fie ≠ 0.', {
                    '@colTab11': colTab11,
                    '@valueTab11_R1': valueTab11_R1,
                    '@valueTab11_R2': valueTab11_R2
                })
            });
        }

        // Verificare inversă: TAB. 1.1 Rând.2 → TAB. 1.1 Rând.1
        // if (valueTab11_R2 !== 0 && valueTab11_R1 === 0) {
        //     webform.errors.push({
        //         'fieldName': 'CAP11_R1_' + colTab11,
        //         'weight': 19,
        //         'msg': Drupal.t('Cod eroare: 27-060. Dacă Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2 ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) = @valueTab11_R1 trebuie să fie ≠ 0.', {
        //             '@colTab11': colTab11,
        //             '@valueTab11_R1': valueTab11_R1,
        //             '@valueTab11_R2': valueTab11_R2
        //         })
        //     });
        // }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < colsTab11.length; i++) {
                var colTab11_F = colsTab11[i];

                var valueTab11_R1_F = values["CAP11_R1_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R1_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                var valueTab11_R2_F = values["CAP11_R2_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R2_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                // Verificare FILIAL Tab. 1.1 Rând.1 → Tab. 1.1 Rând.2
                if (valueTab11_R1_F !== 0 && valueTab11_R2_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R2_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-060-F. Dacă Tab. 1.1, Rând.1 COL (@colTab11) = @valueTab11_R1_F ≠ 0, atunci Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@valueTab11_R1_F': valueTab11_R1_F,
                            '@valueTab11_R2_F': valueTab11_R2_F
                        })
                    });
                }

                // Verificare inversă FILIAL Tab. 1.1 Rând.2 → Tab. 1.1 Rând.1
                if (valueTab11_R2_F !== 0 && valueTab11_R1_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R1_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-060-F. Dacă Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2_F ≠ 0, atunci Tab. 1.1, Rând.1 COL (@colTab11) = @valueTab11_R1_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@valueTab11_R1_F': valueTab11_R1_F,
                            '@valueTab11_R2_F': valueTab11_R2_F
                        })
                    });
                }
            }
        }
    }
}






function validate33_004(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;
            var CAP11_R20_C = !isNaN(Number(values["CAP111_R20_C" + i])) ? Number(values["CAP111_R20_C" + i]) : 0;

            if (CAP11_R7_C !== 0 && CAP11_R20_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R20_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-004. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(20) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP11_R20_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP11_R20_C': CAP11_R20_C })
                });
            } else if (CAP11_R7_C === 0 && CAP11_R20_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-004. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(20) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP11_R20_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP11_R20_C': CAP11_R20_C })
                });
            }
        }
    }
}


//----------------------------------------------------------------------------


//----------------------------------------------------------------------------



function validate33_004_F(values) {
//     for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
//         var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

//         for (var i = 0; i <= 6; i++) {
//             if (i !== 2) {
//                 var R7_C = 0, R20_C = 0;

//                 // Check if properties exist before accessing them
//                 if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
//                     R7_C = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
//                 }

//                 if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
//                     R20_C = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
//                 }

//                 if ((R7_C !== 0 && R20_C === 0) || (R7_C === 0 && R20_C !== 0)) {
//                     webform.errors.push({
//                         'fieldName': R7_C !== 0 ? 'CAP111_R20_C' + i + '_FILIAL' : 'CAP111_R7_C' + i + '_FILIAL',
//                         'index': j,
//                         'weight': 19,
//                         'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-004-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(7) COL(1) ≠ 0 atunci Rînd.(20) COL(1) ≠ 0, @R7_C <> @R20_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R7_C': R7_C, '@R20_C': R20_C })
//                     });
//                 }
//             }
//         }
//     }
 }

function validate27_059(values) {
    // Coloanele pentru Tab. 1.1
    var colsTab11 = ["C1", "C3", "C4", "C5", "C6"]; // Coloanele verificate

    // Verificare principală: TAB. 1.1 Rând.2 → TAB. 1.1 Rând.3
    for (var i = 0; i < colsTab11.length; i++) {
        var colTab11 = colsTab11[i];

        var valueTab11_R2 = !isNaN(Number(values["CAP11_R2_" + colTab11])) ? Number(values["CAP11_R2_" + colTab11]) : 0;
        var valueTab11_R3 = !isNaN(Number(values["CAP11_R3_" + colTab11])) ? Number(values["CAP11_R3_" + colTab11]) : 0;

        // Dacă TAB. 1.1 Rând.2 ≠ 0 și TAB. 1.1 Rând.3 == 0
        if (valueTab11_R2 !== 0 && valueTab11_R3 === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R3_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-059. Dacă Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2 ≠ 0, atunci Tab. 1.1, Rând.3 COL (@colTab11) = @valueTab11_R3 trebuie să fie ≠ 0.', {
                    '@colTab11': colTab11,
                    '@valueTab11_R2': valueTab11_R2,
                    '@valueTab11_R3': valueTab11_R3
                })
            });
        }

        // Verificare inversă: TAB. 1.1 Rând.3 → TAB. 1.1 Rând.2
        if (valueTab11_R3 !== 0 && valueTab11_R2 === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R2_' + colTab11,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-059. Dacă Tab. 1.1, Rând.3 COL (@colTab11) = @valueTab11_R3 ≠ 0, atunci Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2 trebuie să fie ≠ 0.', {
                    '@colTab11': colTab11,
                    '@valueTab11_R3': valueTab11_R3,
                    '@valueTab11_R2': valueTab11_R2
                })
            });
        }
    }

    // FILIAL Validation
    if (values.CAP_NUM_FILIAL) {
        for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
            var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

            for (var i = 0; i < colsTab11.length; i++) {
                var colTab11_F = colsTab11[i];

                var valueTab11_R2_F = values["CAP11_R2_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R2_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                var valueTab11_R3_F = values["CAP11_R3_" + colTab11_F + "_FILIAL"] && !isNaN(Number(values["CAP11_R3_" + colTab11_F + "_FILIAL"][j]))
                    ? Number(values["CAP11_R3_" + colTab11_F + "_FILIAL"][j])
                    : 0;

                // Verificare FILIAL Tab. 1.1 Rând.2 → Tab. 1.1 Rând.3
                if (valueTab11_R2_F !== 0 && valueTab11_R3_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R3_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-059-F. Dacă Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2_F ≠ 0, atunci Tab. 1.1, Rând.3 COL (@colTab11) = @valueTab11_R3_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@valueTab11_R2_F': valueTab11_R2_F,
                            '@valueTab11_R3_F': valueTab11_R3_F
                        })
                    });
                }

                // Verificare inversă FILIAL Tab. 1.1 Rând.3 → Tab. 1.1 Rând.2
                if (valueTab11_R3_F !== 0 && valueTab11_R2_F === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R2_' + colTab11_F + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-059-F. Dacă Tab. 1.1, Rând.3 COL (@colTab11) = @valueTab11_R3_F ≠ 0, atunci Tab. 1.1, Rând.2 COL (@colTab11) = @valueTab11_R2_F trebuie să fie ≠ 0.', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@colTab11': colTab11_F,
                            '@valueTab11_R2_F': valueTab11_R2_F,
                            '@valueTab11_R3_F': valueTab11_R3_F
                        })
                    });
                }
            }
        }
    }
}




// // Validation function: Dacă Tab.1.1 rd.2 col.1,3,4,5,6 ≠ 0, atunci Tab.1.1 rd.3 col.1,3,4,5,6 ≠ 0 și invers
// function validate_CAP111_R2_to_R3(values) {
//     var columns = ["C1", "C3", "C4", "C5", "C6"];
//     var row2 = "CAP11_R2_";
//     var row3 = "CAP11_R3_";

//     columns.forEach(function (col) {
//         var row2Value = !isNaN(Number(values[row2 + col])) ? Number(values[row2 + col]) : 0;
//         var row3Value = !isNaN(Number(values[row3 + col])) ? Number(values[row3 + col]) : 0;

//         if ((row2Value !== 0 && row3Value === 0) || (row2Value === 0 && row3Value !== 0)) {
//             webform.errors.push({
//                 'fieldName': row3 + col,
//                 'weight': 19,
//                 'msg': Drupal.t('Cod eroare: 27-059. Dacă Tab.1.1 rd.2 ' + col + ' ≠ 0, atunci Tab.1.1 rd.3 ' + col + ' trebuie să fie ≠ 0 și invers. Valoare rd.2: ' + row2Value + ', valoare rd.3: ' + row3Value)
//             });
//         }
//     });
// }


// // Validation function for FILIAL: Dacă Tab.1.1 rd.2 col.1,3,4,5,6 ≠ 0, atunci Tab.1.1 rd.3 col.1,3,4,5,6 ≠ 0 și invers
// function validate_CAP111_R2_to_R3_F(values) {
//     var columns = ["C1", "C3", "C4", "C5", "C6"];
//     var row2 = "CAP11_R2_";
//     var row3 = "CAP11_R3_";

//     for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
//         var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

//         columns.forEach(function (col) {
//             var row2Value_F = values[row2 + col + "_FILIAL"] && !isNaN(Number(values[row2 + col + "_FILIAL"][j]))
//                 ? Number(values[row2 + col + "_FILIAL"][j])
//                 : 0;
//             var row3Value_F = values[row3 + col + "_FILIAL"] && !isNaN(Number(values[row3 + col + "_FILIAL"][j]))
//                 ? Number(values[row3 + col + "_FILIAL"][j])
//                 : 0;

//             if ((row2Value_F !== 0 && row3Value_F === 0) || (row2Value_F === 0 && row3Value_F !== 0)) {
//                 webform.errors.push({
//                     'fieldName': row3 + col + '_FILIAL',
//                     'index': j,
//                     'weight': 19,
//                     'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-059-F. Dacă Tab.1.1 rd.2 ' + col + ' ≠ 0, atunci Tab.1.1 rd.3 ' + col + ' trebuie să fie ≠ 0 și invers. Valoare rd.2: ' + row2Value_F + ', valoare rd.3: ' + row3Value_F, {
//                         '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
//                     })
//                 });
//             }
//         });
//     }
// }

//-----------------------------------------------------------------------------------------------
function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}
