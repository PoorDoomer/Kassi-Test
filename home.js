/*let myLogo = document.getElementById('myLogo');
Document.getElementById(myButton).onclick=function(){
    myLogo.classList.toggle("fade-in-image");
}*/

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 100);
}
function kern(element){
    var op=0.1;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


// incremente mais pas au dessus de 10
  function incrementValue()
  {
      var value = parseInt(document.getElementById('number').value, 10);
      if (value<10){
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
      console.log("un sucre en plus");

  }
}
// decrement mais pas en dessous de 0
  function decrementValue()
  {
      var value = parseInt(document.getElementById('number').value, 10);
      if (value>0){
           value = isNaN(value) ? 0 : value;
            value--;
            document.getElementById('number').value = value;
            console.log("un sucre en moins");

      }
     
  }

var i = 0;
//augmente la longueur d'une certaine couleur a un certain interval
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}