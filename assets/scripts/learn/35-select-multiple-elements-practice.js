const starWars = document.querySelector('#star-wars');

// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuyList = starWars.querySelectorAll('[data-type="good-guy"]');
console.log(goodGuyList);

// 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
goodGuyList.forEach((guy) => {
  guy.classList.add('exellent');
});

// for (const guy of goodGuyList) {
//   guy.classList.add('exellent');
// }

// 3. 빌런(Villain)을 모두 선택하세요.
const villainList = starWars.querySelectorAll('[data-type="villain"]');
console.log(villainList);

// 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
let i = 0, l = villainList.length

for (;  i < l;) {
  const villain = villainList[i];
  villain.classList.add('naughty');
  i++;
}

// 5. 모든 캐릭터(Character)를 선택하세요.
const allCharacters = starWars.querySelectorAll('.charater');
console.log(allCharacters);

// 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
allCharacters.forEach((c) => {
  c.classList.add('star-wars');
});
