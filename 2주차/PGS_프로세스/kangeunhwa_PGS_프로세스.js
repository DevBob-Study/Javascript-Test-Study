function solution(priorities, location) {
  //1. 최대 크기를 구함
  //2. priorities[0] 제일 첫 번째 값이 최대크기인지 확인
  //3. 맞다면, answer+1 그 첫번째 값이 location인지 확인 맞다면 answer 리턴
  //4. 아니라면, priorities값 첫번째를 제거하고 뒤로 넣기.
  //주의할 점은 location이 index별로 순서라는 거임. 비교해야할 순서 배열이 있어야함

  let max_size = Math.max(...priorities);
  let answer = 0;
  let arr = [];
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  while (priorities.length !== 0) {
    max_value = Math.max(...priorities);
    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (arr.shift() == location) return answer;
    }
  }
}
