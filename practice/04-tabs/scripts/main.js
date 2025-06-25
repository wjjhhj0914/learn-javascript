// 버튼을 클릭하면 탭이 바뀌도록 구현
// const buttonTabs = document.querySelector('.tabs');
// const children = buttonTabs.children;
// console.log(children);
// const buttonArrays = Array.from(children);


// buttonTabs.addEventListener('click', () => {
//   const v = children.item(2).classList.add('is-selected');
//   console.log(v);
// })

{
  // -------------------------------------------------------
  // 1. 제어 대상, 선택된 인덱스 찾기
  // 제어 대상 찾기
  const tabsContainer = document.querySelector('.tabs__container');
  const tabs = tabsContainer.querySelector('.tab');
  const tabContent = document.querySelector('tab__contents');

  // 활성 상태 클래스 이름
  const SELECTED_CLASSNAME = 'is-selected';

  // 선택된 인덱스 찾기
  // for 문 + break

  // 선택되지 않음을 나타내는 값을 -1로 초기값 구성
  let selectedIndex = -1;

  for (let i = 0, l = tabs.length; i < l; i++) {
    const tab = tabs.item(i);
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // -------------------------------------------------------
  // 2. 모든 탭에 이벤트 리스너 추가

  // for...of 문
  (() => {
    for (const tab of tabs) {
      tab.addEventListener('click', () => {        
        console.log(tab);
      })
    }
  });

  // forEach() 활용
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      console.log(tab);
    })
  })

  // -------------------------------------------------------
  // 3. 이전 선택된 대상(탭, 탭 콘텐츠) 비활성화
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

      // 선택된 탭, 탭 콘텐츠가 존재할 경우에만 조건 블록 실행
      if (selectedIndex > -1) {
        // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
        const selectedTab = tabs.item(selectedIndex);
        currentTab.classList.remove(SELECTED_CLASSNAME);

        // 이전 활성 상태의 탭 콘텐츠 요소에서 활성 상태 클래스 이름 제거
        const currentTabContent = tabContents.item(selectedIndex);
        currentTabContent.classList.remove(SELECTED_CLASSNAME);
      }
    })
  })
  // -------------------------------------------------------
  // 4. 현재 선택된 대상(탭, 탭 콘텐츠) 활성화
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (selectedIndex > -1) {
      // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
      const selectedTab = tabs.item(selectedIndex);
      currentTab.classList.remove(SELECTED_CLASSNAME);
        
                // 이전 활성 상태의 탭 콘텐츠 요소에서 활성 상태 클래스 이름 제거
                const currentTabContent = tabContents.item(selectedIndex);
                currentTabContent.classList.remove(SELECTED_CLASSNAME);
        
      }

      // 현재 활성 상태의 인덱스
      let activeIndex;

      // for 문과 break 조합으로 선택된 인덱스 찾기
      for (let i = 0, l = tabs.length; i < l; i++) {
        const compareTab = tabs.item(i);
        if (compareTab === tab) {
          activeIndex = i;
          break;
        }
      }

      //  현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 상태 클래스 이름 추가
      const activeTab = tabs.item(activeIndex);
      activeTab.classList.add(SELECTED_CLASSNAME);
      //  현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 상태 클래스 이름 추가
      const activeTabContent = tabContents.item(activeIndex);
      activeTabContent.classList.add(SELECTED_CLASSNAME);

      // 선택된 인덱스 값 업데이트(변경)
      selectedIndex = activeIndex;
    })
  })

}
