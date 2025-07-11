// 🚀 타이머 API : setTimeout(callback, delay, ...params)
// ----------------------------------------------------------------

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
})();