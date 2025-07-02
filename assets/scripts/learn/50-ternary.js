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
})();