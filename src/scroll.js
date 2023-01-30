const pinkCard = document.querySelector('.products__menu-items--pink');
const beigeCard = document.querySelector('.products__menu-items--beige');
const greenCard = document.querySelector('.products__menu-items--green');
const labelProducts = document.querySelector('.products__label');
const titleProducts = document.querySelector('.products__title');

// Options

const optionsNatural = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: '500px 0px 500px 0px',
};

const optionsForEach = {
  root: null,
  threshold: 0,
  rootMargin: '250px',
};

// single element function

function scrollAnimate(element, animationType, optionsType) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add(`${animationType}`);
      } else {
        element.classList.remove(`${animationType}`);
      }
    });
  }, optionsType);
  observer.observe(element);
}

scrollAnimate(pinkCard, 'fade-in-down', options);
scrollAnimate(beigeCard, 'fade-in-down', options);
scrollAnimate(greenCard, 'fade-in-down', options);
scrollAnimate(labelProducts, 'opacity-transform-pop', optionsNatural);
scrollAnimate(titleProducts, 'opacity-transform-pop', optionsNatural);
