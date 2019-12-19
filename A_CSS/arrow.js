
var rotate = document.querySelector('.arrow');

rotate.onmouseover = function(){
  rotate.classList.add('over');
}
rotate.onmouseleave = function(){
  rotate.classList.remove('over');
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dotS");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
}


/*
rotate.addEventListener( 'mouseover', function () {

    rotate.classList.add('over');

});

rotate.addEventListener( 'mouseout', function () {

    rotate.classList.remove('over');
    //window.setTimeout( function () { rotate.className = 'arrow' }, 150 );

});
*/
