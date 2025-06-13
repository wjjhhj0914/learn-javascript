// ------------------------------------------------
// 📌 BOM (브라우저 객체 모델)
// ------------------------------------------------

// 브라우저 윈도우 객체
// console.log(window); // Window{} === html

// 모니터 스크린 객체
// console.log(window.screen); // Screen {}
// console.log(screen); // Screen {} === body 같은 느낌

// 로케이션 객체 (나중에 ⭐️)
// console.log(window.location);
// console.log(location.host);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.href);
// console.log(location.hash);

// 히스토리 객체 (나중에 ⭐️)
// console.log(window.history); // History {}
// console.log(history);

// 도큐멘트 객체 ⭐️
// console.log(window.document); // Document {}
// console.log(document);

// ------------------------------------------------
// 📌 DOM (Document Object Model)
// ------------------------------------------------

console.log(document); // 브라우저 객체 중 도큐멘트 객체
console.log(document.compatMode); // 웹 표준 호환 모드인지 확인
console.log(document.activeElement); // 초점(focus)
