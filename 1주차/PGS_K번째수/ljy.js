//K번째수
function solution(array, commands) {
  let s = [];

  for (let i = 0; i < commands.length; i++) {
    // array를 commands에 지정된 구간만큼 잘라서 새로운 배열 sortArray를 만든다.
    // sortArray를 오름차순으로 정렬한다.
    let sortArray = array
      .slice(commands[[i]][0] - 1, commands[[i]][1])
      .sort((a, b) => a - b);
    // 정렬된 배열에서 지정된 위치의 값을 s 배열에 저장한다.
    s[i] = sortArray[commands[[i]][2] - 1];
  }
  return s;
}
