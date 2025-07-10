// 🚀 폼 필드 이벤트
// ----------------------------------------------------------------

(() => {
  (() => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');

    // 폼 요소에 연결된 focus 이벤트는, 이벤트 버블링되지 않음.
    form.addEventListener('focus', ({ target }) => {
      console.log('[form] focus', `<${target.localName}>`);
    })

    // 폼 요소에 연결된 focusin 이벤트는, 이벤트 버블링됨.
    form.addEventListener('focusin', ({ target }) => {
      console.log('[form] focusin', `<${target.localName}>`);
      // console.log(target.value);
    })
    form.addEventListener('focusout', ({ target }) => {
      console.log('[form] focusout', `<${target.localName}>`);
    })

    // 인풋 요소에 연결된 change, input, focus 이벤트 감지
    emailInput.addEventListener('change', () => console.log('[input] change event'));
    emailInput.addEventListener('input', () => console.log('[input] input event'));
    emailInput.addEventListener('focus', () => console.log('[input] focus event'));
    emailInput.addEventListener('blur', () => console.log('[input] blur event'));
  });

(() => {
  const form = document.querySelector('.form');

  const [, , lemonCheckbox] = form.querySelectorAll('[type="checkbox"]');
  lemonCheckbox.addEventListener('change', (e) => {
    console.log(e.currentTarget.checked);
  })

  // form.addEventListener('change', ({target}) => {
  //   console.log(target.checked, target.value);
  // })

  // const checkboxes = Array.from(form.elements).filter((element) => {
  //   return element.type === 'checkbox' && element.checked;
  // });
  // console.log(checkboxes);

  // const checkedInputs = [...form.querySelectorAll(':checked')];
  // console.log(checkedInputs);

  // for (const element of form.elements) {
  //   console.log(element.value);
  //   console.log(element.checked);
  //   if (element.value === 'on') element.checked = true;
  // }
})();

});