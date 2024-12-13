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


    //-----------------------------------------------

    validate33_001(values);
    validate33_001_F(values);
    validate33_002(values);
    validate33_002_F(values);
    validate33_004(values);
    validate33_004_F(values);

    validate33_015(values);
    validate33_015_F(values);
    validate33_016(values);
    validate33_016_F(values);
    validate33_018(values);
    validate33_018_F(values);
    validate33_007(values);
    validate33_007_F(values);
    validate33_014(values);
    validate33_014_F(values);
    validate33_024(values);
    validate33_024_F(values);

    validate_CAP21_R21_to_CAP111_R20(values);
    validate_CAP21_R21_to_CAP111_R20_F(values)
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
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-001. [@col] - Tab.1.1, rd.5 pe COL (@col), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4)) COL(1,3,4,5,6,8), @CAP1_R5_C <> @result_33_001', { '@col': i, '@CAP1_R5_C': CAP1_R5_C, '@result_33_001': result_33_001 })
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
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }
    }
}

//--------------------------------------------------------------------------------------------------------


function validate33_024(values) {
    var columns = [1, 3, 4, 5, 6, 8];

    for (var i = 0; i < columns.length; i++) {
        var col = columns[i];

        var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + col])) ? Number(values["CAP11_R1_C" + col]) : 0;
        var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + col])) ? Number(values["CAP11_R2_C" + col]) : 0;

        if (CAP1_R1_C !== 0 && CAP1_R2_C === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R2_C' + col,
                'weight': 19,
                'index': col,
                'msg': Drupal.t('Cod eroare: 33-024. [@col] - Tab.1.1, rd.1 pe COL (@col), COL(1, 3, 4, 5, 6, 8) ≠ 0 atunci Rînd.(2) COL(1, 3, 4, 5, 6, 8) ≠ 0 , @CAP1_R1_C ≠ @CAP1_R2_C', {
                    '@col': col,
                    '@CAP1_R1_C': CAP1_R1_C,
                    '@CAP1_R2_C': CAP1_R2_C
                })
            });
        }
    }
}



//---------------------------------------------------------------------------------------------------------

function validate33_002(values) {

    for (var i = 1; i <= 6; i++) {
        if (i !== 2) {

            var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + i])) ? Number(values["CAP11_R2_C" + i]) : 0;
            var CAP1_R3_C = !isNaN(Number(values["CAP11_R3_C" + i])) ? Number(values["CAP11_R3_C" + i]) : 0;

            if (CAP1_R2_C !== 0 && CAP1_R3_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R3_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-002. [@col] - Tab.1.1, rd.2 pe COL (@col), COL(1, 3, 4, 5, 6) ≠ 0 atunci Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0 și invers , @CAP1_R2_C - @CAP1_R3_C ≠ 0', { '@col': i, '@CAP1_R2_C': CAP1_R2_C, '@CAP1_R3_C': CAP1_R3_C })
                });
            } else if (CAP1_R2_C === 0 && CAP1_R3_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R2_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-002. [@col] - Tab.1.1, rd.2 pe COL (@col), COL(1, 3, 4, 5, 6) ≠ 0 atunci Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0 și invers , @CAP1_R2_C - @CAP1_R3_C ≠ 0', { '@col': i, '@CAP1_R2_C': CAP1_R2_C, '@CAP1_R3_C': CAP1_R3_C })
                });
            }
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

            if (R1_C !== 0 && R2_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R2_C' + col + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-024-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(1) COL(1, 3, 4, 5, 6, 8) ≠ 0 atunci Rînd.(2) COL(1, 3, 4, 5, 6, 8) ≠ 0, @R1_C ≠ @R2_C', {
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








function validate33_002_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {

            if (i !== 2) {
                var R3_C = 0, R2_C = 0;

                // Check if properties exist before accessing them

                if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
                    R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP11_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C = Number(values["CAP11_R3_C" + i + "_FILIAL"][j]);
                }




                if (R2_C === 0 && R3_C !== 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R2_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
                    });
                }

                else
                    if (R2_C !== 0 && R3_C === 0) {
                        webform.errors.push({
                            'fieldName': 'CAP11_R3_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
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
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------


//----------------------------------------------------------------------------



//----------------------------------------------------------------------------




//----------------------------------------------------------------------------


//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

//----------------------------------------------------------------------------


//----------------------------------------------------------------------------








//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
//Modify this logic in this Tab.1.1.1, daca rd.18 COL1≠0, atunci Tab. 1.1.1, rd.17 COL1≠0  logic
function validate33_015(values) {
    // 33-015 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R18_C = !isNaN(Number(values["CAP111_R18_C" + i])) ? Number(values["CAP111_R18_C" + i]) : 0;
            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;

            if (CAP11_R18_C !== 0 && CAP11_R17_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-015. [@col] - Tab.1.1.1, rd.18 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R18_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R18_C': CAP11_R18_C, '@CAP11_R17_C': CAP11_R17_C })
                });
            }
            // else if (CAP11_R18_C === 0 && CAP11_R17_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R18_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-015. [@col] - Tab.1.1.1, rd.18 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R18_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R18_C': CAP11_R18_C, '@CAP11_R17_C': CAP11_R17_C })
            //     });
            // }
        }
    }
}



//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

function validate33_015_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R18_C1 = 0, R17_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R18_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_C" + i + "_FILIAL"][j]))) {
                    R18_C1 = Number(values["CAP111_R18_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C1 = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (R18_C1 !== 0 && R17_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R17_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-015-F. Dacă Tab. 1.1.1, rd.18, COL1 ≠ 0 atunci Tab. 1.1.1, rd.17, COL1 ≠ 0, @R18_C1 <> @R17_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R18_C1': R18_C1,
                                '@R17_C1': R17_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------



function validate33_016(values) {
    // 33-016 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R19_C = !isNaN(Number(values["CAP111_R19_C" + i])) ? Number(values["CAP111_R19_C" + i]) : 0;
            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;

            if (CAP11_R19_C !== 0 && CAP11_R17_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-016. [@col] - Tab.1.1.1, rd.19 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R19_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R19_C': CAP11_R19_C, '@CAP11_R17_C': CAP11_R17_C })
                });
            }


        }
    }
}


//-------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------

function validate33_016_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R19_C1 = 0, R17_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R19_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R19_C" + i + "_FILIAL"][j]))) {
                    R19_C1 = Number(values["CAP111_R19_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C1 = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (R19_C1 !== 0 && R17_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R17_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-016-F. Dacă Tab. 1.1.1, rd.19, COL1 ≠ 0 atunci Tab. 1.1.1, rd.17, COL1 ≠ 0, @R19_C1 <> @R17_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R19_C1': R19_C1,
                                '@R17_C1': R17_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------

//----------------------------------------------------------------------------





function validate33_018(values) {
    // 33-018 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R20_C = !isNaN(Number(values["CAP111_R20_C" + i])) ? Number(values["CAP111_R20_C" + i]) : 0;
            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;

            if (CAP11_R20_C !== 0 && CAP11_R7_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-018. [@col] - Tab.1.1.1, rd.20 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(7) COL(1) ≠ 0 și nu invers , @CAP11_R20_C - @CAP11_R7_C ≠ 0', { '@col': i, '@CAP11_R20_C': CAP11_R20_C, '@CAP11_R7_C': CAP11_R7_C })
                });
            }
        }
    }
}





function validate33_018_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R20_C1 = 0, R7_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
                    R20_C1 = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C1 = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (R20_C1 !== 0 && R7_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R7_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R7_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-018-F. Dacă Tab. 1.1.1, rd.20, COL1 ≠ 0 atunci Tab. 1.1.1, rd.7, COL1 ≠ 0, @R20_C1 <> @R7_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R20_C1': R20_C1,
                                '@R7_C1': R7_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------









//----------------------------------------------------------------------------


//Modify this logic in this -- Tab. 1.1.1, rd.10 COL1 ≥ Tab.1.1.1, rd.11 COL1 ---  logic
function validate33_007(values) {
    // 33-007 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R10_C = !isNaN(Number(values["CAP111_R10_C" + i])) ? Number(values["CAP111_R10_C" + i]) : 0;
            var CAP11_R11_C = !isNaN(Number(values["CAP111_R11_C" + i])) ? Number(values["CAP111_R11_C" + i]) : 0;

            if (CAP11_R10_C < CAP11_R11_C) {
                webform.errors.push({
                    'fieldName': 'CAP111_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-007. [@col] - Tab.1.1.1, rd.10 pe COL (@col), COL(1) trebuie să fie ≥ Tab 1.1.1, Rînd.(11) COL(1) , @CAP11_R10_C - @CAP11_R11_C', { '@col': i, '@CAP11_R10_C': CAP11_R10_C, '@CAP11_R11_C': CAP11_R11_C })
                });
            }
        }
    }
}


//-------------------------------------------------------------------------------------------

function validate33_007_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1; i <= 2; i++) {
            if (i !== 20) {
                var R10_C = 0, R11_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C = Number(values["CAP111_R10_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R11_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_C" + i + "_FILIAL"][j]))) {
                    R11_C = Number(values["CAP111_R11_C" + i + "_FILIAL"][j]);
                }

                if (R10_C < R11_C) {
                    webform.errors.push({
                        'fieldName': 'CAP111_R10_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-007-F. [@col_FILIAL] - COL(@col_FILIAL), Tab. 1.1.1, rd.10 COL1 trebuie să fie mai mare sau egală cu Tab. 1.1.1, rd.11 COL1, @R10_C < @R11_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R10_C': R10_C,
                            '@R11_C': R11_C
                        })
                    });
                }
            }
        }
    }
}

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function validate33_014(values) {
    // 33-014 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;
            var CAP11_R18_C = !isNaN(Number(values["CAP111_R18_C" + i])) ? Number(values["CAP111_R18_C" + i]) : 0;

            if (CAP11_R17_C < CAP11_R18_C) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-014. [@col] - Tab.1.1.1, rd.17 pe COL (@col), COL(1) trebuie să fie ≥ Tab 1.1.1, Rînd.(18) COL(1) , @CAP11_R17_C - @CAP11_R18_C', { '@col': i, '@CAP11_R17_C': CAP11_R17_C, '@CAP11_R18_C': CAP11_R18_C })
                });
            }
        }
    }
}




function validate33_014_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R17_C = 0, R18_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R18_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_C" + i + "_FILIAL"][j]))) {
                    R18_C = Number(values["CAP111_R18_C" + i + "_FILIAL"][j]);
                }

                if (R17_C < R18_C) {
                    webform.errors.push({
                        'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-014-F. [@col_FILIAL] - COL(@col_FILIAL), Tab. 1.1.1, rd.17 COL1 trebuie să fie mai mare sau egală cu Tab. 1.1.1, rd.18 COL1, @R17_C < @R18_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R17_C': R17_C,
                            '@R18_C': R18_C
                        })
                    });
                }
            }
        }
    }
}


//----------------------------------------------------------------------------




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
