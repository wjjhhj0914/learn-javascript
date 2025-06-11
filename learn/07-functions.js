console.log('함수(Function)');

// 함수란?
// 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

// 처리해야 할 일들을 힘수로 만든다.
// drawWater 함수 [
//    1. 빈 양동이를 가져오기.
//    2. 양동이를 들고 우물로 이동하기.
//    3. 우물에서 물을 길어오기.
//    4. 양동이를 들고 집으로 귀가하기.
// ]

// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)

// 나만의 라면 끓이기 함수 만들기

// 1. 물 400ml를 냄비에 붓는다.
// 2. 물을 담은 냄비를 불 위에 올린다.
// 3. 물이 끓을 때까지 기다린다.
// 4. 물이 끓으면, 스프와 채소 건더기를 넣는다.
// 5. 면을 넣는다.
// 6. 2분 후에 불을 끈다.
// 7. 라면을 맛있게 먹는다.

// -------------------------------------------------

// 함수 선언 (Function Declaration) 구문
function drawWater() {
  console.groupCollapsed('물 길러가자!!');
  console.log('1. 빈 양동이를 가져오기.');
  console.log('2. 양동이를 들고 우물로 이동하기.');
  console.log('3. 우물에서 물을 길어오기.');
  console.log('4. 양동이를 들고 집으로 귀가하기.');
  console.groupEnd();
}

// 함수 사용 (Call Function)
// 재사용성 (Reusability)
drawWater();

// 동사 형태
// 함수를 "실행한다" 의미 - 약속된 규칙
// 함수기능()

// 함수 이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름이다!!
// playMusic()
// stopMusic()
// pauseMusic()

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function conti nue() {}
// function cla---ss() {}
// function for() {}

// ---------------------------------------------------
// 함수 매개변수 (Function Parameters)
// 전역 변수 & 지역 변수

// 함수 밖에 있는 [전역] 변수 (Global scope variables)
// 코드 실행 범위 어디서나 접근이 가능한 변수
let year = 4027;

// 함수 선언
function writeDiary(year, month, day, location) {
  // let location = '롯데 타워';
  // 함수 이름 옆 () 안에 선언된 변수를 특별히 매개변수라 부른다.
  // console.log(연도, 월, 일);
  // 함수 내부에 선언된 변수
  // 함수 안에서 사용
  // 지역 변수 (Local scope variables)

  // // 연도(year)
  // let year1 = 2025;
  // // 월(month)
  // let month1 = 6;
  // // 일(day)
  // let day1 = 10;

  console.log(
    year +
      '년 ' +
      month +
      '월 ' +
      day +
      '일에 ' +
      location +
      '에 다녀온 일기를 쓴다.'
  );
}

// 함수 호출(실행)
// 일기 쓰기 (연도, 월, 일, 장소)
writeDiary(2025, 6, 12, '서울 N 타워');
writeDiary(2025, 6, 30, '부산 광안리 해수욕장');

// ----------------------------------------------------
// 함수의 반환문(return)

// 함수는 실행될 수 있다.
// 함수는 실행되면 결과 값을 반환한다.
// 처리(계산)된 값을 반환할 때 return 키워드를 사용한다.

function subtract(num1, num2) {
  // num1 = 10
  // num2 = 4
  // 처리(계산)
  // 지역 변수 선언 계산된 값 할당
  let sum = num1 - num2;

  // 계산된 결과값을 반환
  return sum;
}

console.log(subtract(10, 4));
// ------------------------------------------
