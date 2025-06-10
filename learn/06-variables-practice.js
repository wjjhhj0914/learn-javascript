// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
const HOURS_IN_DAY = 24;
console.log('하루는 24시간', HOURS_IN_DAY);
//     2. "물의 어는 점은 섭씨 0도"
const FREEZING_POINT_CELSIUS = 0;
console.log('물의 어는 점은 섭씨 0도', FREEZING_POINT_CELSIUS);
//     3. "삼각형 내각의 합은 180도"
const TRIANGLE_ANGLE_SUM = 180;
console.log('삼각형 내각의 합은 180도', TRIANGLE_ANGLE_SUM);
//     4. "지구의 중력 가속도는 9.8 m/s²"
const EARTH_GRAVITY = '9.8 m/s²';
console.log('지구의 중력 가속도는 9.8 m/s²', EARTH_GRAVITY);
// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0;
console.log('sum =', sum);
//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
/*
[1]
let num1 = 300;
let num2 = 50;

[2]
let num1, num2;
num1 = 300;
num2 = 50;

[3]
let num1 = 300, num2 = 50;

[4]
let num1 = 300,
    num2 = 50,
    num3 = -90;
 */
let num1 = 300;
let num2 = 50;
//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2;
console.log('sum =', sum);
// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
// 사람 이름
const firstName = 'Hyojung';
console.log('First Name =', firstName);

// 나이
const age = 26;
console.log('Age =', age);

// 오늘의 기온
const tempOfToday = 27;

// 장바구니 상품 갯수
let cartItemCount = 3;

// 집 주소
const address = '서울시';

// 현재 시간
let currentTime = '2:22';

// 로그인 상태
let isLoggedIn = true;

// 피자 가격
let priceOfPizza = 30_000;

// 학생 수
let studentCount = 43;
