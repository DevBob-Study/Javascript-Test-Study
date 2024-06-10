function solution(nums) {
  let selectNum = nums.length / 2; //고를 수 있는 포켓몬 수 N/2
  let set = new Set(nums);
  let species = [...set];
  return species.length >= selectNum ? selectNum : species.length;
}
