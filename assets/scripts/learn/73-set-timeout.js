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

})();

// Throttling
(() => {

});

// Debouncing
(() => {

});