// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜? 객체 타입이니까)

const button = document.querySelector('button.clickable');


// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수 (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기)

button.addEventListener('click', () => {
  document.body.classList.toggle('is-active');
});

// 버튼 요소에 이벤트 리스너(함수) 추가Add commentMore actions
// 콜백 = 다른 함수에 인수로 전달될 함수 (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기)
// button.addEventListener('click', () => {
//   document.body.classList.toggle('is-active')
// })
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기 실행)
button.addEventListener('click', handleBodyToggleClass)


// addEventListener()를 사용해 리스너를 추가하는 것은 x N회 가능

button.addEventListener('click', () => {
  button.classList.toggle('is-active');
})
button.addEventListener('click', handleButtonToggleClass);

// 동기(sync) 실행
handleBodyToggleClass() // 1
handleBodyToggleClass() // 2
handleBodyToggleClass() // 3
handleBodyToggleClass() // 4
handleBodyToggleClass() // 5


// 레거시 이벤트 vs. 모던 이벤트 모델
/*
button.onclick = function () {
  document.body.classList.toggle('is-active'); // 이 값은 메모리에서 사라지고.
}

button.onclick = function () {
  button.classList.toggle('is-active'); // 이 값은 메모리에 남아 있음.
}
  */

// 함수 이중 중첩 예시
// function fn1() {
//   function fn2() {

//   }
// }

// 콜백 예시
fn1(fn2);

function fn1(callback) {
  // [1]
  // 동기 처리
  callback();
  console.log('fn1');
}

function fn2() {
  // [2]
  console.log('fn2');
}

// 이벤트 루프
// Call Stack
function greet() {
  console.log('안녕!')
}

function respond() {
  return setTimeout(() => {
      console.log('헤이!!')
  }, 2000)
}

respond()
greet()

