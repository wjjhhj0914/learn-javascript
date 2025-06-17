// ----------------------------------------------------------------------
// 오래된 방법

// const exorcists = document.getElementById('exorcist-characters');

// const choi = exorcists.querySelector('.master-choi');

// // 문서 객체 속성 읽기
// console.log(choi.className);

// // 문서 객체 속성 수정
// // choi.className = 'active';
// choi.className += ' active';

// ----------------------------------------------------------------------
// 새로운 방법
const exorcists = document.getElementById('exorcist-characters');

const choi = exorcists.querySelector('.master-choi');
console.log(choi.classList);

const villain = exorcists.querySelector('[data-type="villain"]');

// Element.classList -> DOMTokenList { add, remove, toggle, contains, item, replace }
// 오늘날 주로 사용하는 방법
{
  choi.classList.add('active');
  choi.classList.remove('master-choi');
}

{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.
  villain.classList.remove('border');
  villain.className + ' a b c d';
  villain.classList.add('a', 'b', 'c', 'd');
  console.log(villain.classList.contains('border'));
}

// 실습
const add = document.querySelector('.add');
add.classList.add('text-primary');
console.log(add);

const remove = document.querySelector('.remove');
remove.classList.remove('remove');
console.log(remove);

const contains1 = document.querySelector('.contains1');
console.log(contains1.classList.contains('contains1')); // true

const contains2 = document.querySelector('.contains2');
console.log(contains2.classList.contains('text-primary')); // true

const toggle = document.querySelector('.toggle');
console.log(toggle.classList.toggle('text-primary'));
console.log(toggle);