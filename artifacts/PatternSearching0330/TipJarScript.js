
function showTipJar()
{
    fetch("TipJarPopUp.html")
        .then(response => response.text())
        .then(text => {document.getElementById("TipJarDiv").innerHTML = text;})

}

function hideTipJar()
{
    document.getElementById("TipJarDiv").innerHTML = "";
}

function submitTipInfo()
{
    
}


