// 🚀 논리 연산자 식
// && and || or
// ----------------------------------------------------------------

(() => {
  let isLightGreen = false;
  let noCarsArround = true;
  
  if (isLightGreen || noCarsArround) {
    // 신호등 불빛이 초록 불이거나, 주변에 차가 없다면? 건너세요.
    walk();
  } else {
    // 그렇지 않다면? 멈추세요.
    stop();
  }

  function walk() {
    console.log('건너세요. 🚶‍♀️');
  }

  function stop() {
    console.log('멈추세요. ✋');
  }
});

// && 논리 연산자
// && 연산자는 첫 번째 Falsy 값을 찾는다.
(() => {
  let x, y, z;

  x = 'x'; // Truthy
  y = NaN; // Falsy
  z = Math.random() > 0.5; // true or false (어떤 숫자가 나올지 모르니까)

  console.log(x && z && y); // NaN or false
});

// || 논리 연산자
// || 연산자는 첫 번째 Truthy 값을 찾는다.
(() => {
  const user = {
    name: 'Harry',
    email: 'harry@gmail.com',
    isSigned: false,
  };

  // 조건문
  if (user.isSigned) {
    signOut();
  } else {
    signIn();
  }
  
  // 조건식
  user.isSigned ? signOut() : signIn();
  
  // 논리 연산자 식 (조건 처리 가능)
  user.isSigned || signIn();
  user.isSigned && signOut(); // 로그인 되어 있으니까 로그아웃 하라.

  function signIn() {
    return 'Successfully logged in!';
  }

  function signOut() {
    return 'Logout successful!';
  }
})();

// 1. 실습
// 1. 영화 관람 가능 여부 확인
(() => {
  // 다음 조건을 모두 만족해야 영화관에 입장할 수 있습니다
  // - 18세 이상 관람가
  // - 신분증 필
  // canWatchMovie 함수 코드를 작성하세요. (논리 연산자 활용)
  function canWatchMovie(person) {
    let result;
    // 논리 연산자
    // 논리곱(&&): 첫 번째 거짓으로 평가되는 값을 찾아 반환.
    // 논리합(||): 첫 번째 참으로 평가되는 값을 찾아 반환.

    // result = (person.age >= 18 && person.idCard) && '관람 허용';
    
    person.age >= 18 && person.idCard ? result = '관람 허용' : result = '관람 불가';
    return result;
  }
  
  const results = [
    canWatchMovie({ age: 21, idCard: true }), // 관람 허용 | 관람 허용
    canWatchMovie({ age: 15, idCard: false }), // false | 관람 불가
  ]
  
  console.log(results) // ['관람 허용', '관람 불가']
});

// 2. 실습
// 2. 우산 챙겨야 할 지 결정
(() => {
  function needUmbrella(condition) {
    if (condition.isRaining || condition.forecastRain) {
      return true;
    } else {
      return false;
    }
  }
  
  const results = [
    needUmbrella({ isRaining: false, forecastRain: true }),
    needUmbrella({ isRaining: false, forecastRain: false }),
  ]
  
  console.log(results) // [true, false]
})();