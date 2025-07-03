// 🚀 구조 분해 할당
// 구조를 분해해서 지역 변수로 할당
// ----------------------------------------------------------------

// 객체 구조 분해 할당
(() => {
  const jeemin = {
    name: '박지민',
    age: 27,
  }

  // let name = jeemin.name;
  // let age = jeemin.age;

  // 구조 분해 할당 구문 (2015+)
  let { name } = jeemin; // jeemin은 name과 age 키를 가지고 있는 객체니까

  console.log(name); // 박지민
});

// 배열 구조 분해 할당
(() => {
  const names = ['박현아', '최하송', '김주성'];

  console.log(names);
  // let firstName = names.at(0);
  // let secondName = names.at(1);
  // let lastName = names.at(2);

  // 배열 구조 분해 할당 구문
  // let [firstName, secondName, lastName] = names; // [0, 1, 2]
  let [, secondName] = names;
  // let secondName = names.at(1);

  console.log({ secondName });
});

// 속성 할당 변수 이름 설정
(() => {
  const jeemin = {
    name: '박지민',
    age: 27,
  }

  // 객체의 키 값 이름으로 구조 분해를 먼저한 후,
  // 사용자가 원하는 지역 변수 이름으로 할당하는 것이 가능!
  let { age: myAge, name: nickName } = jeemin;

  // let myAge = age;
  // let nickName = name;

  console.log(nickName, myAge);
});

// 함수의 인수를 구조 분해 할당
(() => {
  function getSectionTemplate(section) {
    // 객체 구조 분해 할당 구문 사용
    let { headline, description } = section;
    
    return `
      <section>
        <h2>${headline}</h2>
        <p>${description}</p>
      </section>
    `;
  }

  const sectionInfo = {
    headline: '구조 분해 할당 (객체형)',
    description: `
    배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로,
    구조를 분해해 지역 변수로 할당할 수 있다.
    `,
  }

  const sectionTemplate = getSectionTemplate(sectionInfo); /* { headline, description } */
  console.log(sectionTemplate);
});

// 함수 매개변수 구조 분해 할당
(() => {
  // 함수의 몸체(Function Body) : return 만나기 전까지를 함수의 몸체라고 부름.
  // 매개변수 영역에서 구조 분해 할당이 가능함.
  function getSectionTemplate({ headline, description }) {
    // let { headline, description } = section;
    
    return `
      <section>
        <h2>${headline}</h2>
        <p>${description}</p>
      </section>
    `;
  }

  const sectionInfo = {
    headline: '매개변수 영역 구조 분해 할당',
    description: `
    매개변수 영역에서 구조 분해 할당이 가능하니까
    함수의 몸체 내에서 구조 분해할 필요가 없다.
    `,
  }

  const sectionTemplate = getSectionTemplate(sectionInfo); /* { headline, description } */
  console.log(sectionTemplate);
});

// 배열 타입 함수 매개변수 구조 분해 할당
(() => {
  function rgbToHex(rgb) {
    // 배열 구조 분해 할당
    let [redValue, greenValue, blueValue] = rgb; // [0, 1, 2]

    // let 변수는 재할당 가능 (mutation)
    redValue = redValue.toString(16);
    greenValue = greenValue.toString(16);
    blueValue = blueValue.toString(16);
    
    return `#${redValue}${greenValue}${blueValue}`;
  }

  const colourHexCode = rgbToHex([255, 120, 120]);
  console.log(colourHexCode);
})();

// 배열 타입 함수 매개변수 영역에서 바로 구조 분해 할당
(() => {
  function rgbToHex([redValue, greenValue, blueValue]) {
    redValue = redValue.toString(16);
    greenValue = greenValue.toString(16);
    blueValue = blueValue.toString(16);
    
    return `#${redValue}${greenValue}${blueValue}`;
  }

  const colourHexCode = rgbToHex([255, 120, 120]);
  console.log(colourHexCode);
})();