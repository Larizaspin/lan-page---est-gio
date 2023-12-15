let slideIndex = 0;
let autoScroll = setInterval(() => scrollSlide(1), 1000); // Altera a cada 1 segundos

function scrollSlide(direction) {
  clearInterval(autoScroll);

  const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth + 20; // Largura do slide + margem

  if (direction === -1) {
    slideIndex--;
  } else {
    slideIndex++;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  carrossel.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

  autoScroll = setInterval(() => scrollSlide(1), 5000); // Reinicia o passe automático após a navegação manual
}

//Objetivos, altera as cores
function toggleColor(element) {
  element.classList.toggle('clicked');
}