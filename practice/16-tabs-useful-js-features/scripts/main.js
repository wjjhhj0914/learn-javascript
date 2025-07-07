{
  const tabContainer = document.querySelector('.tabs__container')
  // 배열 전개 구문
  const tabs = [...tabContainer.querySelectorAll('.tab')];
  const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'))
  const SELECTED_CLASSNAME = 'is-selected'

  let selectedIndex = getSelectedIndex()

  tabContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.tabs button')

    if (!button) return

    if (selectedIndex > -1) {
      tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
    }

    const index = getSelectIndex(button)

    tabs.at(index).classList.add(SELECTED_CLASSNAME)
    tabContents.at(index).classList.add(SELECTED_CLASSNAME)

    selectedIndex = index
  })

  // 배열의 유용한 기능
  // 배열 순환 for문, forEach() 메서드 사용
  // findIndex(), find(), filter(), map(), reduce()
  function getSelectedIndex() {
    return tabs.findIndex((tab) => tab.classList.contains(SELECTED_CLASSNAME));
  }

  function getSelectIndex(button) {
    return tabs.findIndex((tab) => tab === button);
  }
}
