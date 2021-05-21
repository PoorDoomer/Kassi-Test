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



  var playing = true;
  function loop(){
      if(playing){
        $('.images img:eq(1)').fadeIn(700, function(){
          $(this).fadeOut(700,loop);
        });
      }
    }