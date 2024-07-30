function solution(str1, str2) {
  // 두 글자씩 끊어서 다중집합 만들기
  function makeSet(str) {
      const set = [];
      for (let i = 0; i < str.length - 1; i++) {
          const element = str.substr(i, 2).toLowerCase();
          if (element.match(/^[a-z]{2}$/)) {
              set.push(element);
          }
      }
      return set;
  }

  const set1 = makeSet(str1);
  const set2 = makeSet(str2);

  // 교집합과 합집합 계산
  const intersection = [];
  const union = [];
  const set1Copy = [...set1];

  for (const element of set2) {
      if (set1Copy.includes(element)) {
          intersection.push(element);
          set1Copy.splice(set1Copy.indexOf(element), 1);
      }
      union.push(element);
  }

  for (const element of set1Copy) {
      union.push(element);
  }

  // 자카드 유사도 계산
  if (union.length === 0) return 65536;
  const similarity = intersection.length / union.length;
  return Math.floor(similarity * 65536);
}