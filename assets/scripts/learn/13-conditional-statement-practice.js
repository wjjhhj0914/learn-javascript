// 1.
const SH = {
  age: 30,
};

const MH = {
  age: 24,
};

const JW = {
  age: 41,
};

const AH = {
  age: 27,
};

if (SH.age < MH.age) {
  console.log('성현이는 명호보다 나이가 어려요. 🐣');
} else {
  console.log('성현이는 명호보다 나이가 많아요. 🥸');
}

SH.age = SH.age + 10;
console.log(SH.age);

if (SH.age > AH.age) {
  console.log('성현이는 아현이보다 나이가 많아요. 🥸');
} else {
  console.log('성현이는 아현이보다 나이가 어려요. 🐣');
}

if (SH.age > JW.age) {
  console.log('성현이는 재웅이보다 나이가 많아요. 🥸');
} else {
  console.log('성현이는 재웅이보다 나이가 어려요. 🐣');
}

// 2.
/*
a. null
d. undefined
e. 0
f. ""
h. false
*/
