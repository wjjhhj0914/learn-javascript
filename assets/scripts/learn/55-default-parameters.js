// 🚀 매개변수 기본값 (Default Parameters)
// ----------------------------------------------------------------

(() => {
  function query(selector, context = document) {
    // if (!context) context = document;
    // const element = (context || document).querySelector(selector); // 논리 연산자 활용
    const element = context.querySelector(selector);
    return element;
  }

  function queryAll(selector, context = document) {
    // if (!context) context = document;
    // const nodeList = (context || document).querySelectorAll(selector);
    const nodeList = context.querySelectorAll(selector);
    return nodeList;
  }
  
  const body = query('body');
  const h1 = query('h1');
  const button = query('button', query('header[data-index="2"')); // context에서 해당 selecter를 찾아와라.
  const buttons = queryAll('button', document.getElementById('controller'));

  console.log(body);
  console.log(h1);
  console.log(button);
  console.log(buttons);
});

(() => {
  const calculateTaxes = (income, taxRate = 0.033) => {
    console.log(taxRate);
    income * taxRate;
  };

  let tax = calculateTaxes(10000);
  tax = calculateTaxes(90000, 0.04);
  console.log(tax);
});

// 선택적 매개변수 설정
(() => {
  function createUser(name, age, etcInfo = {}) {
    // 매개변수 구조 분해 할당
    const { bio = '', friends = {} } = etcInfo;
    const user = {};

    user.name = name;
    user.age = age;
    user.bio = bio;
    user.friends = friends;

    return user;
  }

  const lee = createUser('이재홍', 21, { bio: '지역에서 착하기로 소문 난 농사꾼', friends: ['박현준', '김재수'] }); // 순서가 중요하지 않음.
  console.log(lee);

  // 사용자가 아무 값도 전달하지 않은 경우
  const park = createUser('박선홍', 19);
  console.log(park);
});

// 선택적 매개변수 설정 (구조 분해 할당 + 기본 매개변수)
(() => {
  function createUser(name, age, { bio = '', friends = [] } = {}) {
    const user = {};

    user.name = name;
    user.age = age;
    user.bio = bio;
    user.friends = friends;

    return user;
  }

  const park = createUser('박선홍', 19);
  console.log(park);
});

(() => {
  const aLink = document.querySelector('h1 > a');

  // 매개변수를 그대로 사용할 때
  aLink.addEventListener('click', (e) => {
    e.preventDefault();

    // const aElement = e.currentTarget;
    const {currentTarget: aElement } = e;

    // 이벤트가 연결된 대상의 속성 가져오기
    const relValue = aElement.getAttribute('rel');
    console.log(relValue);
    
    // 이벤트가 연결된 대상의 속성 설정하기
    aElement.removeAttribute('rel');
    aElement.setAttribute('lang', 'ko');
    aElement.textContent = '자바스크립트';
  })

  // 매개변수를 구조 분해 할당했을 때
});

(() => {
  const aLink = document.querySelector('h1 > a');

  // 매개변수를 그대로 사용할 때 : 구조 분해 안 하고 쓰기
  aLink.addEventListener('click', handleClick1);

  function handleClick1(e) {
    e.preventDefault();
  
    // const aElement = e.currentTarget;
    const {currentTarget: aElement } = e;
  
    // 이벤트가 연결된 대상의 속성 가져오기
    const relValue = aElement.getAttribute('rel');
    console.log(relValue);
      
    // 이벤트가 연결된 대상의 속성 설정하기
    aElement.removeAttribute('rel');
    aElement.setAttribute('lang', 'ko');
    aElement.textContent = '자바스크립트';
  }

  // 매개변수를 구조 분해 할당했을 때
  // eslint-disable-next-line no-unused-vars
  function handleClick2({ currentTarget: aElement, type }) {
    console.log(type);

    // e.preventDefault();
    // preventDefault(); // Uncaught TypeError: Illegal invocation

    // eslint-disable-next-line no-unused-vars
    const relValue = aElement.getAttribute('rel');

    aElement.removeAttribute('rel');
    aElement.setAttribute('lang', 'ko');
    aElement.textContent = '자바스크립트';
  }
})();

(() => {
  /* global gsap */
  // GSAP API
  // gsap.to('h1 > a', x, y, duration, rotation, opacity); // ❌ 언제 다 기억해
  gsap.set('h1', { opacity: 0 });

  setTimeout(() => {
    gsap.fromTo('h1',
      /* vars options */
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 100,
        opacity: 1,
      }
    )
  })
})();