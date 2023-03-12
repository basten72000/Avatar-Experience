document.body.onload=function(){


}





function switchvideo(titre,src){
    videotitre(titre);
    srcswitch(src);
}





function srcswitch(newsrc){
    var video = document.getElementById("video");
    var srcvideo = document.getElementById("srcVideo");
    srcvideo.src=newsrc;
    video.load();
}

function videotitre(newtitre){
    var titre = document.getElementById("titre");
    titre.innerHTML=newtitre;
}




