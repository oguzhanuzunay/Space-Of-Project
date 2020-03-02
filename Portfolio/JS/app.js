function smoothScroll(target, duraction) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundinglientRect().top;
  var starPosition = window.pageYOffset;
}
smoothScroll(".middle", 1000);
