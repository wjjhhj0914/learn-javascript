// 🚀 DOM에 요소(노드) 추가
// ----------------------------------------------------------------

// 요소 생성 (create element)
(() => {
  // 동적 생성된 요소들을 마운트할 부모 요소 (내부에 들어간다)
  
  const parentElement = document.querySelector('.parent');
  // <section>
  const sectionElement = document.createElement('section');
  // ✅ 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content');
  // ✅ 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports';
  // ✅ 텍스트 콘텐츠 추가
  sectionElement.textContent = '축구는 역시 영국!'
  // ✅ HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`;
  console.log(sectionElement);

  // DOM에 추가(삽입)
  // ✅ 요소를 부모 요소의 마지막 자식으로 추가 (append child)
  parentElement.appendChild(sectionElement);

  // <table>
  const tableElement = document.createElement('table');
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.classList.add('table-content');
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute('data-category', 'country');
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = '어느 나라에서 오셨나요?'
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<h2>${tableElement.textContent}</h2>`;
  console.log(tableElement);

  parentElement.appendChild(tableElement);
  // DOM에 추가(삽입)
})();