import csv
import taxCalculation as tc
import random

dbPath = "../pages/_userDB.csv"

tipJarAlerts = ["ALERT! Your tip jar is getting full!", " loved your work!",
                "New tips are in your jar!", "Keep up the great work!",
                "$ added to your jar by "]

def receiveTip(username, sender, amount):
    

def tipJarAlert(sender, receiver, transactionValue, postName):
    #alert when values change in the tip jar
    tc.receiverNotif(sender, receiver, transactionValue, postName)
    ran = random.randint(0,5)
    if ran == 1:
        return "" + sender + tipJarAlerts[ran]
    elif ran == 4:
        return "" + transactionValue + tipJarAlerts[ran] + "!"
    else:
        return tipJarAlerts[ran]

def tipDisplay():
    
def removeTip():

def alertIssue():

def sendThanks():
