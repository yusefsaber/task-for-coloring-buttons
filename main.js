document. addEventListener( "DOMContentLoaded", function (){


document.querySelectorAll("button").forEach(function(yousef){

yousef.onclick = function (){

    
  document.querySelector("#result").style.color = yousef.dataset.color;
}
  
})


} )