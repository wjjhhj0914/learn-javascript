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

