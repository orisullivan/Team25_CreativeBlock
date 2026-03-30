import csv

with open('MockForumDatabase.csv', mode = "r") as file:

    def fillTemplate(template):
        file.write(template.format(EntryTitle = EntryTitle))


