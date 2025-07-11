// 🚀 AJAX란?
// ----------------------------------------------------------------

(() => {
  // XMLHttpRequest 생성자 함수(Class)를 사용해 XMLHttpRequest 객체(인스턴스) 생성
  // 1. 요청을 위한 XHR 객체 생성
  const request = new XMLHttpRequest();

  // 3. 요청 구성을 열어 보자.
  request.open('GET', 'https://api.github.com/users/yamoo9/repos');

  // 2. 서버에서 응답이 오는 이벤트를 리스닝
  request.addEventListener('load', (e) => {
    // XHR 요청에 대한 응답이 서버로부터 오면, 이벤트 객체를 통해 응답된 데이터를 확인할 수 있음.
    console.log(e.target.status); // 200
    console.log(e.target.response); // JSON String data
    const responseData = JSON.parse(e.target.response);
    console.log(responseData);
    
  })

  // 4. 서버로 요청 보내기
  // 보내야 될 내용이 있으면 JSON Stringify로 보내야 함
  // 없으면 null
  request.send(null);
});

// 실습
(() => {
  // const request = new XMLHttpRequest();

  // function requestGithubUser(username) {
  //   request.addEventListener('load', (e) => {
  //     const responseData = JSON.parse(e.target.response);
  //     console.log(responseData);
  //   })
  //   request.open('GET', `https://api.github.com/users/${username}/repos`);
  //   request.send(null);
  // }

  // requestGithubUser('wjjhhj0914');

  function requestGithubUser(username) {
    // XMLHttpRequest 객체 생성
    const request = new XMLHttpRequest();

    // 요청 구성
    request.open('GET', `https://api.github.com/users/${username}`);

    // 요청 보내기
    request.send(null);

    // 요청 이벤트 리스닝(청취)
    request.addEventListener('load', ({target: xhr}) => {

      // 서버에서 도착한 응답 처리

      console.log(`상태 코드 = ${xhr.status}`);
      console.log(`응답 데이터 = ${xhr.response}`);
      // 문자값 응답 -> JSON 문자열 -> JavaScript 객체 반환
      const responseData = JSON.parse(xhr.response);
      
      // 데이터 정리 (Massaging)
      // 로그인 데이터만 새롭게 배열로 재구성
      const followers = responseData.map(({ login }) => login);
      
      // 템플릿 구성
      const followerItemsTemplate = followers.map((name) => {
        return `<li>${name}</li>`
      }).join('');

      // DOM 업데이트 (렌더 파이프라인 : 스타일 재계산 -> 레이아웃(reflow) -> 페인트(repaint) -> 컴포지트)
      // DOM에 렌더링 = 화면 변경
      document.querySelector('.github-followers').innerHTML = followerItemsTemplate;
    })
  }

  requestGithubUser('wjjhhj0914');
})();