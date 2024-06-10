function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const array = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) {
      array[0]++;
    }
    if (two[i % 8] === answers[i]) {
      array[1]++;
    }
    if (three[i % 10] === answers[i]) {
      array[2]++;
    }
  }
  const answer = [];
  const max_cnt = Math.max(...array);
  for (let i = 0; i < answers.length; i++) {
    if (array[i] === max_cnt) {
      answer.push(i + 1);
    }
  }
  return answer;
}
