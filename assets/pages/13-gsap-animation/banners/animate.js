// CSS linear gradient()에 transition을 설정하는 방법
// custom properties + linear-gradient() + transition

[
  { name: '--banner-link-begin', value:'#ff905c' },
  { name: '--banner-link-end', value:'#ed027c' },
].forEach((propertyDefinition) => {
  CSS.registerProperty({
    name: propertyDefinition.name,
    inherits: false,
    syntax: '<color>',
    initialValue: propertyDefinition.value,
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