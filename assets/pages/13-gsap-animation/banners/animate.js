(() => {
  const wordCreative = document.querySelector('.banner__title span');
const wordProcess = document.querySelector('.process');
const referenceButton = document.querySelector('.banner__link');

referenceButton.addEventListener('click', () => {
  gsap.to('.process', { duration: 2, x: 50, color: 'blue' })
  gsap.to(wordCreative, { duration: 2, x: 100, color: 'blue' })
})

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })

tl.to('#earth', {
  duration: 2,
  y: -100,
  ease: 'bounce.out'
}).to('#controller', {
  duration: 2,
  y: 100,
  ease: 'bounce.in'
}).to('#pencil', {
  duration: -1,
  x: 10,
  stagger: 0.1,
  ease: 'ease',
})
});

(() => {
  // 타임라인 인스턴스 생성
  const tl = gsap.timeline( { id: 'banner animation' })
  console.log(tl);

  // gsap에 GSDevTools 플러그인 등록
  gsap.registerPlugin(GSDevTools) 

  // GSDevTools 인스턴스 생성
  GSDevTools.create({ animation: tl, id: 'devtools', loop: true, id: 'main' })

  // 이벤트 핸들링
  document.querySelector('.banner').addEventListener('click', () => {
    alert('devtools died!!!!!')
    GSDevTools.getById('devtools').kill()
  })

})();