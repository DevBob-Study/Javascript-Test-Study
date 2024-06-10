function solution(answers) {
  let one = [1, 2, 3, 4, 5]; //i %5
  let two = [2, 1, 2, 3, 2, 4, 2, 5]; //i%8
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //i%10
  let bingo = [0, 0, 0]; // 1,2,3번이 맟힌 문제 개수
  for (let i in answers) {
    if (answers[i] === one[i % 5]) bingo[0]++;
    if (answers[i] === two[i % 8]) bingo[1]++;
    if (answers[i] === three[i % 10]) bingo[2]++;
  }
  //console.log(bingo);
  let winner = [];
  for (i in bingo) {
    if (bingo[i] === Math.max(...bingo)) winner.push(Number(i) + 1);
  }
  return winner;
}
