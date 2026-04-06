import csv
import taxCalculation as tc
import time

dbPath = "../pages/_userDB.csv"


def newPaymentMethod(cardNum, cvv, username, address):
    temp_dataline = [username, cardNum, cvv, address]
    replacementData = []
    with open(dbPath, "r") as file:

        for line in file:
            if(username == line[0]):
                replacementData.append(temp_dataline)
            else:
                replacementData.append(line)
    
    file.close()
    with open(dbPath, "w") as file:
        writer = csv.writer(file)
        writer.writerows(dbPath)
    file.close()

def validCard(cardNum, cvv, username):
    with open(dbPath, "r") as file:

        for line in file:
            if(username == line[0]):
                file.close()
                return True
    file.close()
    return False


def sendTip(username, reciever, amount, payment, postName): 
    if (confirmReciever()):
         
        afterTax = tc.calculateTax(username, reciever, amount)
        tc.recordTax(username, reciever, amount)
        tc.senderNotif(username, reciever, payment, postName)
        tc.receiverNotif(username, reciever, afterTax[2], postName)

def confirmReciever(reciever):
    notice = "Confirm that you wish to send a tip to " + reciever + ". "
    i=0
    for i in range(0,15):
        if (input(notice + "Press Y to confirm: ") != "y"):
            time.sleep(1)
        else:
            return True
    return False

def removePaymentMethod(username):
    temp_dataline = [username, None, None, None]
    replacementData = []
    with open(dbPath, "r") as file:

        for line in file:
            if(username == line[0]):
                replacementData.append(temp_dataline)
            else:
                replacementData.append(line)
    
    file.close()
    with open(dbPath, "w") as file:
        writer = csv.writer(file)
        writer.writerows(dbPath)
    file.close()