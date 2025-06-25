(() => {
  /* DOM 아래 탐색 */

  const starWars = document.getElementById('star-wars');
  console.log(starWars);
  
  // querySelector()
  const oneI = starWars.querySelector('i');
  console.log(oneI);


  // querySelectorAll()
  const characters = starWars.querySelectorAll('.character'); // NodeList
  console.log(characters);

  // children (HTMLCollection) <- 직계 자식을 찾고 싶을 때
  const children = starWars.children; // HTMLCollection
  console.log('자식들: ', children);

  // 배열화 (배열 객체로 변경)
  console.log(Array.from(characters), Array.isArray(Array.from(characters)));
  console.log(Array.from(children), Array.isArray(Array.from(children)));
  

  // firstChild
  console.log('첫 번째 노드 자식 : ', starWars.firstChild.nodeType); // text element node
  // fisrtElementChild
  console.log('첫 번째 요소 노드 자식', starWars.firstElementChild);
  
  // lastChild
  // lastElementChild
  console.log('마지막 요소 노드 자식', starWars.lastElementChild);
}
);

(() => {
  /* 위 방향으로 DOM 탐색(Traversing) */

  const das = document.querySelector('#star-wars em > span');
  
  // parentNode
  console.log(das.parentNode);
  // parentElement -> parentNode와 비슷하지만, 명시적으로 부모의 요소를 찾을 때.
  console.log(das.parentElement); // <em>

  // 다스의 부모의 부모
  console.log(das.parentElement.parentElement); // .character

  // 다스의 부모의 부모의 부모
  console.log(das.parentElement.parentElement.parentElement); // #star-wars

  // 선택자와 일치하는 가장 가까운 부모 찾기
  console.log(das.closest('article')); // <article>
  // 선택자와 일치하는 가장 가까운 부모 찾기 (단, 나도 포함!)
  console.log(das.closest('span.me')); // <span class="me">다스</span>
});

// 옆 방향으로 DOM 탐색
(() => {
  const faqList = document.querySelector('.faq-list');
  const firstElementChild = faqList.firstElementChild;
  const lastElementChild = faqList.lastElementChild;

  // previousSibling (All Node)
  console.log(firstElementChild.previousSibling);

  // ⭐️ previousElementSibling (Element Node)
  console.log(firstElementChild.previousElementSibling); // null
  // 현재 요소의 이전 형제 (앞)
  console.log(lastElementChild.previousElementSibling.textContent); // 계정 및 개인정보
  // 현재 요소의 이전 형제의 이전 형제 (앞의 앞)
  console.log(lastElementChild.previousElementSibling.previousElementSibling.dataset.index); // 2

  // nextSibling (All Node)
  // console.log(firstElementChild.nextSibling); // #text (Text Node)
  // nextElementSibling (Element Node)
  console.log(firstElementChild.nextElementSibling.dataset.index); // 1
  console.log(firstElementChild.nextElementSibling.nextElementSibling.dataset.index); // 2

  // parentElement + children + index 조합
  const firstLink = faqList.querySelector('a[href^="/faq/"]');
  const parent = firstLink.closest('ul.faq-list');

  console.log(parent.children.item(3).firstElementChild);
  console.log(parent.children.item(3).lastElementChild);
});