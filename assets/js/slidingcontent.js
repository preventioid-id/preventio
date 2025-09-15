const slider = document.querySelector('.slider.features6');
const btnLeft = document.querySelector('.slide-btn.left');
const btnRight = document.querySelector('.slide-btn.right');

// Scroll amount = width of card (300) + gap (32px = 2rem)
const scrollAmount = 332;

btnLeft.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
