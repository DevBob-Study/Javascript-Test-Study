function solution(sizes) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    if (sizes[i][0] > a) {
      a = sizes[i][0];
    }
    if (sizes[i][1] > b) {
      b = sizes[i][1];
    }
  }

  return a * b;
}
