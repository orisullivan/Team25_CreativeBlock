import csv


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


    