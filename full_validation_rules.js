````

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
