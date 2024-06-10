function solution(prices) {
  let answer = [];

  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    count = 0;
    for (let next = i + 1; next < prices.length; next++) {
      count++;
      if (prices[i] > prices[next]) {
        break;
      }
    }
    answer.push(count);
  }

  //console.log(answer);
  return answer;
}
