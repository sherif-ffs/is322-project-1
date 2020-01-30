const slides = document.getElementsByClassName("slides-container");
const previousSlide = document.querySelector('.prev');
const nextSlide = document.querySelector('.next');
let slideIndex = 1;

previousSlide.addEventListener('click', () => {
    changeSlides(-1)
})
nextSlide.addEventListener('click', () => {
    changeSlides(1)
})


displaySlides(slideIndex);

function changeSlides(n) {
  displaySlides(slideIndex += n);
}

function currentSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  if (n > slides.length) {
      slideIndex = 1
    }   

  if (n < 1) {
      slideIndex = slides.length
    }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}