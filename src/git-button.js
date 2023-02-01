const circleParagraph = document.querySelector('.git-button__text');
const circle = document.querySelector('.git-button');
const text = `Check out our code on GitHub`;
const textArray = text.split('');

const options = {
  root: null,
  threshold: 1,
  rootMargin: '0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      frameLooper();
    }
  });
}, options);

observer.observe(circleParagraph);

function frameLooper() {
  if (textArray.length > 0) {
    circleParagraph.innerHTML += textArray.shift();
  }

  loopTimer = setTimeout('frameLooper()', 150);
}

circle.addEventListener('click', () => {
  circle.classList.toggle('two');
});

window.addEventListener('load', () => {
  setInterval(() => {
    circle.classList.toggle('git-circle-animation');
  }, 2000);
});
