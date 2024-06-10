function solution(participant, completion) {
  //Map
  let answer;
  const map = new Map();
  for (let p of participant) {
    if (!map.get(p)) {
      map.set(p, 1);
    } else {
      map.set(p, map.get(p) + 1);
    }
    //console.log(map.get(p))
  }
  for (let c of completion) {
    if (map.get(c) === 1) {
      map.delete(c);
    } else {
      map.set(c, map.get(c) - 1);
    }

    //console.log(map.get(c));
  }
  //console.log(map);
  for (let [key, value] of map) {
    answer = key;
  }

  return answer;
}
