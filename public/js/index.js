/* Slider function */
// Función para avanzar al siguiente slide
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider-wrapper');
    const slideWidth = document.querySelector('.section-product').offsetWidth;
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slider.children.length) {
        currentIndex = 0;
        }
      const transformValue = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${transformValue}px)`;
    }

    nextButton.addEventListener('click', nextSlide);
});
console.log('hola')