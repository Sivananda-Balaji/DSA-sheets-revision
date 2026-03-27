//Rotate String

const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }
  const target = s + s;
  return target.includes(goal);
};

const s = "abcde",
  goal = "cdeab";

const result = rotateString(s, goal);

console.log(result);
