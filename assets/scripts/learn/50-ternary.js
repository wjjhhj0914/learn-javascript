// 🚀 조건 식(Conditional Expression)
// 3항 연산자 (표현)식 (Ternary)
// ----------------------------------------------------------------

{
  const user = {
    name: '조현주',
    age: 23,
    role: '손님',
  }

  user.role === '관리자'
    ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.')
    : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.');
} 