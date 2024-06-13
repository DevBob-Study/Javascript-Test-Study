function solution(clothes) {
  const clothes = new Map();

  // 의상 종류별로 개수를 세어 Map에 저장
  for (const [, type] of clothes) {
      if(!clothes.has(type)){
          clothes.set(type, 1);
      }
      else{
          clothes.set(type, clothes.get(type) + 1);
      }
  }
  // 각 종류별로 (의상 개수 + 1)을 곱하여 모든 경우의 수를 계산
  let answer = 1;
  for (const count of clothes.values()) {
      answer *= count + 1;
  }
  // 모든 종류의 의상을 선택하지 않은 경우 1을 빼줌
  return answer - 1;
}
