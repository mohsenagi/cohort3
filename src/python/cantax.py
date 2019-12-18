def taxcal(income, jur):
    tax_data = {
        'FD' : {'increm' : [47630, 47629, 52408, 62704], 'rates' :[0.15, 0.205, 0.26, 0.29, 0.33]},
        'NL' : {'increm' : [37591, 37590, 59043, 53689, 187913], 'rates' :[0.087, 0.145, 0.158, 0.173, 0.183]},
        'PE' : {'increm' : [31984, 31985], 'rates' :[0.098, 0.138, 0.167]},
        'NS' : {'increm' : [29590, 29590, 33820, 57000], 'rates' :[0.0879, 0.1495, 0.1667, 0.175, 0.21]},
        'NB' : {'increm' : [42592, 42592, 53307, 19287], 'rates' :[0.0968, 0.1482, 0.1652, 0.1784, 0.203]},
        'ON' : {'increm' : [43906, 43907, 62187, 70000], 'rates' :[0.0505, 0.0915, 0.1116, 0.1216, 0.1316]},
        'MB' : {'increm' : [32670, 37940], 'rates' :[0.108, 0.1275, 0.174]},
        'SK' : {'increm' : [45225, 83989], 'rates' :[0.105, 0.125, 0.145]},
        'AB' : {'increm' : [131220, 26244, 52488, 104976], 'rates' :[0.1, 0.12, 0.13, 0.14, 0.15]},
        'BC' : {'increm' : [40707, 40709, 12060, 20030, 40394], 'rates' :[0.0506, 0.077, 0.105, 0.1229, 0.147, 0.168]},
        'YT' : {'increm' : [47630, 47629, 52408, 352333], 'rates' :[0.064, 0.09, 0.109, 0.128, 0.15]},
        'NT' : {'increm' : [43137, 43140, 53990], 'rates' :[0.059, 0.086, 0.122, 0.1405]},
        'NU' : {'increm' : [45414, 45415, 56838], 'rates' :[0.04, 0.07, 0.09, 0.115]},
    }
    increments = tax_data[jur]['increm']
    rates = tax_data[jur]['rates']
    tax = 0
    income_increm = []
    for idx, itm in enumerate(increments) :
        if income >= 0 :
            income_increm.append(min(income, itm))
            income = income - itm
            if idx == (len(increments)-1) and income >= 0 : income_increm.append(income)
    print(income_increm)
    for idx, itm in enumerate(income_increm) :
        tax = tax + itm * rates[idx]
    return round(tax, 2)
