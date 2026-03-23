
const testData = [ {EntryTitle: "How To Sew 101", Author: "Adrienne Juba", Date: "2/19/2026", Tags: "Sewing,Thread,Sewing Machine", Comments: "2", Description: "A simple tutorial on sewing!"},
                   {EntryTitle: "Crocheting For Dummies", Author: "Hingle McCringleberry", Date: "2/20/2026", Tags: "Crocheting, Yarn", Comments: "1", Description: "What the title says..."},
                   {EntryTitle: "Crocheting For Dummies", Author: "Hingle McCringleberry", Date: "2/20/2026", Tags: "Crocheting, Yarn", Comments: "1", Description: "What the title says..."}
                ];
const container = document.getElementById("Entries");
const template = document.getElementById("Entry")

function populate()
{
    testData.forEach(entry => 
    {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".EntryTitle").textContent = entry.EntryTitle;
        clone.querySelector(".Author").textContent = entry.Author;
        clone.querySelector(".Date").textContent = entry.Date;
        clone.querySelector(".Tags").textContent = entry.Tags;
        clone.querySelector(".Comments").textContent = entry.Comments;
        clone.querySelector(".Description").textContent = entry.Description;
        container.appendChild(clone);
    }
                    )
};

populate();
