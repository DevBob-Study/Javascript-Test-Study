function solution(array, commands) {
  var answer = [];
  commands.map((command) => {
    let slicearr = array.slice(command[0] - 1, command[1]);
    let sortarr = slicearr.sort((a, b) => a - b);
    let result = sortarr[command[2] - 1];
    answer.push(result);
  });
  return answer;
}
