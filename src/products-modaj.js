const productsModalOpen = document.querySelectorAll('.modal-open');
const productsModalClose = document.querySelector('.modal-products__button-close');
const modalBackdrop = document.querySelector('.backdrop');
const modalProducts = document.querySelector('.modal-products');

productsModalClose.addEventListener('click', () => {
  modalBackdrop.classList.toggle('hidden');
});

productsModalOpen.forEach(el => {
  el.addEventListener('click', () => {
    modalBackdrop.classList.toggle('hidden');
  });
});
