//Pattern 1

const Pattern1 = (num) => {
  let answer = "";
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += "*";
    }
    answer += `${str}\n`;
  }
  return answer;
};

const n = 4;

const res = Pattern1(n);
console.log(res);
