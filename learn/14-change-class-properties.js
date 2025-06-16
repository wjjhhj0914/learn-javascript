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

// 오늘날 주로 사용하는 방법
{
  choi.classList.add('active');
  choi.classList.remove('master-choi');
}
