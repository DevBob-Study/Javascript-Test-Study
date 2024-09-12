function solution(order) {
  let count = 0;
  let tempBelt = [];
  let curBox = 1;

  for (let wantBox of order) {
      while (curBox < wantBox) {
          tempBelt.push(curBox);
          curBox++;
      }

      if (curBox === wantBox) {
          count++;
          curBox++;
      }
      else if (tempBelt[tempBelt.length - 1] === wantBox) {
          count++;
          tempBelt.pop();
      }
      else {
          break;
      }
  }

  return count;
}