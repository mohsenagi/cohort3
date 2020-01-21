from openpyxl import *
from billy_functions import *

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

invoice_id = input('Please enter the id of the invoice you want to print out: ')
try:
    # find the id in invoices and create a new dictionary by joining all tables
    invoice_id = float(invoice_id)
    newInvoice = invoiceBuilder(invoice_id, invoicesDict, customersDict, invoice_linesDict, productsDict)
    # generating the invoice file
    invoiceFile = load_workbook('invoice.xlsx')
    invoiceSheet = invoiceFile['invoice']
    invoiceSheet['A3'] = f"Invoice No.: {newInvoice['invoice']['id']}"
    invoiceSheet['H3'] = newInvoice['invoice']['date']
    invoiceSheet['A7'] = f"{newInvoice['customer']['first_name']} {newInvoice['customer']['last_name']}\n{newInvoice['customer']['address']}"
    invoiceSheet['E7'] = f"{newInvoice['invoice']['shipping_address']}"
    row = 10
    for item in newInvoice['items']:
        invoiceSheet[f"A{row}"] = item['description']
        invoiceSheet[f"D{row}"] = item['quantity']
        invoiceSheet[f"E{row}"] = item['unit']
        invoiceSheet[f"F{row}"] = item['unit_price']
        invoiceSheet[f"H{row}"] = item['quantity'] * item['unit_price']
        row = row + 1
    invoiceFile.save('newInvoice.xlsx')
except:
    print('The invoice id you entered could not be found ...!')