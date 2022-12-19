     var heading = document.querySelector("h2");
     var btnLen = document.querySelectorAll(".buttom").length;
     for(let x=0; x<btnLen;x++){
          document.querySelectorAll(".buttom")[x].addEventListener("click", function(){
               var text = this.innerHTML;
               heading.innerHTML = text + " Is Click";
          });
     }
          
     
     
 
 
 