// 🚀 객체 속성 순환
// -------------------------------------------------------------

// for...in 문 (성능상 객체에서만 사용 권장)
(() => {
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  };

  for (const key in cssMap) {
    let value = cssMap[key];
    console.log(`key = ${key}`);
    console.log(`value = ${value}`);
  }
});

// for...of 문 (Object.entries)
(() => {
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  };

  // 객체 -> 배열 변경
  // console.log(Array.from(cssMap)); ❌ 유사 배열이 아니기 때문에 불가.
  // console.log(Object.entries(cssMap)); ✅ [key, value]로 바꿔줌.

  // Ojbect.entries를 사용하면 객체에서도 for...of 사용할 수 있음.
  // for (const keyValue of Object.entries(cssMap)) {
  //   console.log(keyValue[0]); // key
  //   console.log(keyValue[1]); // value
  // }

  // 구조 분해 할당도 사용해볼까?
  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key);
    console.log(value);
  }

  // 객체는 for...of를 쓸 수 없다.
  // for (const key of cssMap) {
  //   console.log(key);
  // }
})();