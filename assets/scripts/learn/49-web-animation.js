// 🚀 웹 애니메이션
// ----------------------------------------------------------------


(() => {
  const ballElement = document.querySelector('.ball');
  const TRANSITION_CLASSNAME = 'is-transition';

  // mouse click event + className toggling
  // 마우스로 볼 요소를 클릭하면 활성 상태로 변경/이전 상태로 전환
  ballElement.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle(TRANSITION_CLASSNAME);
    // const ball = e.currentTarget;
    // if (ball.classList.contains(TRANSITION_CLASSNAME)) {
    //   ball.classList.remove(TRANSITION_CLASSNAME);
    // } else {
    //   ball.classList.add(TRANSITION_CLASSNAME);
    // }
    
  });
  // ballElement.addEventListener('click', (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME);
  // })

  // mouse enter/leave events
  // ballElement.addEventListener('mouseenter', (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME);
  // })
  // ballElement.addEventListener('mouseleave', (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME);
  // })
})();