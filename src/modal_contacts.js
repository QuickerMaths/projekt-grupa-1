const openButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.modal-contacts__button');
const modal = document.querySelector('.overlay-contacts');

openButton.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
