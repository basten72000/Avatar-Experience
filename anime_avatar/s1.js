



var sliderindex = 1



document.body.onload=function(){
    
    switchvideo("episode "+sliderindex+" saison 1",geturl(sliderindex))
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



function geturl(num){
    const ep1 = "https://hydrax.net/watch?v=hGVO6UVVRk"
    const ep2 = "https://hydrax.net/watch?v=oTLnpff1k"
    const ep3 = "https://hydrax.net/watch?v=l9REUX2JI"
    const ep4 = "https://hydrax.net/watch?v=7U4Fknd8s"
    const ep5 = "https://hydrax.net/watch?v=8eO4qfa2e"
    const ep6 = "https://hydrax.net/watch?v=jV10srviR"
    const ep7 = "https://hydrax.net/watch?v=V_HVFoMfq"
    const ep8 = "https://hydrax.net/watch?v=ckpTc22mR"
    const ep9 = "https://hydrax.net/watch?v=5gNFEz-ia"
    const ep10 = "https://hydrax.net/watch?v=2GzF2b8Tl"
    const ep11 = "https://hydrax.net/watch?v=fCLBPfE6I"
    const ep12 = "https://hydrax.net/watch?v=I8X_diO1v"
    const ep13 = "https://hydrax.net/watch?v=FZdrhwuYd"
    const ep14 = "https://hydrax.net/watch?v=kZdO0HlN8"
    const ep15 = "https://hydrax.net/watch?v=hd8oI3XiD"
    const ep16 = "https://hydrax.net/watch?v=HjAocQzhh"
    const ep17 = "https://hydrax.net/watch?v=99j6FW1MY"
    const ep18 = "https://hydrax.net/watch?v=EanMcACvd"
    const ep19 = "https://hydrax.net/watch?v=S2afmEfSU"
    const ep20 = "https://hydrax.net/watch?v=bYdxtd4cj"


    if (num == 1) {
        return ep1;
      } else if (num == 2) {
        return ep2;
      } else if (num == 3) {
        return ep3;
      } else if (num == 4) {
        return ep4;
      } else if (num == 5) {
        return ep5;
      } else if (num == 6) {
        return ep6;
      } else if (num == 7) {
        return ep7;
      } else if (num == 8) {
        return ep8;
      } else if (num == 9) {
        return ep9;
      } else if (num == 10) {
        return ep10;
      } else if (num == 11) {
        return ep11;
      } else if (num == 12) {
        return ep12;
      } else if (num == 13) {
        return ep13;
      } else if (num == 14) {
        return ep14;
      } else if (num == 15) {
        return ep15;
      } else if (num == 16) {
        return ep16;
      } else if (num == 17) {
        return ep17;
      } else if (num == 18) {
        return ep18;
      } else if (num == 19) {
        return ep19;
      } else if (num == 20) {
        return ep20;
      } else {
        return "URL non valide";
      }
      
}
























const epmax = 20
const boutsui = document.getElementById("suivant")
const boutpre = document.getElementById("precedent")

document.getElementById("suivant").onclick=function(){

    sliderindex++
    switchvideo("episode "+sliderindex+" saison 1",geturl(sliderindex))
    boutpre.style.visibility="visible"
    if (sliderindex==20){
        boutsui.style.visibility="hidden"
    }
    
}


document.getElementById("precedent").onclick=function(){

    sliderindex--
    switchvideo("episode "+sliderindex+" saison 1",geturl(sliderindex))
    boutsui.style.visibility="visible"
    if (sliderindex==1){
        boutpre.style.visibility="hidden"
    }
    



}

