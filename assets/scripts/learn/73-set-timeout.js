// 🚀 타이머 API : setTimeout(callback, delay, ...params)
// ----------------------------------------------------------------

// setTimeout
(() => {
  function callTheAvengers(label, ...heros) {
    console.group(label ?? '');
    // heros.forEach((hero) => console.log(hero));
    heros.forEach((hero) => console.log(hero));
    console.groupEnd();
  }

  // 일반 함수 호출
  // callTheAvengers('Iron Man', 'Captain America', 'Herk');

  // 타이머 API 사용
  const DELAY = 1500;

  // 히어로 배열
  const heroes = ['Iron Man', 'Captain America', 'Herk'];

  // 방법 1.
  const timeoutId1 = setTimeout(() => {
    callTheAvengers(timeoutId1, ...heroes)
  }, DELAY);

  // 방법 2.
  // setTimeout(useCallback, delay, ...params)
  const timeoutId2 = setTimeout(callTheAvengers, DELAY * 2, 'timeoutId2', ...heroes.toReversed());

  // 반환값 (timeoutId)
  const timeoutId3 = setTimeout(callTheAvengers, DELAY * 3, 'timeoutId3', '비전');
  console.log({ timeoutId1, timeoutId2, timeoutId3 });

  // 설정된 타임아웃을 해제 (clearTimeout)
  clearTimeout(timeoutId2);
  console.log('timeoutId2 타이머 해제');
});

// Recursion, 재귀: 자신을 다시 호출
(() => {
  let count = 10;

  countDown();

  function countDown() {
    const timeoutId = setTimeout(() => {
      console.log(count);

      // 재귀 호출을 중단하기 위한 조건 설정
      if (count === 0) {
        console.log('타임아웃 해제');
        clearTimeout(timeoutId);
        return;
      }
      count -= 1;
      // countDown 함수를(자신을) 다시 호출할 수 있다면?
      // console.log(countDown); // 함수 안에서 함수 자신에 접근 가능, 즉 자신을(함수를) 다시 호출하는 것도 가능.
      countDown();
    }, 1000);
  }

  // setTimeout(() => {
  //   countDown()
  // }, 1000);

  // 반복문으로 카운트 다운
  // for (let i = count; i > 0; i--) {
  //   countDown();
  // }

});

// Throttling
// 특정 함수의 실행 빈도를 제한하는 방법으로, 스크롤 이벤트나 창 크기 조절 같은 빈번한 이벤트 처리에 유용함.
(() => {
  function throttle(callback, delay = 400) {
    // 조건 처리를 위한 지역 변수
    let timeout = null;
    
    // 함수 내부에서 다른 함수 반환 (이벤트 리스너로 추가되는 함수)
    return function (...args) {
      // console.log(args); 
      if (!timeout) {
        timeout = setTimeout(() => {
          // throttle 함수 실행 과정에서 전달된 콜백 실행
          callback(...args) // callback(arg1, arg2, ..., argN)

          // timeout 초기화
          timeout = null;
        }, delay)
      }
    }
  }

  // 스크롤(scroll) 이벤트 -----------------------------------------------------------------
  // throttle 함수 사용 전
  // window     - 브라우저 환경에서의 전역 객체
  // global     - Node.js 환경에서의 전역 객체
  // globalThis - 환경(window + global) 통합적인 전역 객체
  
  
  // 스크롤할 때마다 콜백 실행
  let throttleCount = 0;
  function handleScrollNoThrottle() {
    console.log(`%cnoThrottleCount = ${noThrottleCount++}`, 'color: red')
  }
  globalThis.addEventListener('scroll', handleScrollNoThrottle);

  // 쓰로틀 조정으로 0.5초 간격으로 콜백 실행
  let noThrottleCount = 0;
  const handleScrollThrottle = throttle(() => {
    console.log(`%cthrottleCount = ${throttleCount++}`, 'color: blue')
  }, 500);
  globalThis.addEventListener('scroll', handleScrollThrottle);

  function callback(...args) {
    console.log('callback', args);
  }

  // 리사이즈(resize) 이벤트 --------------------------------------------------------------
  globalThis.addEventListener('resize', (...args) => {
    callback(...args)
    console.log(`%c${globalThis.innerWidth}`, 'color: hotpink')
  })
  
  globalThis.addEventListener('resize', throttle(() => {
    console.log('throttle', globalThis.innerWidth)
  }))
})();

// Debouncing
// 연속된 이벤트를 그룹화하여 마지막 이벤트 발생 후, 일정 시간이 지나면 한 번만 처리하는 기법입니다. 
// 검색 입력이나 자동 저장과 같은 기능에 유용합니다.
(() => {
  function debounce(callback, delay = 300) {
    // 디바운싱을 위한 정리 변수
    let cleanup; // undefined

    // 이벤트 리스너
    return function eventListener(...args/* 이벤트 객체 */) {
      // 클린업(정리) - 이벤트 리스너가 호출될 때 마다 정리
      clearTimeout(cleanup);

      // 클린업 = 타임아웃 ID (양의 정수)
      cleanup = setTimeout(() => {
        // 이벤트 객체를 
        // 사용자가 전달한 콜백 함수에 
        // 전개해서 다시 전달
        callback(...args)
      }, delay)
    }
  }

  let debounceInputCount = 0;
  input.addEventListener('input', debounce(() => {
    console.log(`%c디바운싱: 검색 입력 횟수 = ${debounceInputCount++}`, 'padding: 0.4px; background-color: black; color: white;')
  }, 600))

  const input = document.querySelector('input');

  let inputCount = 0;

  input.addEventListener('input', () => {
    console.log('일반: 검색 입력 횟수 = ' + inputCount++);
  })
});