// 실습 1 (조건식 : 조건이 적으니까)
// ## 1. 나이 별, 입장료 계산
(() => {
  // 사용자의 나이에 따라 입장료를 다르게 책정합니다.

  // - 나이가 13세 미만이면 입장료는 2,000원
  // - 13세 이상 65세 미만이면 입장료는 5,000원
  // - 65세 이상이면 입장료는 3,000원

  // 나이에 따라 책정된 입장료를 반환하는 함수 코드를 조건 식을 사용해 작성하세요.

  function getEntranceFeeByAge(age) {
    return age < 13 ? 2000 : age >= 13 && age < 65 ? 5000 : 3000;
  }

  const entranceFees1 = [
    getEntranceFeeByAge(21),
    getEntranceFeeByAge(10),
    getEntranceFeeByAge(73),
  ];

  console.log(entranceFees1); // [5000, 2000, 3000]

  function getEntranceFeeByAgeStatement(age) {
    let price = 0;

    if (age < 13) {
      price = 3000;
    } else if (age >= 13 && age < 65) {
      price = 5000;
    } else {
      price = 3000;
    }
    return price;
  }

  const entranceFees2 = [
    getEntranceFeeByAgeStatement(21),
    getEntranceFeeByAgeStatement(10),
    getEntranceFeeByAgeStatement(73),
  ];

  console.log(entranceFees1); // [5000, 2000, 3000]
});

// 실습 2 (조건문 : 조건이 많으니까)
// ## 2. 점수 별, 등급 구분
(() => {
  // 학생의 점수를 기준으로 등급을 구분합니다.
  // 점수에 따라 등급을 판별해 반환하는 함수 코드를 조건 문을 사용해 작성하세요.

  function getGradeByScore(score) {
    let grade;

    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    return grade;
  }
  
  const grades = [
    getGradeByScore(75),
    getGradeByScore(82),
    getGradeByScore(96),
    getGradeByScore(50),
  ] 
  
  console.log(grades) // ['C', 'B', 'A', 'F']
})();