import csv
import taxCalculation as tc
import sendTips as st
import random

dbPath = "../pages/_userDB.csv"

tipJarAlerts = ["ALERT! Your tip jar is getting full!", " loved your work!",
                "New tips are in your jar!", "Keep up the great work!",
                "$ added to your jar by "]

def receiveTip(username, sender, amount):
    receiverMoney = 0
    csvDataTemp = []
    receiverMoney = tc.recordTax(sender, username, amount)
    return receiverMoney

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

def tipDisplay(username):
    return tc.findReceiverMoney(username)

def removeTip(accountNum, username):
    if (st.validCard(accountNum, username)):
        amount = tc.emptyJar(username)
        return amount
    else:
        return 0

def alertIssue(accountNum, username, sender, amount):
    if not st.validCard(accountNum, username):
        return "Invalid card, please check your card details."
    if sender == None:
        return "No sender. Transaction error."
    if username == None:
        return "No receiver. Invalid tip, please confirm the username again."
    if amount <= 0:
        return "Invalid tip amount, please input a tip of 1 cent or more."

def sendThanks(sender, username):
    return sender + ',' + username + ' thanks you for your tip!'