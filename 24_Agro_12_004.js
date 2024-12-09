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
