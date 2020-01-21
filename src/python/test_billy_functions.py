from billy_functions import *
from openpyxl import *
from datetime import datetime

def test_makeDict():
    billy = load_workbook('Billy Inc.xlsx')
    customers = billy['customers']
    customersDict = makeDict(customers)
    assert customersDict[1]['id'] == 1
    assert customersDict[1]['first_name'] == 'Jared'
    assert customersDict[1]['last_name'] == 'Ely'
    assert customersDict[1]['contact_no'] == 14033335568
    assert customersDict[1]['address'] == '47 MySakila Drive'

def test_invoiceBuilder():
    # load the excel file sheets
    billy = load_workbook('Billy Inc.xlsx')
    customers = billy['customers']
    invoices = billy['invoices']
    invoice_lines = billy['invoice lines']
    products = billy['products']

    # create dictionary from sheets
    customersDict = makeDict(customers)
    invoicesDict = makeDict(invoices)
    invoice_linesDict = makeDict(invoice_lines)
    productsDict = makeDict(products)

    newInvoice = invoiceBuilder(1, invoicesDict, customersDict, invoice_linesDict, productsDict)
    assert newInvoice['invoice']['id'] == 1
    assert newInvoice['invoice']['date'] == datetime(2020, 1, 1, 0, 0)
    assert newInvoice['customer']['first_name'] == 'Jared'
    assert newInvoice['customer']['last_name'] == 'Ely'
    assert newInvoice['items'][0]['id'] == 1
    assert newInvoice['items'][0]['description'] == 'Salt'
    assert newInvoice['items'][-1]['id'] == 4
    assert newInvoice['items'][-1]['description'] == 'Sodium Bicarb'