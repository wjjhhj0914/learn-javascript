const people = [
  '세종대왕',
  '이순신',
  '김구',
  '유관순',
  '장영실',
  '신사임당',
];

console.log(people);

// 1.
// console.log(people.indexOf('이순신'));

// 2.
// people.unshift('정약용', '지석영');
// people.splice(0, 0, "정약용", "지석영");
// console.log(people);

// 3.
// people.push('김유신', '을지문덕');
// people.splice(people.length, 0, '김유신', '을지문덕');
// console.log(people);

// 4.
// people.splice(0, 2);
// console.log(people);

// 5.
people.splice(people.length - 2, 2);
console.log(people);

// 6. people을 복제한 새로운 배열 생성, people에서 '이순신', '김구'로 구성된 새로운 집합 생성
const newPeople = people.slice(1, 3);
console.log(newPeople);

