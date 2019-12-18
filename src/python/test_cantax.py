from cantax import *

def test_taxcal():
    assert taxcal(1, 'FD') == 0.15
    assert taxcal(2, 'FD') == 0.3
    assert taxcal(50000, 'FD') == 7630.35
    assert taxcal(100000, 'FD') == 18141.10
    assert taxcal(150000, 'FD') == 31211.10
    assert taxcal(250000, 'FD') == 61796.25
    
    assert taxcal(1, 'BC') == 0.05
    assert taxcal(2, 'BC') == 0.1
    assert taxcal(50000, 'BC') == 2775.34
    assert taxcal(100000, 'BC') == 7262.47
    assert taxcal(150000, 'BC') == 14286.97
    assert taxcal(250000, 'BC') == 31005.07
    assert taxcal(300000, 'BC') == 31005.07

