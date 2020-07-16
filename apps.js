const txtSet = ["Programmer","Designer","Gamer"];
let count = 0;
let index = 0;
let currTxt = "";
let letter = "";
var slideIndex = 1;

(function type() {
    if (count === txtSet.length) {
        count = 0;
    }
    currTxt = txtSet[count];
    letter = currTxt.slice(0, ++index);
    
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currTxt.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400);
})();

function cascNav() {
    var x = document.getElementById("myNav");
    if(x.className === "navmenu") {
        x.className += " responsive";
        console.log(x.className);
    }
    else {
        x.className = "navmenu";
    }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}