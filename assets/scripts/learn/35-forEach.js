// forEach() 배열 메서드

const numbers = [10, 9, 8, 7];

// for 문 vs. forEach()

// for 문
(() => {
  for (let i = 0, l = numbers.length; i < l; ++i) {
    const number = numbers[i];
    console.log(i, number);
  }
});

// .forEach()
(() => {
  // array.forEach((item, index, array) => {})
  numbers.forEach((number, i) => {
    console.log(i, number);
  })
});

// 실습
(() => {
  const players = [
    {
      name: '차범근',
      position: '공격수',
      strength: '폭발적인 스피드와 강한 슈팅',
      weakness: '조금 직선적인 플레이 스타일'
    },
    {
      name: '박지성',
      position: '미드필더',
      strength: '왕성한 활동량과 팀워크',
      weakness: '골 결정력 부족'
    },
    {
      name: '손흥민',
      position: '공격수',
      strength: '양발 슈팅 능력과 스피드',
      weakness: '볼 간수력 부족 시 논란 있음'
    },
    {
      name: '홍명보',
      position: '수비수',
      strength: '정확한 패스와 리더십',
      weakness: '순간적인 스피드 부족'
    },
    {
      name: '이운재',
      position: '골키퍼',
      strength: '경험과 안정감 있는 리딩',
      weakness: '하체 반응 속도 부족 지적'
    },
    {
      name: '조광래',
      position: '미드필더',
      strength: '패스와 경기 조율 능력',
      weakness: '몸싸움 약점'
    },
    {
      name: '김남일',
      position: '수비형 미드필더',
      strength: '터프한 수비와 투지',
      weakness: '거친 플레이로 카드 다수'
    },
    {
      name: '이영표',
      position: '풀백',
      strength: '지능적인 수비와 정확한 크로스',
      weakness: '공격 가담 시 존재감 약하다는 평도 있음'
    },
    {
      name: '기성용',
      position: '미드필더',
      strength: '롱패스와 시야',
      weakness: '수비 집중력 기복'
    },
    {
      name: '정성룡',
      position: '골키퍼',
      strength: '공중볼 처리 능력',
      weakness: '큰 경기에서의 불안감'
    },
    {
      name: '황선홍',
      position: '공격수',
      strength: '위치 선정과 침착한 슈팅',
      weakness: '부상 빈도'
    },
    {
      name: '안정환',
      position: '공격수',
      strength: '화려한 기술과 센스',
      weakness: '경기 외적 이슈로 평가 갈림'
    },
    {
      name: '김진수',
      position: '풀백',
      strength: '왕성한 오버래핑과 크로스',
      weakness: '수비 시 위치 선정'
    },
    {
      name: '이강인',
      position: '공격형 미드필더',
      strength: '창의적인 패스와 킥 능력',
      weakness: '수비 가담 부족'
    },
    {
      name: '황희찬',
      position: '공격수',
      strength: '돌파력과 피지컬',
      weakness: '결정력 기복'
    }
  ];

  // 1.
  // players.forEach((player) => {
  //   console.log(player.name);
  // })

  // 2.
  // players.forEach((player, index) => {
  //   if (player.name === '안정환') {
  //     console.log(index, player.name);
  //   }
  // })

  // 3.
  // const playerNames = [];

  // players.forEach((player) => {
  //   playerNames.push(player.name);
  // })

  // console.log(playerNames);

  // 4.
  const goalkeepers = [];

  players.forEach((player) => {
    if (player.position === '골키퍼') {
      goalkeepers.unshift(player)
    }
  });

  console.log(goalkeepers);
})();