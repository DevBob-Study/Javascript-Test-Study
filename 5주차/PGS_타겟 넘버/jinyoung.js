function solution(numbers, target) {
  let answer = 0;
  DFS(0, 0);
  function DFS(index, sum) {
    if (index === numbers.length) {
      //모든 노드 방문완료
      if (sum === target) {
        answer++;
      }

      return;
    }
    //방문한 노드에서 할 수 있는 연산 다 함(+ or -)
    DFS(index + 1, sum + numbers[index]);
    DFS(index + 1, sum - numbers[index]);
  }
  return answer;
}
