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
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 27-003-F. Valoarea CAP21 Rând.35 col.1 trebuie să fie ≤ CAP21 Rând.34 col.1. Valoarea găsită: ' + CAP21_R35_F + ', valoarea așteptată maximă: ' + CAP21_R34_F, {
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
            'msg': Drupal.t('Cod eroare: 27-003. Valoarea CAP.2.1 Rând.35 col.1 trebuie să fie ≤ CAP.2.1 Rând.34 col.1. Valoarea găsită: ' + CAP21_R35 + ', valoarea așteptată maximă: ' + CAP21_R34)
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
            'msg': Drupal.t('Cod eroare: 27-002 Valoarea CAP.2.1 Rând.23 col.1 trebuie să fie egală cu CAP.2.2 Rând.11 col.1. Valoarea găsită: ' + CAP21_R23 + ', --- ' + CAP22_R11)
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
