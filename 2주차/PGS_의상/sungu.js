function solution(clothes) {
  const hash = new Map();
  for (const [cloth, type] of clothes) {
    if (hash.get(type)) {
      hash.set(type, hash.get(type) + 1);
    } else {
      hash.set(type, 1);
    }
  }
  let ans = 1;
  for (const [type, times] of hash) {
    ans *= times + 1;
  }
  return ans - 1;
}
