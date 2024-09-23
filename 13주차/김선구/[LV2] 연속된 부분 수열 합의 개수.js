function solution(elements) {
  let answer = [];
  // 길이마다 확인해야하니 반복문
  for (let i = 1; i <= elements.length; i++) {
    // 시작점
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;

      // 개수
      for (let k = 0; k < i; k++) {
        sum += elements[(j + k) % elements.length];
      }
      answer.push(sum);
    }
  }
  return new Set(answer).size;
}
