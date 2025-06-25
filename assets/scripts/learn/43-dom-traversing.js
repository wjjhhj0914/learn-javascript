{
  // DOM 탐색
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

