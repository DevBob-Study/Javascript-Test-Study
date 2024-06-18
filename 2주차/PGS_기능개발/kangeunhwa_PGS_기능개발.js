function solution(progresses, speeds) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    const lastStackItem = stack[stack.length - 1];
    if (stack.length > 0 && lastStackItem.day >= day) {
      lastStackItem.count++;
    } else {
      stack.push({ day, count: 1 });
    }
  }

  return stack.map((item) => item.count);
}
