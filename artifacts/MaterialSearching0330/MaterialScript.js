
const testData = [ {MaterialImage:"guest pfp.webp",MaterialEntryTitle: "Bernat Blanket Yarn", DateAdded: "2/19/2026", MaterialType: "Yarn", Brand: "Bernat", Color: "Blue",UsedIn: "meowmeowmeow.com"}];

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
        clone.querySelector(".MaterialType").textContent = entry.MaterialType;
        clone.querySelector(".Brand").textContent = entry.Brand;
        clone.querySelector(".Color").textContent = entry.Color;
        container.appendChild(clone);
    }
                    )
};

populate();
