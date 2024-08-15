
function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = i % n + 1; 
    let turn = parseInt((i + 1)/n);

    if (i > 0) {
      // 이전 단어 마지막 글자
      let prevLast = words[i - 1][words[i - 1].length];

      // 중복이거나 끝말을 안 이은경우
      if (i > words.indexOf(word) || words[i][0] !== prevLast) {
        answer = [p, turn];
        break;
      }
    }
  }

  return answer;
}