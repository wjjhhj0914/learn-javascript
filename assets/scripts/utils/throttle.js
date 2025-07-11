/* eslint-disable no-unused-vars */

// throttle 함수 작성!
// -> 함수가 함수를 전달 받고, 함수를 반환한다.
function throttle(callback, delay = 400) {
  let timeout = null;

  // 함수 반환
  return function eventListener(...args) {
    // 발생 빈도 조정
    if (!timeout) {
      timeout = setTimeout(() => {
        // 이벤트 리스너의 매개변수 집합(배열) 전개
        callback(...args)
        // 발생 빈도 재조정을 위한 초기화
        timeout = null
      }, delay)
    }
  }
}

// throttle 함수 (callback, 지연시간) 를 받음.
const eventListener1 = throttle(() => { });
const eventListener2 = throttle(() => { }, 300);

// 스크롤하거나, 리사이즈할 때 쓰로틀 함수 사용됨.
globalThis.addEventListener('scroll', eventListener1);