const body = document.body;
const closeButton = document.querySelector('.button');

closeButton.addEventListener('click', () => {
  body.classList.add('close-dialog')
})