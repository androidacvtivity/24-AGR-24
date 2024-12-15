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
