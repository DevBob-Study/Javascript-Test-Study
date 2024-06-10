// 같은 숫자는 싫어
function solution(arr) {
  let stack = [];
  // arr 배열을 처음부터 끝까지 순회하면서 arr[i]와 다음 요소 arr[i+1]가 다를 때만 stack 배열에 현재 요소를 추가한다.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) stack.push(arr[i]);
  }
  // 중복이 제거된 요소들이 담긴 stack 배열을 반환한다.
  return stack;
}

// LIFO 구조인 스택 알고리즘을 사용한 것이 아니라 단순히 배열을 이용해 중복된 연속 요소를 제거하는 알고리즘으로 풀게 되었다.
// GPT가 말하길 스택 알고리즘을 사용하기엔 적합하지 않은 문제라고 하네요 흠..
// 2레벨의 올바른 괄호 때 스택 알고리즘을 확실하게 사용해보도록 하겠습니다.
