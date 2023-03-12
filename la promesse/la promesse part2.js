document.body.onload=function(){



    loadPages(75,2)
        
    }
    function loadPages(nbPage,part){
        var livre = document.getElementById("livre");
    
        
    
        for (var i = 1; i < nbPage+1; i++) {
            
    
            var news = document.createElement("img");
            news.src = "la prommesse part"+part+"/part"+part+" ("+i+").png"
            
            livre.appendChild(news)
    
          }
          
    }