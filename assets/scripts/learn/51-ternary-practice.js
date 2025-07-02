(() => {
  // ## 1. 나이 별, 입장료 계산
  // 사용자의 나이에 따라 입장료를 다르게 책정합니다.

  // - 나이가 13세 미만이면 입장료는 2,000원
  // - 13세 이상 65세 미만이면 입장료는 5,000원
  // - 65세 이상이면 입장료는 3,000원

  // 나이에 따라 책정된 입장료를 반환하는 함수 코드를 조건 식을 사용해 작성하세요.

  function getEntranceFeeByAge(age) {
    return age < 13 ? 2000 : age >= 13 && age < 65 ? 5000 : 3000;
  }

  const entranceFees = [
    getEntranceFeeByAge(21),
    getEntranceFeeByAge(10),
    getEntranceFeeByAge(73),
  ];

  console.log(entranceFees); // [5000, 2000, 3000]
});