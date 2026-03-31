
const testData = [ {MaterialImage:"guest pfp.webp",MaterialEntryTitle: "Magic Square", DateAdded: "2/19/2026", Difficulty: "1/5", CraftType: "Crochet", PatternType: "Other",}];

const container = document.getElementById("Entries");
const template = document.getElementById("Entry")

function populate()
{
    testData.forEach(entry => 
    {
        const clone = template.content.cloneNode(true);
        clone.querySelector("#MaterialImage").innerHTML = entry.MaterialImage;
        clone.querySelector(".MaterialEntryTitle").textContent = entry.MaterialEntryTitle;
        clone.querySelector(".DateAdded").textContent = entry.DateAdded;
        clone.querySelector(".Difficulty").textContent = entry.Difficulty;
        clone.querySelector(".CraftType").textContent = entry.CraftType;
        clone.querySelector(".PatternType").textContent = entry.PatternType;
        container.appendChild(clone);
    }
                    )
};

populate();
