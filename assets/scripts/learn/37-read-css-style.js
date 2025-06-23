// HTML 문서 구조에 정적으로 추가된 인라인 스타일 속성 값을 읽을 수 있다.

// 정적으로 설정된 인라인 스타일 읽기
(() => {
  const body = document.body;
  const h1 = document.querySelector('h1');

  console.log(body.style.backgroundColor);
  console.log(h1.style.color);
});

// 인라인 스타일이 아닌, 스타일 값 읽기
// 웹 브라우저에 의해 계산된 스타일(computed style) 값 읽기 가능
(() => {
  const body = document.body;
  const h1 = document.querySelector('h1');

  // 인라인 스타일 설정이 없다면?
  // style 속성 객체(CSSStyleDeclaration)로 정보를 읽을 수 없다!
  // console.log(body.style.backgroundColor);
  // console.log(h1.style.color);

  // 전역 객체(window)의 getComputedStyle() 메서드 사용
  const bodyStyles = getComputedStyle(body); // CSSStyleDeclaration 객체를 반환하고, { getPropertyValue } 속성이 있다!
  const bodyMinBlockSize = bodyStyles.getPropertyValue('min-block-size');
  console.log(bodyMinBlockSize);
});

// 브라우저를 통해 요소 스타일 읽기
// 요소.style을 사용해 요소에 쓰기 (DOM update)
(() => {
  // h1 요소 접근 변수에 참조
  const heading1 = document.querySelector('h1');
  console.log(heading1);

  // h1 요소의 글자 크기 스타일 값 읽기
  // --font-size 사용자 정의 속성 값
  const heading1Styles = getComputedStyle(heading1);
  const heading1FontSize = heading1Styles.getPropertyValue('font-size');
  console.log(heading1FontSize); // 40px

  // h1 요소의 글자 크기를 읽은 값에 + 84px 추가한 값 다시 h1 요소에 쓰기
  // h1.style을 사용해 h1 요소의 글자 크기를 132px로 설정
  const fontSizeValue = Number.parseFloat(heading1FontSize, 10);
  const willUpdateFontSize = fontSizeValue + 84;
  heading1.style.setProperty('--font-size', willUpdateFontSize + 'px');
})();