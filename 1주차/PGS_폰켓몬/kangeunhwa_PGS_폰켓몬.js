function solution(nums) {
  let result = nums.length / 2;
  let hashMap = new Map();
  nums.map((num) => {
    hashMap.set(num, hashMap.has(num) + 1);
  });

  if (hashMap.size > result) {
    return result;
  } else {
    return hashMap.size;
  }
}
