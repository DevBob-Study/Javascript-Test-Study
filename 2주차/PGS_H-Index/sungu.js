//1차 시도 -> 실패
function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => a - b);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i && citations[i] <= citations.length - i) {
      answer = citations[i];
    }
  }
  return answer;
}

//2차 시도 -> 실패
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      let answer = i;
      return answer;
    }
  }
  return answer;
}

//3차 시도 -> 성공 45m
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }
  return citations.length;
}
