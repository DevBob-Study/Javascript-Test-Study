//주식가격 문제는 특정 시간에 주식 가격이 얼마나 오랫동안 떨어지지 않는지를 계산하는 문제

//주식 가격이 담긴 배열 prices가 주어짐.
// 배열의 각 원소는 특정 시점에서의 주식 가격을 나타냄.
// 주식 가격은 초 단위로 기록되며, prices[i]는 i초 시점의 주식 가격.
// 각 시점마다 주식 가격이 떨어지지 않은 기간을 계산하여 배열로 반환해야함.
function solution(prices) {
  // answer 배열을 주식 가격 배열과 같은 길이로 초기화, 모든 값을 0으로 설정
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    // 주식 가격 배열을 순회하면서 현재 가격이 스택의 마지막 가격보다 낮은 경우를 처리
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      // 스택의 마지막 가격보다 현재 가격이 낮으면 스택에서 인덱스를 꺼내고, 그 인덱스의 주식 가격이 떨어지지 않은 기간을 계산하여 'answer' 배열에 저장
      const j = stack.pop();
      answer[j] = i - j;
    }
    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }

  // 남은 인덱스 처리, 순회가 끝난 후에도 스택에 남아있는 인덱스는 가격이 끝까지 떨어지지 않은 경우,
  // 따라서 남은 기간을 계산하여 answer 배열에 저장
  while (stack.length) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }

  return answer;
}
