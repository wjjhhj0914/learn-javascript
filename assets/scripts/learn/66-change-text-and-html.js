// 🚀 텍스트 및 HTML 콘텐츠 변경
// ----------------------------------------------------------------

(() => {
  // ✅ 텍스트 콘텐츠 변경
  const element = document.querySelector('h1');
  // element.textContent = '☘ 자바스크립트';

  // ✅ HTML 콘텐츠 변경 (기존 데이터 모두 덮어쓰기)
  // element.innerHTML = `
  // <span>자</span>
  // <span>바</span>
  // <span>스</span>
  // <span>크</span>
  // <span>립</span>
  // <span>트</span>
  // `.trim();

  // 읽어 온 텍스트 콘텐츠를 배열로 변환
  element.innerHTML = element.textContent.split('').reduce((acc, cur) => {
    return acc + `<span>${cur}</span>`
  }, '');

  // ✅ 기존 HTML 콘텐츠에 추가
  // 뒤에 추가
  // element.innerHTML = element.innerHTML + '<em>!</em>';
  // element.innerHTML += '<em>!</em>';
  // 앞에 추가
  // element.innerHTML = '- ' + element.innerHTML;

  // ✅ HTML 콘텐츠 읽기
  // console.log(element.innerHTML);
  
  // mount 요소 내부에 목록 동적 추가
  // const mount = document.querySelector('.mount')
  //   .innerHTML = /* html */
  //   `<ul class="italian-menu">
  //     <li>Pizza</li>
  //     <li>Pasta</li>
  //     <li>Lisotto</li>
  //   </ul>
  //   `
  // console.log(mount.outerHTML);
})();