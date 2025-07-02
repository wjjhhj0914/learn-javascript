// 🚀 빠른 반환(Early Return)
// ----------------------------------------------------------------

// 빠른 반환을 사용하지 않은 일반적인 경우
(() => {
  function hasOwnClassName(element) {
    let result;

    if (element.classList.contains('own')) {
      element.classList.add('yes');
      element.setAttribute('data-has-own', 'true');
      element.style.setProperty('--color', 'maroon');
      element.setAttribute('data-top', element.getBoundingClientRect().top + 'px');
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  const body = document.body;
  body.className = 'own';

  const result = hasOwnClassName(document.body);
  console.log(result);
});

// 빠른 반환을 사용하는 경우
(() => {
  function hasOwnClassName(element) {
    // 빠른 반환이 가진 장점
    // 빠른 시점에 return한다.
    // 중첩된 코드를 줄이고, else 구문을 제거한다.

    if (!element.classList.contains('own')) return false;

    // 거짓이면, 이 코드는 실행하지 않아도 되니까 훨씬 더 빨리 반환 가능.
    element.classList.add('yes');
    element.setAttribute('data-has-own', 'true');
    element.style.setProperty('--color', 'maroon');
    element.setAttribute('data-top', element.getBoundingClientRect().top + 'px');

    return true;
  }

  const body = document.body;
  body.className = 'own';

  const result = hasOwnClassName(document.body);
  console.log(result);
});

// 중첩된 코드 줄이기
(() => {
  // 빠른 반환을 사용하지 않은 경우Add commentMore actions
  function getGift1(score) {
    let gift = null;
    
    if (score === 100) {
      gift = '노트북';
    } else if (score > 75) {
      gift = '태블릿';
    } else if (score > 50) {
      gift = '스마트폰';
    }
    return gift;
  }
  
  // 빠른 반환을 사용하는 경우
  function getGift2(score) {
    if (score === 100) return '노트북';
    if (score > 75) return '태블릿';
    if (score > 50) return '스마트폰';
    return null;
  }

  const gift1 = getGift1(55);
  const gift2 = getGift2(100);
  console.log(gift1);
  console.log(gift2);

  // 빠른 반환을 사용하지 않은 경우
  // container.addEventListener('click', (e) => {
  //   const el = e.target.closest('.element');
  //   if (el) {
  //     el.classList.toggle('.toggle');
  //   }
  // });

  // 빠른 반환을 사용하는 경우
  container.addEventListener('click', (e) => {
    const el = e.target.closest('.element');
    if (el) return;
    el.classList.toggle('.toggle');
  });
});

// 실습
// ## 1. 클릭 시, 유효한 입력만 처리
(() => {
  // 사용자가 입력한 값이 없으면 "빠른 반환"을 사용해 경고 메시지를 띄우고,
  // 입력이 있을 때만 결과를 출력합니다.

  const practice1 = document.querySelector('.practice1');
  const userNameInput = document.getElementById('username');
  const output = practice1.querySelector('output');

  practice1.addEventListener('click', (e) => {
    const submitButton = e.target.closest('[type="submit"]');

    if (submitButton) {
      e.preventDefault(); // 브라우저 기본 작동 방지 

      const userNameInputValue = userNameInput.value.trim();

      if (!userNameInputValue) {
        alert('이름을 입력하세요!');
        // userNameInput.click();
        userNameInput.select();
        // userNameInput.focus();
      } else {
        output.value = userNameInputValue;
        userNameInput.value = ''; // 브라우저의 기본 작동을 방지했을 때 input이 비워지는 게 좋으니까
      }
    }
  })
});

// 빠른 반환
(() => {
  const practice1 = document.querySelector('.practice1');
  const userNameInput = document.getElementById('username');
  const output = practice1.querySelector('output');

  practice1.addEventListener('click', (e) => {
    const submitButton = e.target.closest('[type="submit"]');

    if (!submitButton) return; // 빠른 반환 (함수 종료!)

    e.preventDefault();

    const userNameInputValue = userNameInput.value.trim();

    if (!userNameInputValue) {
      alert('이름을 입력하세요!');
      userNameInput.select();
    } else {
      output.value = userNameInputValue;
      userNameInput.value = '';
    }
  })
});

// 실습 2
// ## 2. 점수 별, 등급 출력
(() => {
  // 사용자가 입력한 점수에 따른 등급을 화면에 출력합니다.
  const practice2 = document.querySelector('.practice2');
  const input = practice2.querySelector('input');
  const button = practice2.querySelector('button');
  const output = practice2.querySelector('output');

  button.addEventListener('click', () => {
    const score = Number(input.value);
    const grade = getGrade(score);

    output.textContent = grade;
  })

  getGrade();

  function getGrade(score) {
    let grade;
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 75) {
      grade = 'B';
    } else if (score >= 60) {
      grade = 'C';
    } else {
      grade = 'F';
    }
    return grade;
  }

})();

// ## 2. 점수 별, 등급 출력
(() => {
  // 사용자가 입력한 점수에 따른 등급을 화면에 출력합니다.
  const practice2 = document.querySelector('.practice2');
  const input = practice2.querySelector('input');
  const button = practice2.querySelector('button');
  const output = practice2.querySelector('output');

  button.addEventListener('click', () => {
    const score = Number(input.value);
    const grade = getGrade(score);

    output.textContent = grade;
  })

  getGrade();

  function getGrade(score) {
    if (score >= 90) return 'A'
    if (score >= 75) return 'B'
    if (score >= 60) return 'C'
    return 'F';
  }
})();

