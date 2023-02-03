// Header

const logo = document.querySelector('.header__logo');
const headerTitle = document.querySelector('.header__heading');
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

// Queries
const all = window.matchMedia('(min-width: 320px)');
const mobile = window.matchMedia('(max-width: 767px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width:1199px)');
const desktop = window.matchMedia('(min-width: 1200px)');
// single use

function scrollAnimate(element, animationType, optionsType, mediaQueries) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && mediaQueries.matches) {
        element.classList.add(`${animationType}`);
        observer.unobserve(element);
      }
    });
  }, optionsType);
  observer.observe(element);
}

// Header

scrollAnimate(logo, 'fade-in-down', options, all);

// Products

scrollAnimate(labelProducts, 'fade-in-top', options, all);
scrollAnimate(titleProducts, 'scale-two-seconds-delay', options, all);
scrollAnimate(pinkCard, 'fade-in-down', optionsProducts, all);
scrollAnimate(beigeCard, 'fade-in-down-second-delay', optionsProducts, all);
scrollAnimate(greenCard, 'fade-in-down-two-seconds-delay', optionsProducts, all);

// About

scrollAnimate(aboutTitleOne, 'fade-in-top', options, all);
scrollAnimate(aboutTitleTwo, 'fade-in-down', options, all);
scrollAnimate(aboutImage, 'scale-opacity', options, all);

// Advantages

scrollAnimate(advantagesMilk, 'fade-in-top-200', options, all);
scrollAnimate(advantagesFruit, 'fade-in-top-200-second-delay', options, all);
scrollAnimate(advantagesIce, 'fade-in-top-200-two-seconds-delay', options, all);
scrollAnimate(advantagesLabelFirst, 'scale-two-seconds-delay', options, all);
scrollAnimate(advantagesLabelSecond, 'scale-three-seconds-delay', options, all);
scrollAnimate(advantagesLabelThird, 'scale-four-seconds-delay', options, all);

// Contacts

scrollAnimate(contactsCardOne, 'fade-in-left', options, mobile);
scrollAnimate(contactsCardTwo, 'fade-in-right', options, mobile);
scrollAnimate(contactsCardThree, 'fade-in-left', options, mobile);
scrollAnimate(contactsCardOne, 'contact-card-one-animation', options, tablet);
scrollAnimate(contactsCardThree, 'contact-card-three-animation', options, tablet);
scrollAnimate(contactsCardOne, 'contact-card-one-animation', options, desktop);
scrollAnimate(contactsCardThree, 'contact-card-three-animation', options, desktop);
