function solution(n, lost, reserve) {
  let actualLost = lost.filter((l) => !reserve.includes(l));
  let actualReserve = reserve.filter((r) => !lost.includes(r));

  actualLost.sort((a, b) => a - b);
  actualReserve.sort((a, b) => a - b);

  for (let i = 0; i < actualLost.length; i++) {
    let found = false;
    for (let j = 0; j < actualReserve.length; j++) {
      if (
        actualReserve[j] === actualLost[i] - 1 ||
        actualReserve[j] === actualLost[i] + 1
      ) {
        actualReserve.splice(j, 1);
        found = true;
        break;
      }
    }
    if (found) {
      actualLost.splice(i, 1);
      i--;
    }
  }

  return n - actualLost.length;
}
