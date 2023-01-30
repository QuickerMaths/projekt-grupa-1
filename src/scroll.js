const logo = document.querySelector('.header__logo');
const headerTitle = document.querySelector('.header__heading');
const buttonHeaderHowMade = document.querySelector('.btn__header--howmade');
const buttonHeaderProducts = document.querySelector('.btn__header--products');

// Products

const labelProducts = document.querySelector('.products__label');
const titleProducts = document.querySelector('.products__title');
const pinkCard = document.querySelector('.products__menu-items--pink');
const beigeCard = document.querySelector('.products__menu-items--beige');
const greenCard = document.querySelector('.products__menu-items--green');

// About

const aboutTitleOne = document.querySelector('.about-box__header1');
const aboutTitleTwo = document.querySelector('.about-box__header2');
const aboutImage = document.querySelector('.about-box__picture');

// Advantages

const advantagesMilk = document.querySelector('.advantages__container--milk');
const advantagesFruit = document.querySelector('.advantages__container--fruit');
const advantagesIce = document.querySelector('.advantages__container--ice');
const advantagesLabelFirst = document.querySelector('.advantages__label.first');
const advantagesLabelSecond = document.querySelector('.advantages__label.second');
const advantagesLabelThird = document.querySelector('.advantages__label.third');

// Contacts

const contactsCardOne = document.querySelector('.contacts__list-item.one');
const contactsCardTwo = document.querySelector('.contacts__list-item.two');
const contactsCardThree = document.querySelector('.contacts__list-item.three');

// Options

const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
};

const optionsProducts = {
  root: null,
  threshold: 0,
  rootMargin: '110px',
};

// single use

function scrollAnimate(element, animationType, optionsType) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add(`${animationType}`);

        observer.unobserve(element);
      }
    });
  }, optionsType);
  observer.observe(element);
}

// single element function multiUse

// function scrollAnimate(element, animationType, optionsType, delayTime) {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           element.classList.add(`${animationType}`);
//         }, delayTime);
//       } else {
//         element.classList.remove(`${animationType}`);
//       }
//     });
//   }, optionsType);
//   observer.observe(element);
// }

// Header

scrollAnimate(logo, 'fade-in-down', options);
scrollAnimate(headerTitle, 'scale', options);
scrollAnimate(buttonHeaderHowMade, 'scale', options);
scrollAnimate(buttonHeaderProducts, 'scale', options);

// Products

scrollAnimate(labelProducts, 'fade-in-top', options);
scrollAnimate(titleProducts, 'scale-two-seconds-delay', options);
scrollAnimate(pinkCard, 'fade-in-down', optionsProducts);
scrollAnimate(beigeCard, 'fade-in-down-second-delay', optionsProducts);
scrollAnimate(greenCard, 'fade-in-down-two-seconds-delay', optionsProducts);

// About

scrollAnimate(aboutTitleOne, 'fade-in-top', options);
scrollAnimate(aboutTitleTwo, 'fade-in-down', options);
scrollAnimate(aboutImage, 'scale-opacity', options);

// Advantages

scrollAnimate(advantagesMilk, 'fade-in-top-200', options);
scrollAnimate(advantagesFruit, 'fade-in-top-200-second-delay', options);
scrollAnimate(advantagesIce, 'fade-in-top-200-two-seconds-delay', options);
scrollAnimate(advantagesLabelFirst, 'scale-two-seconds-delay', options);
scrollAnimate(advantagesLabelSecond, 'scale-three-seconds-delay', options);
scrollAnimate(advantagesLabelThird, 'scale-four-seconds-delay', options);

// Contacts

scrollAnimate(contactsCardOne, 'contact-card-one-animation', options);
scrollAnimate(contactsCardTwo, 'contact-card-two-animation', options);
scrollAnimate(contactsCardThree, 'contact-card-three-animation', options);
