// 1. 빈 객체를 정의합니다.
const emptyObj = {};
console.log(emptyObj);

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
const gamte = {
  animalType: 'cat',
  age: 1,
  species: 'Korean tabby',
};

console.log(gamte.animalType);
console.log(gamte.species);

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
const myCats = {
  'first cat': '감태',
  'second cat': '미역',
};

console.log(myCats['first cat']);
console.log(myCats['second cat']);

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
const myLaptop = {
  name: 'MacBook Pro',
  serialNum: 'M12343434',
};

myLaptop.name = 'Samsung Laptop';
myLaptop.price = 10_000;

console.log(myLaptop);

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
const book = {
  name: '당신도 초자연적이 될 수 있다',
  price: '90000',
};

book['name'] = '노르웨이의 숲';
book['writer'] = '장효정';

console.log(book);

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
const me = {
  name: '장효정',
  age: 26,
  study: function () {
    return '자바스크립트 공부 중!';
  },
};

console.log(me.study());

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
const teacher = {
  name: '야무쌤',
  teach: function (subject) {
    return subject + '를 가르칩니다.';
  },
};

console.log(teacher.teach('JavaScript'));

// 8. 객체의 속성 중 하나를 선택해, 삭제해보세요.
delete teacher['name'];
console.log(teacher);
teacher.name = '슬비쌤';
console.log(teacher);
