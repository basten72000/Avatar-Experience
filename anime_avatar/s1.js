document.body.onload=function(){
    switchvideo("saison 1 episode 1","s1/saison 1 épisode 1.mp4")

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




