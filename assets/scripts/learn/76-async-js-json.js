// 🚀 JSON (JavaScript Object Notation)
// ----------------------------------------------------------------

(() => {
  const macbookPro = {
    operatingSystem: 'macOS Sequoia 15.5(24F74)',
    processor: '2.4GHz 8core Intel Core i9',
    memory: 64,
  }
  console.log(macbookPro);

  // ----------------------------------------------------------------------------------------------
  // Request (클라이언트에서 서버로 보내는 데이터)
  
  // Client -> Request(XHR) -> Server
  const jsonString = JSON.stringify(macbookPro);
  console.log(jsonString); // JSON String

  // replacer 매개변수 사용 시, 특정 키:값 쌍만 가져올 수 있음.
  const jsonStringWithReplacer = JSON.stringify(macbookPro, ['memory', 'processor']);
  console.log(jsonStringWithReplacer); // {"memory":64,"processor":"2.4GHz 8core Intel Core i9"}

  // space 매개변수 사용 시, 개행 가능
  const jsonStringWithSpace = JSON.stringify(macbookPro, null, 2); // 2칸
  console.log(jsonStringWithSpace);

  // -----------------------------------------------------------------------------------------------
  // Response (서버에서 클라이언트로 응답하는 데이터)
  // JSON 문자열 -> JavaScript 객체화

  const laptopInfo = JSON.parse(jsonString,
    // reviver
    (key, value) => {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }
      
      if (typeof value === 'number') {
        return value * 2;
      }
      
      return value;
  });
  console.log(laptopInfo);
});

// 데이터 정리 (Data Massaging)
(() => {
  const request = new XMLHttpRequest();

  request.open('GET', 'http://api.github.com/users/wjjhhj0914/repos');

  request.send();

  request.addEventListener('load', ({ target: xhr }) => {
    const repos = JSON.parse(xhr.response);
    console.log(repos);

    // 데이터 정리 (Data Massaging)
    // - 저장소 이름 (`name`)
    // - 저장소 공개 여부 (`private`)
    // - 저장소 URL (`html_url`)

    const massagedRepos = repos.map((repo) => {
      return {
        name: repo.name,
        private: repo.private,
        url: repo.html_url,
      }
    })

    // const massagedRepos = repos.map((repo) => ({
    //   name: repo.name,
    //   private: repo.private,
    //   url: repo.html_url,
    // }))

    // const massagedRepos = repos.map(({ name, private, html_url: url }) => ({
    //   name,
    //   private,
    //   url,
    // }))

    console.log(massagedRepos);
  })
})();