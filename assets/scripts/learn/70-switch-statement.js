// 🚀 switch 문
// ----------------------------------------------------------------

// if문 vs switch문
(() => {

  // if문
  (() => {
    const isLightColour = 'red';

    if (isLightColour === 'green') {
      console.log('좌우를 살피고 건널목을 건너세요!');
    } else if (isLightColour === 'yellow') {
      console.log('안전을 위해 자리에 선 후, 다음 초록 불을 기다리세요!');
    } else {
      console.log('자리에 멈춰 초록 불을 기다리세요!');
    }  
  });

  // switch문
  (() => {
    const isLightColour = 'green';

    switch (isLightColour) {
      // A 경우
      case 'green':
        console.log('좌우를 살피고 건널목을 건너세요!');
        break;
      // B 경우
      case 'yellow':
        console.log('안전을 위해 자리에 선 후, 다음 초록 불을 기다리세요!');
        break;
      // A 경우도, B도 아닌 상황: 기본 상황
      default:
        console.log('자리에 멈춰 초록 불을 기다리세요!');
    }
  });
});

// switch문
(() => {
  const isLightColour = 'green';

  switch (isLightColour) {
    case 'green': {
      console.log('좌우를 살피고 건널목을 건너세요!');
      break;
    }
    case 'yellow': {
      console.log('안전을 위해 자리에 선 후, 다음 초록 불을 기다리세요!');
      break;
    }
    default:
      console.log('자리에 멈춰 초록 불을 기다리세요!');
  }
});

// if문 vs switch문
(() => {

  // switch문
  (() => {
    let 취미 = '조깅';

    switch (취미) {
      case '수영': console.log('수영');
        break;
      case '영화 감상': console.log('영화 감상');
        break;
      case '게임': console.log('게임');
        break;
      case '조깅': console.log('조깅');
        break;
      default: console.log('아무것도 안 해요!');
    }
  });

  // if문
  (() => {
    let 취미 = '영화 감상';

    if (취미 === '수영') console.log('수영')
    else if (취미 === '영화 감상') console.log('영화 감상')
    else if (취미 === '게임') console.log('게임') 
    else if (취미 === '조깅') console.log('조깅')
    else console.log('아무것도 안 해요!');
  });
});

// if문 vs switch문
(() => {

  // switch문
  (() => {
    let 취미 = '조깅';

    switch (취미) {
      case '수영':
      case '영화 감상':
      case '게임':
      case '조깅':
      case '등산':
      case '음악 감상':
      case '독서':
      case '콘서트 가기':
        console.log('매우 흥미로운 분이군요!');
        break;
      default: console.log('좀 더 재밌게 살면 좋겠습니다!');
    }
  });

  // if문
  (() => {

    let 취미 = '영화 감상';

    // 취미가 '수영' 또는 '영화 감상' 또는 '게임' 또는 '조깅'인 사람이라면?
    if (
      취미 === '수영' ||
      취미 === '영화 감상' ||
      취미 === '게임' ||
      취미 === '조깅' ||
      취미 === '등산' ||
      취미 === '음악 감상' ||
      취미 === '독서' ||
      취미 === '콘서트 가기'
    ) {
      // 매우 흥미로운 분이군요!
      console.log('매우 흥미로운 분이군요!');
    } else {
      console.log('조금 더 재밌게 살면 좋겠습니다!');
    }

    if (취미 === '수영') console.log('수영')
    else if (취미 === '영화 감상') console.log('영화 감상')
    else if (취미 === '게임') console.log('게임') 
    else if (취미 === '조깅') console.log('조깅')
    else console.log('아무것도 안 해요!');
  });
});

// switch문 (default가 꼭 맨 아래에 위치하지는 않아도 됨)
(() => {
  let 취미 = 'NOTHING';

  switch (취미) {
    default:
    case '조깅':
    case '수영':
      console.log('매우 흥미로운 분이군요!');
      break;
    case 'NOTHING':
      console.log('아무것도 없어요!');
  }
});