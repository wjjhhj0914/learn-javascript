(() => {
  /* global DOMPurify */

  // 1. 문서에서 폼 요소 찾기
  const todoListForm = document.querySelector('.todolist');
  const todoList = todoListForm.querySelector('.todolist__tasks');
  
  // 12. 할 일 제거 버튼 click 이벤트 리스너 추가 (개별)
  // 할 일 제거 버튼 찾기
  const removeButtons = todoList.querySelectorAll('button');
  
  // 13. 찾은 제거 버튼(들) 순환
  removeButtons.forEach((button) => {
    // 할 일 제거 버튼 click 이벤트 리스너 추가 (개별)
    button.addEventListener('click', (e) => {
      const taskElement = e.currentTarget.closest('.task');
      // 제거 방법 1
      // taskElement.parentElement.removeChild(taskElement);
      // 제거 방법 2
      taskElement.remove();
    })
  })
  
  // 2. 폼 요소에 submit 이벤트 리스너 추가
  todoListForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 3. 이벤트 연결 대상 찾기
    const form = e.currentTarget;
    
    // 4. 새로운 할 일 콘텐츠(내용) 읽기
    // const input = form.querySelector('#new-task');
    // const [input] = form.elements;
    // const input = form['new-task'];
    const newTaskContent = form['new-task'].value.trim();
    
    // 5. 사용자가 입력한 내용이 아무것도 없으면, 아무 일도 안 해야 함
    if (!newTaskContent) return;

    // 6. 새 할 일 추가
    // 새로운 할 일 <li> 요소 생성
    const newTask = createTask(newTaskContent);

    // 10. DOM 업데이트
    // 생성된 할 일 요소를 할 일 목록의 마지막 자식 요소로 추가
    // todoList.appendChild(newTask);
    todoList.append(newTask);

    // 11. 폼에 입력한 필드 초기화
    form.reset();

  })

  // 7. 새로운 할 일 생성하는 함수
  function createTask(content) {
    // 생성할 할 일 요소
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');

    // 생성될 할 일 요소의 고유 ID를 생성
    const uniqueId = generateUniqueId(10);

    // 생성할 할 일 요소의 템플릿 구성 후, innerHTML 속성으로 요소에 HTML 생성
    taskElement.innerHTML = DOMPurify.sanitize(/* html */ `
      <li class="task">
      <input type="checkbox" id="${uniqueId}" />
      <label for="${uniqueId}">
        <span class="task__checkmark" aria-hidden="true">
          <svg viewBox="0 0 20 15">
            <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
          </svg>
        </span>
        ${content}
      </label>
      <button type="button" class="task__delete-button" aria-label="할 일 삭제" title="할 일 삭제">
        <svg viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </li>
    `);

    // 14. 생성된 <li> 안에서 제거 버튼을 찾아서, 버튼에 할 일 요소를 삭제하는 기능을 추가

    // 9. 생성된 새 할 일 요소 반환
    return taskElement;
  }


  // 8. 고유 ID 생성 함수
  function generateUniqueId(length = 5) {
    return Math.random().toString(36).substring(2, length + 2);
  }

})();