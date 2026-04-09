   function loadHeader () {
   fetch("../../WebsiteHeader.html")
    .then(response => response.text())
    .then(text => {document.getElementById("header").innerHTML = text;})
   }

   loadHeader();
