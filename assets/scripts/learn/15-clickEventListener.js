const clickableButton = document.querySelector('.clickable');
const body = document.body;

clickableButton.addEventListener('click', () => {
  body.classList.toggle('is-active');
  clickableButton.classList.toggle('is-active');

  // addEventListener()에 전달된 함수(값), 즉 이벤트 리스너는 event 객체를 매개변수로 전달 받게 되어 있음.
  // Event 객체에는 { x, y 좌표, target, type, pointerType, ... } 을 제공함.
})

// const myButton = document.querySelector('.click-button');
// myButton.addEventListener('click', () => {
//   console.log('Button clicked!!!');
//   myButton.classList.toggle('another-class');
// })

/**
 * const button = document.querySelector('button')

function alertLog(e) {
  console.log('clicked button')
  button.classList.toggle('clicked')

  // 명시적 반환
  // return { name: '나는 반환값이다.' }
  return () => {
    console.log('나는 함수가 반환한 함수이다!')
  }

  // 암묵적으로 반환
  // return undefined
}

// alertLog
const result = alertLog()
console.log(result) // undefined


// 함수 이름만 참조
// button.addEventListener('click', alertLog)

// 함수 이름으로 호출(실행)
// 이벤트 연결 (binding events)
button.addEventListener('click', alertLog())
 */