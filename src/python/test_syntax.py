from syntax import *

def test_email():
    assert email('Larry', 'Shumlich') == 'larry.shumlich@evolveu.ca'
    assert email('Mohsen', 'Aghajani') == 'mohsen.aghajani@evolveu.ca'