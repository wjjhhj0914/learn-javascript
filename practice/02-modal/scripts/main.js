const body = document.body;
const buttonWrap = document.querySelector('.wrap');
const modalOpenButton = buttonWrap.querySelector('.button');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButton = document.querySelector('.modal-close-button');
const MODAL_IS_OPEN = 'modal-is-open';

// 접근성 4원칙
// 1원칙 : 인식의 용이성
// 2원칙 : 운용의 용이성
// 3원칙 : 이해의 용이성
// 4원칙 : 견고성

modalOpenButton.addEventListener('click', () => {
  body.classList.add(MODAL_IS_OPEN);
})

modalCloseButton.addEventListener('click', () => {
  body.classList.remove(MODAL_IS_OPEN);
})