function solution(clothes) {
  let answer = 1;
  const obj = {};
  clothes.map((c) => {
    obj[c[1]] ? (obj[c[1]] += 1) : (obj[c[1]] = 1);
  });
  const value = Object.values(obj);

  for (let i = 0; i < value.length; i++) {
    answer *= value[i] + 1;
  }
  return answer - 1;
}
