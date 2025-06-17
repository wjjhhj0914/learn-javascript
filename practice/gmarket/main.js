// 실습

// 1. 버튼에 이벤트 리스너를 추가합니다.
const body = document.body;
const siteContainer = document.querySelector('.site-container');
const toggleOffsiteButton = siteContainer.querySelector('button');
const OFFSITE_OPEN_CLASSNAME = 'offsite-is-open';

toggleOffsiteButton.addEventListener('click', () => {
  // 2. 버튼을 클릭하면 화면을 오른쪽으로 밀어줍니다.
  // 3. 버튼을 다시 클릭하면 화면을 왼쪽으로 밀어 넣습니다.
  // body.classList.toggle('offsite-is-open');
  if (!body.classList.contains(OFFSITE_OPEN_CLASSNAME)) {
    body.classList.add(OFFSITE_OPEN_CLASSNAME);
  } else {
    body.classList.remove(OFFSITE_OPEN_CLASSNAME);
  }
})
