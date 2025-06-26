{
// ----------------------------------------------------------------
// 1. 제어 대상, 선택된 인덱스 찾기
// 제어 대상 찾기
const tabsContainer = document.querySelector('.tabs__container');
const tabs = tabsContainer.querySelectorAll('.tab'); // 노드 반환
const tabContents = tabsContainer.querySelectorAll('.tab__contents'); // 노드 반환

// 활성 상태 클래스 이름
const SELECTED_CLASSNAME = 'is-selected';

// 선택된 인덱스 찾기
let selectedIndex = -1;
// 왜 -1이냐면, 0 이상의 인덱스 번호는 tabs에 해당하는 번호일 가능성이 있기도 하고, indexOf() 메서드에서 인덱스를 못 찾으면 -1을 표시함으로써 없다는 걸 알려주는 이유에서 -1 넣음.

for (let i = 0, l = tabs.length; i < l; i++) {
  const tab = tabs.item(i);
  if (tab.classList.contains(SELECTED_CLASSNAME)) {
    selectedIndex = i;
    break;
  }
}

// ----------------------------------------------------------------
// 2. 모든 탭에 리스너 추가


// ----------------------------------------------------------------
// 3. 이전 선택된 대상(탭, 탭 콘텐츠) 비활성화
(() => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // 선택된 탭, 탭 콘텐츠가 존재할 경우에만 조건 블록 실행
      // 탭이나 탭 콘텐츠에 is-selected 클래스가 있는 인덱스가 있을 경우
      if (selectedIndex > -1) { 
        const selectedTab = tabs.item(selectedIndex);
        selectedTab.classList.remove(SELECTED_CLASSNAME);
  
        const selectedTabContent = tabContents.item(selectedIndex);
        selectedTabContent.classList.remove(SELECTED_CLASSNAME);
      }
    })
  })
});

// ----------------------------------------------------------------
// 4. 현재 선택된 대상(탭, 탭 콘텐츠) 활성화
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (selectedIndex > -1) {
      const selectedTab = tabs.item(selectedIndex);
      selectedTab.classList.remove(SELECTED_CLASSNAME);
      const selectedTabContent = tabContents.item(selectedIndex);
      selectedTabContent.classList.remove(SELECTED_CLASSNAME);
    }
    // 현재 활성 상태의 인덱스를 변수에 저장
    let activeIndex;

    // 선택된 인덱스 찾기
    for (let i = 0, l = tabs.length; i < l; ++i) {
      const compareTab = tabs.item(i);
      if (compareTab === tab) {
        activeIndex = i;
        break;
      }
    }

    // 현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 상태 클래스 이름 추가
    const activeTab = tabs.item(activeIndex);

    activeTab.classList.add(SELECTED_CLASSNAME);

    // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 상태 클래스 이름 추가
    const activeTabContent = tabs.item(activeIndex);

    activeTabContent.classList.add(SELECTED_CLASSNAME);

    // 선택된 인덱스 값 업데이트(변경)
    selectedIndex = activeIndex;
  })
})
}
