// 🚀 향상된 객체 리터럴 (Enhanced Object Literals)
// ----------------------------------------------------------------

// 속성 할당 단축
(() => {
  const nickname = '야무';
  const phone = 'Gallaxy';

  // nickname과 phone 변수 값을 객체의 속성 값으로 할당하고자 한다.
  const instructor = { nickname, phone };

  console.log(instructor);
});

// 메서드 단축
(() => {
  const instructor = {
    nickname: '야무',
    phone: 'Gallaxy',
    location: 'Seoul',
    // introduction: function() {
    introduction() {
      let { nickname: name, phone, location } = this;
      console.log(name, phone, location);
    }
  }
  instructor.introduction();
});

// 계산된 속성 이름
(() => {
  let methodName = 'calculateMethod'; // 변수를 속성 키로 사용할 수도 있음
  let property = 'currentTime';

  const o = {
    [property]: '00:09:21',
    [methodName]() { // 그럼 이런 표기법도 가능
      console.log(`${methodName} time =`, this.currentTime);
    }
  }
  o[methodName]();
  console.log(o.currentTime);
  console.log(o[property]);
  
  // o.record();
  // o.record
  // console.log(o['record']()); // 이렇게도 실행 가능
})();