function solution(s) {
  let stack = [];
  let answer = true;
  s.split("").map((bracket) => {
    if (bracket == "(") {
      stack.push(bracket);
    } else if (stack.length > 0 && bracket == ")") {
      stack.pop();
    } else if (stack.length == 0 && bracket == ")") {
      answer = false;
    }
  });

  if (stack.length > 0) {
    answer = false;
  }
  return answer;
}
