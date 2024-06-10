function solution(s) {
  console.log(s[1]);
  console.log(s.length);
  let sum = 0;
  for (let i in s) {
    s[i] === "(" ? (sum += 1) : (sum -= 1);
    if (sum < 0) break;
  }
  return sum === 0 ? true : false;
}
