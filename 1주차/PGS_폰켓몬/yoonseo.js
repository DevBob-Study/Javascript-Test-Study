function solution(nums) {
  let answer = 0;
  let slot = [...new Set(nums)];
  
  console.log(slot);
  if (slot.length > nums.length/2 ){
      answer = nums.length/2;
  }
  else {
      answer = slot.length
  }
  
  return answer;
}