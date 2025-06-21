(() => {

  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해보이지만, 배열 객체는 아니다.
  const navLinks = document.querySelectorAll('nav a');
  // console.log(navLinks.forEach)
  
  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(navLinks)); // NodeList (false)
  
  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(navLinks);
  console.log(Array.isArray(navLinksArray)); // Array (true)
  console.dir(navLinksArray);

  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)

})();

// JavaScript 객체
// - Object
// - Array
// - Function
// - Map
// - Set
// ...

// Web Browser (JavaScript 실행 환경)
// - window 객체
// - document 객체
// - screen 객체
// - location 객체
// - history 객체
// - NodeList 객체
// - HTMLCollection 객체

// Node.js 런타임 (JavaScript 실행 환경)
// - Global