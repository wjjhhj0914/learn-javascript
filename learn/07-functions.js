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
