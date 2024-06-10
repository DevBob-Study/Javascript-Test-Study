function solution(array, commands) {
  for (const command of commands) {
    const [start, end, index] = command;
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[index - 1]);
  }
  return answer;
}
