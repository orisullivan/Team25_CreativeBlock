import csv

temporarySender = ""
temporaryReceiver = ""
temporaryTransaction = ""
temporaryTax = ""

tempData = []

def calculateTax(sender, receiver, transactionValue):
    #set book records temporarily to add to the csv 
    temporarySender = sender
    temporaryReceiver = receiver

    #calculate the tax and add temporary data
    if (transactionValue >= 0):
        temporaryTax = 0.1 * transactionValue
        temporaryTransaction = transactionValue - temporaryTax
        tempData = [temporarySender, temporaryReceiver, temporaryTransaction, temporaryTax]
        return tempData
    else:
        tempData = [temporarySender, temporaryReceiver, "Illegal Transaction", 0]
        return tempData


def recordTax(sender, receiver, transactionValue):
    record = calculateTax(sender, receiver, transactionValue)
    csvDataTemp = []
    with open("./taxRecord.csv", "a", newline='') as recordFile:
        writer = csv.writer(recordFile)
        writer.writerow(record)
    recordFile.close()

    with open("./jarCoins.csv", "r", newline='') as jarFile:
        found  = 0
        reader = csv.reader(jarFile, delimiter=',')
        for i in reader:
            if (i[0] == record[1]):
                tempLine = [i[0], (i[1]+record[2])]
                csvDataTemp.append(tempLine)
                found = 1
            else:
                csvDataTemp.append(i)

        if (found == 0):
            line = [record[1], record[2]]
            csvDataTemp.append(line)
    jarFile.close()

    with open("./jarCoins.csv", "w", newline='') as jarFile:
        writer = csv.writer(jarFile)
        writer.writerows(csvDataTemp)
    jarFile.close()

def findReceiverMoney(receiver):
    receiverMoney = 0
    with open("./jarCoins.csv", "r", newline='') as jarFile:
        reader = csv.reader(jarFile, delimiter=',')
        for i in reader:
            if (i[1] == receiver):
                receiverMoney = i[1]
    jarFile.close()
    return receiverMoney

def findSenderMoney(sender):
    senderMoney = 0
    with open("./taxRecord.csv", "r", newline='') as recordFile:
        reader = csv.reader(recordFile, delimiter=',')
        for i in reader:
            if (i[0] == sender):
                receiverMoney += i[2]
    recordFile.close()
    return senderMoney

def receiverNotif(sender, receiver, transactionValue, postName):
    transVal = 0.90 * transactionValue
    emailText = ""
    emailText += receiver + " you recieved a tip for your post " + postName + "! " 
    emailText += sender + " tipped you " + transVal + "!"
    return emailText

def senderNotif(sender, receiver, transactionValue, postName):
    emailText = ""
    emailText += sender + " you sent a tip to " + receiver + " for their post " + postName + "! " 
    emailText += "You tipped " + transactionValue 
    emailText += ", thank you for supporting your fellow artists!"
    return emailText

def emptyJar(reciever):
    receiverMoney = 0
    csvDataTemp = []
    with open("./jarCoins.csv", "r", newline='') as jarFile:
        reader = csv.reader(jarFile, delimiter=',')
        for i in reader:
            if (i[1] == reciever):
                receiverMoney += i[1]
                line = [i[0], 0]
                csvDataTemp.append(line)
            else:
                csvDataTemp.append(i)
    jarFile.close()
    
    with open("./jarCoins.csv", "w", newline='') as jarFile:
        writer = csv.writer(jarFile)
        writer.writerows(csvDataTemp)
    jarFile.close()
    return receiverMoney