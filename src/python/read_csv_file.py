with open('Census_by_Community_2018.csv', 'r') as census:
    line1 = census.readline()
    line1 = line1.split(',')
    classIndex = line1.index('CLASS')
    sectorIndex = line1.index('SECTOR')
    countIndex = line1.index('RES_CNT')
    classDict = {}
    sectorDict = {}
    for line in census:
        line = line.split(',')
        classDict[line[classIndex]] = classDict.get(line[classIndex], 0) + float(line[countIndex])
        sectorDict[line[sectorIndex]] = sectorDict.get(line[sectorIndex], 0) + float(line[countIndex])
print(classDict)
print(sectorDict)
with open('report.txt', 'w') as report:
    for classes, counts in classDict.items():
        report.write(f"total count in {classes}: {counts}\n")
    report.write(f"\n")
    for sectors, counts in sectorDict.items():
        report.write(f"total count in {sectors}: {counts}\n")
