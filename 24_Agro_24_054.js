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
    validate_CAP111_R2_to_R3(values);
    validate_CAP111_R2_to_R3_F(values);



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

    validate27_027(values);
    validate27_027_F(values);
    validate27_029(values);
    validate27_030(values);
    validate27_031(values);
    validate27_032(values);
    validate27_034(values);
    validate27_037(values);

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

// Validation function for 27-027: Tab. 1.1, Dacă în Rind. 4, coloanele (1, 3, 4, 5, 6, 8) ≠ 0, atunci în Tab. 2.2, Rind. 10, coloanele (1, 4, 6, 9, 11, 12) ≠ 0 și invers
function validate27_027(values) {
    var columnsTab1 = [1, 3, 4, 5, 6, 8];
    var columnsTab2 = [1, 4, 6, 9, 11, 12];

    for (var i = 0; i < columnsTab1.length; i++) {
        var colTab1 = "C" + columnsTab1[i];
        var colTab2 = "C" + columnsTab2[i];

        var CAP11_R4 = !isNaN(Number(values["CAP11_R4_" + colTab1])) ? Number(values["CAP11_R4_" + colTab1]) : 0;
        var CAP22_R10 = !isNaN(Number(values["CAP22_R10_" + colTab2])) ? Number(values["CAP22_R10_" + colTab2]) : 0;

        // Dacă CAP11_R4 ≠ 0 și CAP22_R10 = 0
        if (CAP11_R4 !== 0 && CAP22_R10 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP22_R10_' + colTab2,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-027. Dacă în Tab. 1.1, Rând.4, COL(@colTab1) ≠ 0, atunci în Tab. 2.2, Rând.10, COL(@colTab2) trebuie să fie ≠ 0. Valori: Tab1-R4(@CAP11_R4), Tab2-R10(@CAP22_R10)', {
                    '@colTab1': columnsTab1[i],
                    '@colTab2': columnsTab2[i],
                    '@CAP11_R4': CAP11_R4,
                    '@CAP22_R10': CAP22_R10
                })
            });
        }

        // Invers: Dacă CAP22_R10 ≠ 0 și CAP11_R4 = 0
        if (CAP22_R10 !== 0 && CAP11_R4 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP11_R4_' + colTab1,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-027. Dacă în Tab. 2.2, Rând.10, COL(@colTab2) ≠ 0, atunci în Tab. 1.1, Rând.4, COL(@colTab1) trebuie să fie ≠ 0. Valori: Tab2-R10(@CAP22_R10), Tab1-R4(@CAP11_R4)', {
                    '@colTab1': columnsTab1[i],
                    '@colTab2': columnsTab2[i],
                    '@CAP11_R4': CAP11_R4,
                    '@CAP22_R10': CAP22_R10
                })
            });
        }
    }
}



// Validation function for 27-027 (FILIAL): Tab. 1.1, Dacă în Rind. 4, coloanele (1, 3, 4, 5, 6, 8) ≠ 0, atunci în Tab. 2.2, Rind. 10, coloanele (1, 4, 6, 9, 11, 12) ≠ 0 și invers
function validate27_027_F(values) {
    var columnsTab1 = [1, 3, 4, 5, 6, 8];
    var columnsTab2 = [1, 4, 6, 9, 11, 12];

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i < columnsTab1.length; i++) {
            var colTab1 = "C" + columnsTab1[i];
            var colTab2 = "C" + columnsTab2[i];

            var CAP11_R4_F = values["CAP11_R4_" + colTab1 + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_" + colTab1 + "_FILIAL"][j]))
                ? Number(values["CAP11_R4_" + colTab1 + "_FILIAL"][j])
                : 0;
            var CAP22_R10_F = values["CAP22_R10_" + colTab2 + "_FILIAL"] && !isNaN(Number(values["CAP22_R10_" + colTab2 + "_FILIAL"][j]))
                ? Number(values["CAP22_R10_" + colTab2 + "_FILIAL"][j])
                : 0;

            // Dacă CAP11_R4_F ≠ 0 și CAP22_R10_F = 0
            if (CAP11_R4_F !== 0 && CAP22_R10_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP22_R10_' + colTab2 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-027-F. Dacă în Tab. 1.1, Rând.4, COL(@colTab1) ≠ 0, atunci în Tab. 2.2, Rând.10, COL(@colTab2) trebuie să fie ≠ 0. Valori: Tab1-R4(@CAP11_R4_F), Tab2-R10(@CAP22_R10_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@colTab1': columnsTab1[i],
                        '@colTab2': columnsTab2[i],
                        '@CAP11_R4_F': CAP11_R4_F,
                        '@CAP22_R10_F': CAP22_R10_F
                    })
                });
            }

            // Invers: Dacă CAP22_R10_F ≠ 0 și CAP11_R4_F = 0
            if (CAP22_R10_F !== 0 && CAP11_R4_F === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP11_R4_' + colTab1 + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-027-F. Dacă în Tab. 2.2, Rând.10, COL(@colTab2) ≠ 0, atunci în Tab. 1.1, Rând.4, COL(@colTab1) trebuie să fie ≠ 0. Valori: Tab2-R10(@CAP22_R10_F), Tab1-R4(@CAP11_R4_F)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@colTab1': columnsTab1[i],
                        '@colTab2': columnsTab2[i],
                        '@CAP11_R4_F': CAP11_R4_F,
                        '@CAP22_R10_F': CAP22_R10_F
                    })
                });
            }
        }
    }
}

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


//--Modifica aceste functii sa afiseze si invers 
function validate33_024(values) {
    var columns = [1, 3, 4, 5, 6, 8];

    for (var i = 0; i < columns.length; i++) {
        var col = columns[i];

        var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + col])) ? Number(values["CAP11_R1_C" + col]) : 0;
        var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + col])) ? Number(values["CAP11_R2_C" + col]) : 0;

        // Dacă Rând.1 ≠ 0 și Rând.2 = 0
        if (CAP1_R1_C !== 0 && CAP1_R2_C === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R2_C' + col,
                'weight': 19,
                'index': col,
                'msg': Drupal.t('Cod eroare: 27-060. [@col] - Tab.1.1, Rând.1 pe COL (@col) ≠ 0, atunci Rând.2 COL (@col) trebuie să fie ≠ 0. Valori: R1(@CAP1_R1_C), R2(@CAP1_R2_C)', {
                    '@col': col,
                    '@CAP1_R1_C': CAP1_R1_C,
                    '@CAP1_R2_C': CAP1_R2_C
                })
            });
        }

        // Dacă Rând.1 = 0 și Rând.2 ≠ 0
        if (CAP1_R1_C === 0 && CAP1_R2_C !== 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R1_C' + col,
                'weight': 19,
                'index': col,
                'msg': Drupal.t('Cod eroare: 27-060. [@col] - Tab.1.1, Rând.2 pe COL (@col) ≠ 0, atunci Rând.1 COL (@col) trebuie să fie ≠ 0. Valori: R1(@CAP1_R1_C), R2(@CAP1_R2_C)', {
                    '@col': col,
                    '@CAP1_R1_C': CAP1_R1_C,
                    '@CAP1_R2_C': CAP1_R2_C
                })
            });
        }
    }
}



function validate33_024_F(values) {
    var columns = [1, 3, 4, 5, 6, 8];

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i < columns.length; i++) {
            var col = columns[i];

            var R1_C = 0, R2_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP11_R1_C" + col + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_C" + col + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP11_R1_C" + col + "_FILIAL"][j]);
            }

            if (values["CAP11_R2_C" + col + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + col + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP11_R2_C" + col + "_FILIAL"][j]);
            }

            // Dacă Rând.1 ≠ 0 și Rând.2 = 0
            if (R1_C !== 0 && R2_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R2_C' + col + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-060-F. [@col_FILIAL] - Dacă Rând.(1) COL(@col_FILIAL) ≠ 0, atunci Rând.(2) COL(@col_FILIAL) trebuie să fie ≠ 0. Valori: R1(@R1_C), R2(@R2_C)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@col_FILIAL': col,
                        '@R1_C': R1_C,
                        '@R2_C': R2_C
                    })
                });
            }

            // Dacă Rând.1 = 0 și Rând.2 ≠ 0
            if (R1_C === 0 && R2_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R1_C' + col + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-060-F. [@col_FILIAL] - Dacă Rând.(2) COL(@col_FILIAL) ≠ 0, atunci Rând.(1) COL(@col_FILIAL) trebuie să fie ≠ 0. Valori: R1(@R1_C), R2(@R2_C)', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@col_FILIAL': col,
                        '@R1_C': R1_C,
                        '@R2_C': R2_C
                    })
                });
            }
        }
    }
}

//---------------------------------------------------------------------------------------------------------






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
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R7_C = 0, R20_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
                    R20_C = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
                }

                if ((R7_C !== 0 && R20_C === 0) || (R7_C === 0 && R20_C !== 0)) {
                    webform.errors.push({
                        'fieldName': R7_C !== 0 ? 'CAP111_R20_C' + i + '_FILIAL' : 'CAP111_R7_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-004-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(7) COL(1) ≠ 0 atunci Rînd.(20) COL(1) ≠ 0, @R7_C <> @R20_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R7_C': R7_C, '@R20_C': R20_C })
                    });
                }
            }
        }
    }
}


// Validation function: Dacă Tab.1.1 rd.2 col.1,3,4,5,6 ≠ 0, atunci Tab.1.1 rd.3 col.1,3,4,5,6 ≠ 0 și invers
function validate_CAP111_R2_to_R3(values) {
    var columns = ["C1", "C3", "C4", "C5", "C6"];
    var row2 = "CAP11_R2_";
    var row3 = "CAP11_R3_";

    columns.forEach(function (col) {
        var row2Value = !isNaN(Number(values[row2 + col])) ? Number(values[row2 + col]) : 0;
        var row3Value = !isNaN(Number(values[row3 + col])) ? Number(values[row3 + col]) : 0;

        if ((row2Value !== 0 && row3Value === 0) || (row2Value === 0 && row3Value !== 0)) {
            webform.errors.push({
                'fieldName': row3 + col,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 27-059. Dacă Tab.1.1 rd.2 ' + col + ' ≠ 0, atunci Tab.1.1 rd.3 ' + col + ' trebuie să fie ≠ 0 și invers. Valoare rd.2: ' + row2Value + ', valoare rd.3: ' + row3Value)
            });
        }
    });
}


// Validation function for FILIAL: Dacă Tab.1.1 rd.2 col.1,3,4,5,6 ≠ 0, atunci Tab.1.1 rd.3 col.1,3,4,5,6 ≠ 0 și invers
function validate_CAP111_R2_to_R3_F(values) {
    var columns = ["C1", "C3", "C4", "C5", "C6"];
    var row2 = "CAP11_R2_";
    var row3 = "CAP11_R3_";

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        columns.forEach(function (col) {
            var row2Value_F = values[row2 + col + "_FILIAL"] && !isNaN(Number(values[row2 + col + "_FILIAL"][j]))
                ? Number(values[row2 + col + "_FILIAL"][j])
                : 0;
            var row3Value_F = values[row3 + col + "_FILIAL"] && !isNaN(Number(values[row3 + col + "_FILIAL"][j]))
                ? Number(values[row3 + col + "_FILIAL"][j])
                : 0;

            if ((row2Value_F !== 0 && row3Value_F === 0) || (row2Value_F === 0 && row3Value_F !== 0)) {
                webform.errors.push({
                    'fieldName': row3 + col + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-059-F. Dacă Tab.1.1 rd.2 ' + col + ' ≠ 0, atunci Tab.1.1 rd.3 ' + col + ' trebuie să fie ≠ 0 și invers. Valoare rd.2: ' + row2Value_F + ', valoare rd.3: ' + row3Value_F, {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            }
        });
    }
}

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
