(() => {
  const body = document.body;
  const modal_open_button = document.querySelector('main .modal-open-button');

  const modal_overlay = document.querySelector('.modal-overlay');
  const modal_dialog = modal_overlay.querySelector('.modal-dialog');
  const modal_close_button = modal_overlay.querySelector('.modal-close-button');

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open');
  })

  modal_close_button.addEventListener('click', closeModalDialog);

  function closeModalDialog(e) {
    console.log(e.target);
    body.classList.remove('modal-is-open');
  }

  modal_overlay.addEventListener('click', closeModalDialog);
  modal_dialog.addEventListener('click', (e) => {
    e.stopPropagation(); // IMPORTANT
    console.log('[이벤트 버블링] 이벤트 전파 중지');
  })
});

// 이러한 맥락에서 우리가 위에 짠 코드가 안전하지 않을 수 있음. 즉, 보호되지 않음.
// 그래서 stopPropagation을 사용하지 않고, 다른 걸 사용해 보는 거임.
(() => {
  document.body.addEventListener('click', (e) => {
    console.log(e.target.localName); // 이벤트를 감지함
  })
})();


(() => {
  const body = document.body;
  const modal_open_button = document.querySelector('main .modal-open-button');

  const modal_overlay = document.querySelector('.modal-overlay');
  const modal_dialog = modal_overlay.querySelector('.modal-dialog');
  const modal_close_button = modal_overlay.querySelector('.modal-close-button');

  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open');
  })

  modal_close_button.addEventListener('click', closeModalDialog);

  function closeModalDialog(e) {
    const target = e.target;

    if (!target.closest('.modal-dialog') || target.closest('.modal-close-button')) {
      body.classList.remove('modal-is-open');
    }
  }

  modal_overlay.addEventListener('click', closeModalDialog);
  modal_dialog.addEventListener('click', (e) => {
    // e.stopPropagation(); // IMPORTANT
    console.log('[이벤트 버블링] 이벤트 전파 중지');
  })
})();