//  1차 시도 -> 실패
function solution(people, limit) {
  let answer = 1;
  let tmp = 0;
  people.sort((a, b) => a - b);
  for (let i = 0; i < people.length; i++) {
    if (tmp + people[i] > limit) {
      tmp = people[i];
      answer++;
    } else {
      tmp += people[i];
    }
  }
  return answer;
}

//  2차 시도 -> 성공 25m
function solution(people, limit) {
  var answer = 0;
  let start = 0;
  let end = people.length - 1;
  people.sort((a, b) => a - b);
  while (start <= end) {
    answer++;
    if (people[end] + people[start] <= limit) {
      start++;
      end--;
    } else {
      end--;
    }
  }
  return answer;
}
