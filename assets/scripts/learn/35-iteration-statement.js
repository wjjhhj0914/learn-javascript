// // 1. 1부터 100까지의 합 구하기

(() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  let i = 0, l = numbers.length
  
  for (; i < l;) {
    const number = numbers[i];
    console.log(number);
    i = i + 1;
  }
});

(() => {
  const numbers = [10, 15, 23, 8, 4, 31, 42];

  let i = 0, l = numbers.length

  for (; i < l;) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
    i = i + 1;
  }
});

(() => {
  const numbers = [10, 15, 23, 8, 4, 31, 42];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number);
    }
  })
});

(() => {
  const word = 'javascript';

  let i = word.length - 1

  for (; i >= 0;) {
    console.log(word[i]);
    i = i - 1;
  }
});

(() => {
  const word = 'javascript';
  let i = word.length - 1;

  while (i >= 0) {
    console.log(word[i]);
    i--;
  }
});

(() => {
  let i = 0;

  while (i <= 50) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
    // while문은 조건문만 보고 스스로 언제 멈출지 판단해야 하니까, 변수 변화(i++)가 꼭 필요함!!!

    /**
     * 1. 초기값
     * 2. 조건
     * 3. 블록 실행
     * 4. 증감 (직접 써야 함!)
     */
  }
});

(() => {
  const nums = [3, 6, 9, 12, 15];
  let i = 0;

  while (i < nums.length) {
    console.log(nums[i]);
    i++;
  }
});

(() => {
  const numbers = [12, 25, 30, 42, 48, 50, 60];
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
      i === 42; break;
    }
  }
});