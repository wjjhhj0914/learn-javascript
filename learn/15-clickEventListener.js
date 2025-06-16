const clickableButton = document.querySelector('.clickable');
const body = document.body;

clickableButton.addEventListener('click', () => {
  body.classList.toggle('is-active');
  clickableButton.classList.toggle('is-active');

  // addEventListener()에 전달된 함수(값), 즉 이벤트 리스너는 event 객체를 매개변수로 전달 받게 되어 있음.
  // Event 객체에는 { x, y 좌표, target, type, pointerType, ... } 을 제공함.
})

