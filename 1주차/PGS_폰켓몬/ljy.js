// 폰켓몬
function solution(nums) {
  // nums 배열의 길이를 반으로 나누어 최대 선택 가능한 값을 설정한다.
  let myMon = nums.length / 2;
  // nums 배열에 중복값이 있을 수 있기 때문에 new Set()을 사용해서 nums 배열의 고유한 값들만 포함하는 Set객체를 만든다.
  let setNums = new Set(nums);
  // 스프레드 연산자로 Set 객체를 배열로 변환 후, 최대 선택 가능한 수 만큼의 요소만 포함하는 배열을 만들어준다.
  let result = [...setNums].slice(0, myMon);
  // 배열의 길이를 반환해준다.
  return result.length;
}
console.log(solution([3, 1, 2, 3]));

// 알고리즘을 사용했다기 보다, 문제에 충실하게 알고리즘 없이 풀기는 했습니다.
// 근데 Chat GPT에게 해시 알고리즘을 사용해서 푼거야? 라고 물어봤는데 네, 라고 하네요..
