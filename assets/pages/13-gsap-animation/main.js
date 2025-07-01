{

  // Web Animations API
  function playground() {
    const boxElements = document.querySelectorAll('.box')

    const keyframes = [
      { translate: '0 0' },
      { translate: '80vw 0' },
    ]
    
    const options = {
      duration: 1000,
      fill: 'forwards',
    }

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options)
      animation.pause()
      // animation.play()
    })
  }
  
  /* global gsap */

  // GSAP API
  // gsap.to(target, varObject); gsap API
  // gsap.to(selector, varObject); gsap API
  // gsap.to(htmlElement, varObject); gsap API
  // gsap.to(svgElement, varObject); gsap API
  // gsap.to(isObject, varObject); gsap API
  function playgroundGSAP() {
    // Tween Animation

    // to(target, vars)
    // gsap.to('.box', { x: '80vw' });
    // gsap.to(['.box', '.term'], { x: 400 });
    // gsap.to('.box', {
    //   xPercent: 100,
    //   yPercent: 100,
    //   skewY: 40,
    //   duration: 0.4,
    //   rotation: 360,
    //   transformOrigin: 'center bottom',
    // });

    // from(target, vars)
    // gsap.from('.box', { y: -200, rotation: 360, scale: 4 });
    // gsap.from('.box', {
    //   opacity: 0,
    //   xPercent: 50,
    //   yPercent: -200,
    //   rotation: 360,
    //   scale: 4,
    //   repeat: -1,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // });

    // fromTo(target, vars1, vars2)
    // gsap.fromTo('.box', { x: 400, y: -400 }, { x: 10, y: 50 });

    // set(target, vars)
    // 유일하게 애니메이션이 안 되는 set.
    // 특정 위치에 가서 애니메이션 시켜야지! 할 때 사용하는 메서드.
    // gsap.set('.box', { x: 400, y: -200 });

    // targets
    // gsap.to(document.querySelectorAll('.box'), { x: 200 });

    // vars
    // svg 요소
    // JavaScript 객체
    // gsap.to('.box', {
    //   x: '+=200',
    //   y: '-=50',
    //   duration: 3,
    //   backgroundColor: '27c83f',
    //   borderRadius: '100px',
    //   width: 200,
    //   height: 200,
    // })

    // gsap.to('.svgBox', {
    //   attr: {
    //     rx: 40,
    //     fill: 'red',
    //   }
    // })

    // JavaScript 객체
    // const o = {
    //   num: 0,
    //   color: 'yellow',
    // }

    // const output = document.querySelector('output');

    // const renderCount = () => {
    //   output.value = Math.round(o.num);
    // };

    // gsap.to(o, {
    //   num: 100,
    //   color: 'orange',
    //   duration: 1,
    //   repeat: 3, // -1이면 무한 반복
    //   yoyo: true,
    //   onUpdate: renderCount,
    //   onComplete: () => {
    //     console.log('GSAP animation finished');
    //   }
    // })

    // delay
    // repeatDelay
    gsap.to('.box:first-of-type', { rotation: 360, duration: 1, repeat: 1, repeatDelay: 1 });
    gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 });
  }

  setTimeout(() => {
    playground();
    playgroundGSAP();
  }, 500)
}
