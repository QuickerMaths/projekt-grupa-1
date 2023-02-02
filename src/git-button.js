const gitLink = document.querySelector('.git-button__link');
const gitButton = document.querySelector('.git-button');

const creatorsButton = document.querySelector('.creators-button');
const creatorsLink = document.querySelector('.creators-button__link');

const textGit = `Check out our code on GitHub`;
const textCreators = 'Check out who made this masterpiece';

// Intersection observer

function textAppearObserver(element, fun) {
  const options = {
    root: null,
    threshold: 1,
    rootMargin: '0px',
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fun();
      }
    });
  }, options);

  observer.observe(element);
}

textAppearObserver(creatorsLink, textAppearCreators);
textAppearObserver(gitLink, textAppearGit);

// Text appear creators
let textArrayCreators = textCreators.split('');

function textAppearCreators() {
  if (textArrayCreators.length > 0) {
    creatorsLink.innerHTML += textArrayCreators.shift();
  }

  loopTimer = setTimeout('textAppearCreators()', 100);
}

// Text appear git

let textArrayGit = textGit.split('');

function textAppearGit() {
  if (textArrayGit.length > 0) {
    gitLink.innerHTML += textArrayGit.shift();
  }

  loopTimer = setTimeout('textAppearGit()', 150);
}

// Rewind

gitButton.addEventListener('click', () => {
  gitButton.classList.toggle('rewind-git');
});

creatorsButton.addEventListener('click', () => {
  creatorsButton.classList.toggle('rewind-creators');
});

// Onload animation

function animationLoop(element) {
  window.addEventListener('load', () => {
    setInterval(() => {
      element.classList.toggle('git-circle-animation');
    }, 2000);
  });
}

animationLoop(gitButton);
animationLoop(creatorsButton);
