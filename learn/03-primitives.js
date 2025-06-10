// ------------------------------------------------
// 기본(원시, Primitives) 타입
// ------------------------------------------------
// - 문자열(String) 유형
// - 숫자(Number) 유형
// - 논리형(Boolean) 유형 (참/거짓)
// - null 유형
// - undefined 유형
// - 심볼(Symbol) 유형
// - 아주 큰 정수(BigInt) 유형

// ------------------------------------------------

// ------------------------------------------------
// String

'작은 따옴표로 묶인 텍스트 데이터';
'큰 따옴표 쌍으로 묶인 문자 값';

// Apostrophe (이스케이프 처리)
// It's my birthday today!
// console.log('It\'s my birthday today!');

// '나의 100m 달리기 최고 기록은 12\'26"이야.'
// "나의 100m 달리기 최고 기록은 12'26\"이야."

// String Concatenation (문자열 연결)
1 + 1; // 2
'1' + '1'; // 11

// ------------------------------------------------
// Number

// console.log(10000);
// console.log(10_000);
// console.log(10.9843);
// console.log(0.49393);

// 산술 연산
// 덧셈 (add):       +
// 뺄셈 (subtract):  -
// 곱셈 (multiply):  *
// 나눗셈 (divide):   /
// 나머지 (modulus):  %

// console.log(10000000 + 3999382);
// console.log(10000000 - 3999382);
// console.log(10000000 * 3999382);
// console.log(10000000 / 3999382);
// console.log(10000000 + 3999382);
// console.log(10000000 % 6);

// JavaScript 숫자(정수)의 안전 범위 표현
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// ------------------------------------------------
// Boolean

true; // Boolean
('true'); // String

false; // Boolean
('false'); // String

// ------------------------------------------------
// Undefined

undefined;
console.log(undefined);

// 변수를 정의할 때, 아무것도 하지 않으면 기본값인 undefined가 됨.
