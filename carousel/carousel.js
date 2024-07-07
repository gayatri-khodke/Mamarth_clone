let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("myslide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment the slide index
  slideIndex++;
  
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 6000);
}

function plusSlides(n) {
  slideIndex += n - 1;

  showSlides();
}

showSlides();
