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

// 배열 -> 누산된 객체
(() => {
  const fruits = [
    '바나나',
    '애플',
    '오렌지',
    '애플',
    '바나나',
    '워터 멜론',
    '오렌지',
    '워터 멜론',
    '바나나',
    '참외',
  ];

  const fruitsCount = fruits.reduce((object, fruit) => {
    if (!object[fruit]) {
      object[fruit] = 1;
    } else {
      object[fruit] += 1;
    }
    return object;
  }, {});

  console.log(fruitsCount);
});

// 중첩된 배열 -> 평탄화된 배열
// (() => {
//   const nestedArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
//   ]

//   // const flattedArray = nestedArray.reduce((flattedArray, currentArray) => {
//   //   flattedArray.push(...currentArray);
//   //   return flattedArray;
//   // }, []);

//   const flattedArray = nextValue.reduce((result, current) => [...result, ...current], []);
//   console.log(flattedArray);
  
//   const flattedArray = nestedArray.flat();
//   console.log(flattedArray);
// });

// 배열 -> 템플릿 스트링
(() => {
  const list = [
    { content: '하나' },
    { content: '둘' },
    { content: '셋' },
    { content: '넷' },
    { content: '다섯' },
  ];

  // 배열의 메서드를 사용해 아래와 같은 템플릿 문자열을 생성하려면?
  list.forEach((word) => {
    console.log(`<li>${word.content}</li>`);
  })

  // <li>하나</li><li>둘</li><li>셋</li><li>넷</li><li>다섯</li>

  // for문 구현
  {
    let templateString = '';
    for (let i = 0, l = list.length; i < l; i++) {
      const { content } = list[i];
      templateString += `<li>${content}</li>`;
    }
    console.log(templateString);
  }

  // map() 구현
  // .map().join -> string
  const templateStringArray = list.map(({ content }) => {
    return `<li>${content}</li>`;
  }).join('');
  console.log(templateStringArray);

  // reduce() 구현
  const templateString = list.reduce((template, { content }) => `${template}<li>${content}</li>`, '');
  console.log(templateString);
})();