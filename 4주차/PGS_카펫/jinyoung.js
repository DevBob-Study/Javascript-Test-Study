function solution(brown, yellow) {
  let answer = [];
  //가로: w, 세로: h
  let h;
  for (let w = 3; w <= (brown + yellow) / 3; w++) {
    if ((brown + yellow) % w === 0) {
      h = (brown + yellow) / w;
      if ((h - 2) * (w - 2) === yellow) {
        console.log(h, w);
        return [h, w];
      }
    }
  }
}
