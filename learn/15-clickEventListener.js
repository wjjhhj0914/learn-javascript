const clickableButton = document.querySelector('.clickable');
const body = document.body;

clickableButton.addEventListener('click', () => {
  body.classList.add('is-active');
  clickableButton.classList.add('is-active');
})

