function solution(progresses, speeds) {
  let day = progresses.map((progresses, index) =>
    Math.ceil((100 - progresses) / speeds[index])
  );
  //map 사용하는 것으로 수정함.
  // for(let i=0; i<progresses.length;i++){
  //         day[i]= Math.ceil((100-progresses[i])/speeds[i] );
  // }

  let max = day[0];
  let answer = [];
  answer[0] = 1;
  let answerIndex = 0;
  for (let i = 1; i < day.length; i++) {
    if (day[i] <= max) {
      day[i] = max;
      answer[answerIndex]++;
    } else {
      max = day[i];
      answer[++answerIndex] = 1;
    }
  }
  //console.log(day);
  console.log(answer);
  return answer;
}
