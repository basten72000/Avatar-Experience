document.body.onload=function(){
    console.log("s1")
}





function switchvideo(titre,src){
    videotitre(titre);
    srcswitch(src);
}





function srcswitch(link){
    var iframe = document.getElementById("link");
    iframe.src = link
}

function videotitre(newtitre){
    var titre = document.getElementById("titre");
    titre.innerHTML=newtitre;
}




