// 🚀 배열의 reduce() 메서드
// - 누산 : 이미 계산한 결과에 수치를 계속 더하여 계산함. 또는 그 합계.
// -------------------------------------------------------------

// return() 메서드
(() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let initialValue = 0;

  // reduce() 메서드를 사용해 만든 sum() 함수
  const total = numbers.reduce((prevValue, currentValue /*currentIndex,*/ /*array*/) => {
    // prevValue = 0
    // currentValue = 1
    // currentIndex = 0
    // array = numbers
    const nextValue = prevValue + currentValue;
    return nextValue;
  }, initialValue);
  
  console.log(total);
});

// sum() 함수 만들기 : for문 vs. reduce() 메서드
(() => {
  const numbers = [2, 4, 6, 8, 12];

  let totalForValue = sumFor(...numbers);
  console.log(totalForValue);
  
  // for문을 사용해 만든 sum() 함수
  function sumFor(...numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) total += numbers[i];
    return total;
  }

  // reduce() 메서드를 사용해 만든 sum() 함수
  function sumReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
});