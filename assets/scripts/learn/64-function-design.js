// 🚀 명확한 목적에 맞는 함수 설계
// ----------------------------------------------------------------

// filter 기능을 가진 함수 구현
(() => {
  function filter(array, callback) {
    // 명령형 코드로 작성해보자
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      if (callback(item, index, array)) {
        // console.log('참인 아이템 = ', item);
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

  const numbers = [2, 9, 21, 34];

  // const result = filter(numbers, (item, index, array) => {
    //   console.log(item);
    //   console.log(index);
    //   console.log(array);
  // });
  const result = filter(numbers, (n) => n > 5 && n < 30);
  console.log(result); // [9, 21]
});

// mapping 기능을 가진 함수 구현
// 내 코드
(() => {
  function map(likeArray, callback) {
    // 명령형 코드
    // 배열의 map() 메서드와 유사한 기능 구현
    // 배열 순환 후, 항목별 변형 후 새 배열로 반환 (결과)
    const result = []; // 결과를 저장할 배열

    for (let i = 0, l = likeArray.length; i < l; i++) {
      // 콜백 함수를 각 요소에 적용하고 반환값을 결과 배열에 추가
      result.push(callback(likeArray[i], i, likeArray));
    }

    return result;
  }

  const numbers = [2, 9, 21, 34];

  const result = map(numbers, (n) => n ** 2);
  console.log(result); // [4, 81, 441, 1156]
});

// 쌤 코드
(() => {
  function map(likeArray, callback) {
    const resultArray = [];

    for (let index = 0; index < likeArray.length; index += 1) {
      const item = likeArray[index];
      const mutatedItem = callback(item, index, likeArray);
      resultArray.push(mutatedItem);
    }
    return resultArray;
  }

  const numbers = [2, 9, 21, 34];

  const result = map(numbers, (n) => n ** 2);
  console.log(result); // [4, 81, 441, 1156]
});

// 적절한 함수 이름과 이해하기 쉬운 주석 설정
// JSDoc 마크업 언어 사용 ----------------------------------------------
(() => {
  /**
   * 함수의 목적
   * 함수의 매개변수
   * 함수의 반환값
  */

  /**
   * 집합에서 특정 항목을 걸러주는 기능
   * 
   * @param {Array} array 걸러내야 할 원본 배열
   * @param {Function} callback 집합을 순환할 때마다 실행되는 콜백 함수
   * @returns {Array} 특정 항목이 걸러진 새 배열
   */
  function filter(array, callback) {
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      if (callback(item, index, array)) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

  /**
   * 집합의 모든 항목을 변형하는 기능
   * 
   * @param {Array} likeArray 변형할 항목을 포함하는 원본 배열
   * @param {Function} callback 집합을 순환할 때마다 실행되는 콜백 함수 
   * @returns {Array} 변형된 모든 항목을 포함하는 새 배열
   */
  function map(likeArray, callback) {
    const resultArray = [];

    for (let index = 0; index < likeArray.length; index += 1) {
      const item = likeArray[index];
      const mutatedItem = callback(item, index, likeArray);
      resultArray.push(mutatedItem);
    }
    return resultArray;
  }

  const filteredArray = filter([2, 3, 4, 5], (n) => n > 3 && n < 30);
  console.log(filteredArray);

  console.log(map(['one', 'two'], (item, index) => `${index} - ${item}`));
});

// 🚀 실습
// ----------------------------------------------------------------

// 1. 대출 가능 도서 필터링 함수
// 도서 목록에서 대출 가능한 책만 걸러내는 함수를 작성합니다.
// - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
// - 함수가 단 하나의 기능만 가지도록 구성
// - JSDoc 주석 추가 (목적, 매개변수, 반환값)
(() => {
  const books = [
    { id: 'book-isbn-3', title: '자바스크립트 입문', isBorrow: true },
    { id: 'book-isbn-7', title: '리액트 마스터', isBorrow: false },
    { id: 'book-isbn-12', title: '프론트엔드 개론', isBorrow: true },
  ];

  /** 도서 목록에서 대출 가능한 도서만 걸러내는 기능
   * 
   * @param {{id: string; title: string; isBorrow: boolean}[]} books 도서 목록(배열) 
   * @returns {{id: string; title: string; isBorrow: boolean}[]} 대출 가능한 도서 목록(배열)
   */

  function filterBorrowBooks(books) {
    return books.filter(({ isBorrow }) => isBorrow);
  }

  const borrowedBooks = filterBorrowBooks(books);
  console.log(borrowedBooks);
})();

// 2. 이메일 주소 목록 추출 함수
// 사용자 목록에서 이메일 주소만 포함하는 목록을 추출하는 함수를 작성하세요.
// - 함수의 목적을 이해하기 쉽게 적절한 이름 작성
// - 함수가 단 하나의 기능만 가지도록 구성
// - JSDoc 주석 추가 (목적, 매개변수, 반환값)
(() => {
  const students = [
    { id: 1, name: '김지훈', email: 'jihun.kim@example.com', isPresent: true },
    { id: 2, name: '박아름', email: 'areum.park@example.com', isPresent: false },
    { id: 3, name: '이민수', email: 'minsu.lee@example.com', isPresent: true },
    { id: 4, name: '최수빈', email: 'subin.choi@example.com', isPresent: true },
    { id: 5, name: '정하늘', email: 'haneul.jung@example.com', isPresent: false },
    { id: 6, name: '윤다현', email: 'dahyun.yoon@example.com', isPresent: true },
    { id: 7, name: '한지민', email: 'jimin.han@example.com', isPresent: false },
    { id: 8, name: '오세영', email: 'seyoung.oh@example.com', isPresent: true },
    { id: 9, name: '서윤호', email: 'yunho.seo@example.com', isPresent: true },
    { id: 10, name: '배예진', email: 'yejin.bae@example.com', isPresent: false },
  ];

  /** 사용자 목록에서 이메일 주소만 추출해 새로운 이메일 목록 생성 기능
   * 
   * @param {{ email: string; id: number; name: string; isPresent: boolean; }[]} userList 사용자 목록 (email 속성 필수 포함)
   * @returns {{ email: string }[]} 이메일 주소 목록
   */

  function extractEmailAddress(userList) {
    return userList.map(({ email }) => email);
  }

  const emailList = extractEmailAddress(students);
  console.log(emailList);
})();