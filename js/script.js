
// slide show at heeder

function startModal() {
  document.getElementById("myModal").style.display = "block";
}

function endModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 0;
showSlides(slideIndex);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // makes sure the pictures move 1 by 1
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  [slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

