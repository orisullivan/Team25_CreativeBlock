
const FavButton = document.getElementById("FavButton");
const FavButtonImg = document.getElementById("FavButtonImg");

FavButton.addEventListener("click", function ()
{
    if (FavButton.getAttribute("data-toggle") == "unfavorited")
    {
        console.log("favorited");
        FavButton.setAttribute("data-toggle", "favorited");
        FavButtonImg.src = "favorite button.png";
    }

    else
    {
        console.log("unfavorited");
        FavButton.setAttribute("data-toggle", "unfavorited");
        FavButtonImg.src = "empty star.png"; 
    }

}
);



