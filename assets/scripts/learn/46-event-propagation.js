// 🚀 이벤트 전파 (Event Propagation)
// ----------------------------------------------------------------

// 이벤트 버블링 단계 (기본)
(() => {
  const boxes = document.querySelectorAll('.box');

  for (const box of boxes) {
    box.addEventListener('click', (e) => {
      // 이벤트 버블링 단계
      const element = e.currentTarget;
      console.groupCollapsed(element.className.replace('box', '').trim());
      console.log('이벤트 단계 : ', e.eventPhase);
      console.log('이벤트 대상의 클래스 이름 : ', element.className);
      console.groupEnd();
    }, false)
  }
});

// 이벤트 캡쳐링 단계
(() => {
  const boxes = document.querySelectorAll('.box');

  for (const box of boxes) {
    // 이벤트 캡쳐링 단계
    box.addEventListener('click', (e) => {
      const element = e.currentTarget;
      console.log('이벤트 캡쳐링 BEGIN --------------------------------');
      console.groupCollapsed(element.className.replace('box', '').trim());
      console.log('이벤트 단계 : ', e.eventPhase);
      console.log('이벤트 대상의 클래스 이름 : ', element.className);
      console.groupEnd();
    }, true);
  }
});

// 이벤트 트리거 시퀀스
(() => {
  const box1 = document.querySelector('.box');
  box1.addEventListener('click', () => {
    console.log(1);
  })
});

// 이벤트 전파 중지(Event Propagation)
// 이벤트 캡쳐링 단계
(() => {
  const boxes = document.querySelectorAll('.box')
  let useCapture = false

  // box 1
  boxes.item(0).addEventListener('click', handleLog, { capture: useCapture })

  // box 3
  boxes.item(2).addEventListener('click', handleLog, { capture: useCapture })
  
  // box 2
  boxes.item(1).addEventListener('click', (e) => {
    // 이벤트 전파 중지
    e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, { capture: useCapture })


  function handleLog(e) {
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())
  }
  /**
   * // 이벤트 전파 중지(Stop Propagation)
;(() => {

  const boxes = document.querySelectorAll('.box')
  // let useCapture = true // true = capturing
  let useCapture = false // false = bubbling

  // body
  document.body.addEventListener('click', (e) => {
    const element = e.currentTarget
    console.log(element.localName)
  }, useCapture)

  // box 1
  boxes.item(0).addEventListener('click', (e) => {
    e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)
  
  // box 2
  boxes.item(1).addEventListener('click', (e) => {
    // e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)

  // box 3
  boxes.item(2).addEventListener('click', (e) => {
    // e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)

})()
   */
});

// 즉시 후속 이벤트 전파 중지(Event Immediate Propagation)
(() => {
  const boxes = document.querySelectorAll('.box')
  let useCapture = false

  // box 1
  boxes.item(0).addEventListener('click', handleLog, { capture: useCapture })

  // box 3
  boxes.item(2).addEventListener('click', handleLog, { capture: useCapture })
  
  // box 2
  boxes.item(1).addEventListener('click', (e) => {
    // 이벤트 전파 중지
    e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, { capture: useCapture })


  function handleLog(e) {
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())
  }
})();