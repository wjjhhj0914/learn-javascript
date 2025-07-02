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
})();

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
})();