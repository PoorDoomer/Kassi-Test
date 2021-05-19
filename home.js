
//fonction permettant de fade un element
function fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 100);
}


//fonction permettant de unfade un element 
function kern(element) {
  var op = 0.1;
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
      //element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}


//fonction permettant de n3ess pendant wa7d delta T
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
