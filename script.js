document.body.onload=function(){
loadFooter()



}

function loadFooter(){
    var footers = document.getElementsByTagName("footer");
    var footer = footers[0]
    var inFoot = document.createElement("div");


    inFoot.innerHTML = "<p>Tout le code source ici: <a href="+"https://github.com/basten72000/Avatar-Experience"+">Github.io</a></p>";
     

    footer.appendChild(inFoot)
}




