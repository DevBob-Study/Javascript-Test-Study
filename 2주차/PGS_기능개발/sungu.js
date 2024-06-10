//1차 시도 -> 성공 1h
function solution(progresses, speeds) {
  var answer = [];
  const arr = [];
  for (let i = 0; i < progresses.length; i++) {
    let time = Math.ceil((100 - progresses[i]) / speeds[i]);
    arr.push(time);
  }
  while (arr.length > 0) {
    let cnt = 0;
    let num = arr[0];
    while (arr.length > 0 && arr[0] <= num) {
      arr.shift();
      cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}
