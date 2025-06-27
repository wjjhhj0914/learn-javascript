{
  // 1. 문서에서 제어할 대상 요소 선택(찾기)
  // 버튼, 인디케이터, 캐러셀 콘텐츠
  // "이 캐러셀 전체의 조작을 이 DOM 영역 안에서만 하겠다"는 선언이자 모듈형 UI 컴포넌트를 만드는 첫 걸음.
  const carousel = document.querySelector('.carousel');
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');
  const contentsWrapper = carousel.querySelector('.carousel__contents');

  // 2. 상태 클래스 이름 상수로 설정
  const SELECTED_CLASSNAME = 'is-selected';

  // 3-1. 현재/다음 콘텐츠 탐색 : 다음 콘텐츠를 찾기 위해서는 "현재 콘텐츠"를 기준점으로 삼아야 하기 때문에 현재 콘텐츠를 먼저 찾는다. "다음 콘텐츠"를 찾으려면, "지금 선택된 콘텐츠"가 누구인지 먼저 찾아야 nextElementSibling으로 접근할 수 있다. (다음 역으로 가려면 지금 내가 서 있는 역이 어딘지 알아야 하는 것처럼)
  nextButton.addEventListener('click', () => {
    // is-selected 클래스를 찾음으로써 현재 선택된 콘텐츠 찾기
    const selectedContent = contentsWrapper.querySelector('.' + SELECTED_CLASSNAME); // 이게 기준
    // console.log(selectedContent); // <li>첫 번째 이미지</li>

    // 다음에 선택될 콘텐츠 탐색
    const nextContent = selectedContent.nextElementSibling;

    // 3-2. 다음 콘텐츠로 이동
    // 다음 콘텐츠의 브라우저에 의해 계산된 너비 값 읽기
    const distance = getComputedStyle(nextContent).getPropertyValue('left');
    // console.log(distance); // 800px
    // 콘텐츠들을 감싼 래퍼에 transfrom 인라인 스타일 설정
    contentsWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    // 3-3. 선택된 상태 변경
    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    // 3-4. 다음 탐색 버튼 감춤
    if (!nextContent.nextElementSibling) nextButton.hidden = true;
  })

  prevButton.addEventListener('click', () => {
    const selectedContent = contentsWrapper.querySelector('.' + SELECTED_CLASSNAME);
    // 4-1. 이전 콘텐츠 탐색
    const prevContent = selectedContent.previousElementSibling;
    console.log(prevContent);

    // 4.2 이전 콘텐츠로 이동
    const distance = getComputedStyle(prevContent).getPropertyValue('left');
    console.log(distance);
    contentsWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    // 4-3. 선택된 상태 변경
    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    // 4-4. 이전 탐색 버튼 감춤
    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    // 5-1. 이전/다음 탐색 버튼 (다시) 표시
    // 사용자가 이전 버튼을 클릭했을 때, 다음 버튼의 hidden 속성이 true라면(즉, 다음 버튼이 사라진 상태라면), 다음 버튼의 hidden 속성을 false로 바꿔주세요. (즉, 다음 버튼을 보여주세요!)
    if (nextButton.hidden) {
      nextButton.hidden = false;
    }
  })
}