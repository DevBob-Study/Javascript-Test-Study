function solution(sizes) {
  //같은 방향으로 정리
  let arranged = [];
  for (let i in sizes) {
    if (sizes[i][0] >= sizes[i][1]) {
      arranged.push(sizes[i]);
    } else {
      arranged.push([sizes[i][1], sizes[i][0]]);
    }
  }

  let maxWid = arranged[0][0];
  let maxH = arranged[0][1];
  for (let i = 1; i <= arranged.length - 1; i++) {
    if (arranged[i][0] > maxWid) {
      maxWid = arranged[i][0];
    }
    if (arranged[i][1] > maxH) {
      maxH = arranged[i][1];
    }
  }

  return maxWid * maxH;
}
