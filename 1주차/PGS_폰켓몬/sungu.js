function solution(nums) {
  const arr = [];
  const max = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (arr.length < max) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i]);
      }
    }
  }
  return arr.length;
}

//다른 사람 set 풀이
function solution(nums) {
  let myBag = [...new Set(nums)];
  let limit = nums.length / 2;
  console.log(myBag);

  return myBag.length > limit ? limit : myBag.length;
}
