//Pattern 1

const Pattern1 = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += "*";
    }
    console.log(str);
  }
};

const n = 4;

Pattern1(n);
