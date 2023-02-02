const productsModalOpen = document.querySelector('.modal-open');
const productsModalClose = document.querySelector('.modal__button-close');
const modalProducts = document.querySelector('.backdrop');

productsModalClose.addEventListener('click', () => {
  modalProducts.classList.toggle('hidden');
});

productsModalOpen.addEventListener('click', () => {
  modalProducts.classList.toggle('hidden');
});
