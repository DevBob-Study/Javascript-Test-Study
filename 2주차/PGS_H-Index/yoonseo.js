function solution(citations) {
  citations.sort((a, b) => b - a);
  
  var answer = 0;
  for (var i = 0; i < citations.length; i++) {
      if (i + 1 <= citations[i]) {
          answer = i + 1;
      } else {
          break;
      }
  }

  return answer;
}
