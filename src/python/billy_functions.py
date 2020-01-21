def makeDict(sheet):
    header = sheet[1]
    newDict = {}
    for row in sheet.rows:
        rowDict = {}
        index = 0
        for cell in row:
            rowDict[header[index].value] = cell.value
            index = index+1
        newDict[row[0].value] = rowDict
    newDict.pop('id')
    return newDict

def invoiceBuilder(invoice_id, invoicesDict, customersDict, invoice_linesDict, productsDict):
    invoice = invoicesDict[invoice_id]
    customer = customersDict[invoice['customer_id']]
    items = []
    for key in invoice_linesDict:
        if invoice_linesDict[key]['invoice_id'] == invoice_id:
            items.append(invoice_linesDict[key])
            product = productsDict[items[-1]['product_id']]
            items[-1] = {
                'id': product['id'],
                'description': product['description'],
                'weight': product['weight'],
                'unit': product['unit'],
                'quantity': items[-1]['quantity'],
                'unit_price': items[-1]['unit_price']
            }
    return {'invoice': invoice, 'customer': customer, 'items': items}