// 🚀 조건 식(Conditional Expression)
// 3항 연산자 (표현)식 (Ternary)
// ----------------------------------------------------------------

const user = {
  name: '조현주',
  age: 23,
  role: '손님',
};

// Ternary
(() => {
  user.role === '관리자'
    ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.')
    : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.');
});

// Conditional Statement vs Ternary
(() => {
  {
    let message = '';

    // 문은 값을 반환하지 않는다.
    if (user.role === '관리자') {
      message = '서비스 관리자이므로, 어떤 일이든 가능합니다.';
    } else {
      message = '서비스 관리자가 아니므로, 접근이 불가합니다..';
    }
  }

  // 조건식 (Conditional Statment)
  let message = user.role === '관리자'
    ? '서비스 관리자이므로, 어떤 일이든 가능합니다.'
    : '서비스 관리자가 아니므로, 접근이 불가합니다..';
  console.log(message);
});

// 조건이 여러 개인 경우, 조건문 vs. 조건식
(() => {

  // 조건문
  {
    let warningMessage = '';

    if (user.age >= 19) {
      warningMessage = '19세 이상이므로 출입이 가능합니다! ✅';

      if (user.role === '관리자') {
        warningMessage += '\n관리자이므로 모든 접근이 가능합니다! 🆗';
      } else {
        warningMessage += '\n관리자가 아니므로 접근이 불가합니다..⚠️';
      }

    } else {
      warningMessage = '19세 미만이므로 출입이 불가합니다..❌';
    }

    // console.log(warningMessage);

    let 조건1 = !true, 조건2 = true, 조건3 = true;

    if (조건1) {
      console.log('조건1이 참입니다.');
    } else if (조건2) {
      console.log('조건2가 참입니다.')
    } else if (조건3) {
      console.log('조건3이 참입니다.')
    } else {
      console.log('조건1, 2, 3 모두 거짓입니다.');
    }
  }

  // 조건식 (조건이 많을 경우, 조건식은 유용하지 않을 수 있다.)
  {
    let 조건1 = !true, 조건2 = true, 조건3 = true;

    조건1
      ? console.log('조건1이 참입니다.')
      : 조건2
        ? console.log('조건2가 참입니다.')
        : 조건3
          ? console.log('조건3이 참입니다.')
          : console.log('조건1, 2, 3 모두 거짓입니다.');
	
    let warningMessage = user.age >= 19
      ? '19세 이상이므로 출입이 가능합니다! ✅'
      : '19세 미만이므로 출입이 불가합니다..❌';
  }
})();