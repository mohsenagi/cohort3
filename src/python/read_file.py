with open ("C:\code\cohort3\src\javascript\Syntax.js", "r") as syntax:
    print(syntax.name)
    fileLines = syntax.readlines()
    print(f"number of lines in the file: {len(fileLines)}")

with open ("C:\code\cohort3\src\javascript\Syntax.js", "r") as syntax:
    fileText = syntax.read()
    elseNumber = fileText.count("else ")
    forNumber = fileText.count("for ")
    print(f"number of characters in the file: {len(fileText)}")
    print(f"number of else statements: {elseNumber}")
    print(f"number of for statements: {forNumber}")


import os
path = input('please enter the directory path: ')
totalFile = 0
totalSize = 0
totalFolder = 0
for root, direct, fil in os.walk(path):
    # print(root, direct, fil)
    totalFile = totalFile + len(fil)
    totalFolder = totalFolder + len(direct)
    for fil in fil:
        size = os.stat(f"{root}\{fil}").st_size
        totalSize = totalSize + size
print(f"\nthere are {totalFile} files and {totalFolder} folders with total size of {totalSize} bytes in this directory")