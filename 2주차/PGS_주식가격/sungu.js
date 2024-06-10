function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let tmp = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        tmp++;
        break;
      } else {
        tmp++;
      }
    }
    answer.push(tmp);
  }
  return answer;
}
