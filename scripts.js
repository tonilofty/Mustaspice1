document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;

    function updateSliderPosition() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSliderPosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.slide');
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');
            cart.push({ name, price });
            console.log(cart); // For testing purposes
        });
    });
});
