// 🚀 DOM에 여러 요소 추가
// ----------------------------------------------------------------

// 여러 요소를 DOM에 추가할 때
// 렌더링 횟수가 증가하는 코드 예시
(() => {
  // <li>면이 익으면 불을 끄고 그릇에 옮깁니다.</li>
  // <li>물을 냄비에 붓고 끓입니다 (약 500ml).</li>
  // <li>물이 끓으면 스프를 먼저 넣습니다.</li>
  // <li>취향에 따라 파, 계란, 치즈 등을 추가합니다.</li>
  // <li>취향에 따라 파, 계란, 치즈 등을 추가합니다.</li>

  const recipeList = [
    '면이 익으면 불을 끄고 그릇에 옮깁니다.',
    '물을 냄비에 붓고 끓입니다 (약 500ml).',
    '물이 끓으면 스프를 먼저 넣습니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
  ];

  const listElement = document.querySelector('.ramen-cooking-recipe');

  for (const recipe of recipeList) {
    const item = document.createElement('li');
    item.textContent = recipe;
    listElement.appendChild(item);
  }
});

// 요소(Element) 객체의 유용한 메서드
(() => {
  
  const list = document.querySelector('.ramen-cooking-recipe');

  // prepend()
  // 부모 요소의 첫 번째 자식 요소로 삽입(insertion, inside)
  // const newElement = createElement('li', '텍스트');
  const prependElements = [
    createElement('li', '맛있는 면을 준비합니다.'),
    createElement('li', '라면 봉지를 열고 스프를 꺼냅니다.'),
    createElement('li', '면을 꺼내 끓는 물이 담긴 냄비에 넣습니다.'),  
  ]

  list.prepend(...prependElements);

  const appendElements = [
    createElement('li', '친구들을 불러 라면을 함께 먹습니다.'),
    createElement('li', '친구들에게 설거지를 부탁합니다.'),
  ];

  list.append(...appendElements);

  // append()
  // 부모 요소의 마지막 자식 요소로 삽입

  // appendChild(elementNode) -> 옛날에 나온 거.
  // append(element, element, element, ...) -> 하나가 아닌 여러 개 가능 (textContent 대신 🆗)

  // before()
  const beforeElements = [
    createElement('li', 'before content 1'),
    createElement('li', 'before content 2'),
  ];

  const beforeTargetElement = list.children[4];
  console.log(beforeTargetElement.textContent);
  beforeTargetElement.before(...beforeElements);

  // after()
  const afterElements = [
    createElement('li', 'after content 1'),
    createElement('li', 'after content 2'),
  ];

  const afterTargetElement = list.children[6];
  afterTargetElement.after(...afterElements);


  // insertAdjacentElement()
  const elementInfo = {
    position: 'beforebegin',
    element: createElement('p', '제목 1 앞에 삽입됩니다. 즉, 이전 형제 요소가 됩니다.')
  }
  console.log(elementInfo);

  // insertAdjacentHTML()
  const h2 = document.querySelector('h2');
  h2.insertAdjacentHTML('beforeend', `
    <strong>🍜</strong>
    `)

  /**
   * DOM에 추가될 수 있는 요소 생성 함수
   * @param {String} tagName - HTML 요소 이름
   * @param {String} textContent - 요소에 포함될 내용
   * @returns {Element} 생성된 요소
   */
  function createElement(tagName, textContent) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    return element;
  }
})();