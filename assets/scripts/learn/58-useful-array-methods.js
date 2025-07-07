// 🚀 유용한 배열 메서드
// -------------------------------------------------------------

// Array의 findIndex() 메서드
(() => {
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
});

// find() 메서드
(() => {
  const people = [
    { id: 1, name: '지훈' }, // index: 0
    { id: 2, name: '아름' }, // index: 1
    { id: 3, name: '한영' }, // index: 2
  ];

  const hanyoung = people.find((person) => person.name === '반영'); // 없으면 undefined 반환
  console.log(hanyoung); // 인덱스 대신 항목(item)을 반환
});

// filter() 메서드
(() => {
  const people = [
    { id: 1, name: '최지훈' }, // index: 0
    { id: 2, name: '박아름' }, // index: 1
    { id: 3, name: '박한영' }, // index: 2
  ];

  // 사람들 중에 성이 박으로 시작하는 사람들(집합, 배열)을 거르고 싶음!
  const parkPeople = people.filter((person) => person.name.startsWith('박'));
  console.log(parkPeople);

  const unknownPersons = people.filter((p) => p.name === '이한준');
  console.log(unknownPersons); // 없으면 빈 배열 반환
});

// map() 메서드
(() => {
  const people = [
    { id: 1, name: '지훈' }, // index: 0
    { id: 2, name: '아름' }, // index: 1
    { id: 3, name: '한영' }, // index: 2
  ];

  // 사람들을 순환해서 모두의 직업을 설정한 새 배열 반환 (원본 보존)
  const newPeople = people.map((person) => {
    // 이전 메모리 주소 상의 객체가 아닌, 새 객체를 생성 (person 객체 복제)
    const newPerson = { ...person };

    // 이전의 사람에 새로운 데이터를 추가해서 반환
    newPerson.name = '김' + newPerson.name;
    newPerson.job = '프론트엔드 개발자';
    return newPerson;
  })
  console.log(newPeople);
  console.log(people);
})();