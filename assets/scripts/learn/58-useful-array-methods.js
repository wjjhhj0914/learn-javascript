// 🚀 유용한 배열 메서드
// -------------------------------------------------------------

(() => {
  // Array의 findIndex() 메서드
  const people = [
    { id: 1, name: '지훈' }, // index: 0
    { id: 2, name: '아름' }, // index: 1
    { id: 3, name: '한영' }, // index: 2
  ];

  // 일치하는(참으로 평가되는) 사람을 찾아서 해당 인덱스 반환
  let foundIndex = people.findIndex((person) => {
    return person.name === '다름'; // 없으면 -1 반환
  })
  console.log(foundIndex); // 1
})();