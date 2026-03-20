//Pattern 11

const Pattern11 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = i % 2 === 0 ? "1" : "0";
    for (let j = 0; j < i; j++) {
      temp += temp[temp.length - 1] === "1" ? "0" : "1";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern11(num);
