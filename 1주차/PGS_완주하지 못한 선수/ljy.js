// 완주하지 못한 선수
function solution(participant, completion) {
  // 두 가지의 배열을 모두 sort로 정렬 시켜준다.
  participant.sort();
  completion.sort();

  // 배열을 순회하면서 두 가지 배열을 비교한다.
  // 이때 completion 배열의 길이는 participant 보다 1 작기 때문에 completion 배열의 모든 요소와 일치하지 않는 첫번째 participant 요소가 완주하지 못한 선수이다.
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 이 역시 Chat GPT에게 물어본 결과 해시 알고리즘을 사용하지 않은 코드였고, GPT가 알려준 해시 알고리즘 답안은 아래와 같습니다.

function GPTSolution(participant, completion) {
  let participantMap = new Map();

  // 참가자의 이름을 키로, 빈도를 값으로 저장
  for (let p of participant) {
    participantMap.set(p, (participantMap.get(p) || 0) + 1);
  }

  // 완주한 사람의 이름의 빈도를 감소
  for (let c of completion) {
    participantMap.set(c, participantMap.get(c) - 1);
  }

  // 값이 1인 이름을 찾기
  for (let [key, value] of participantMap) {
    if (value > 0) {
      return key;
    }
  }
}

// 문제를 처음 풀 때는 막연하게 배열 길이를 보고 풀어야겠다고 생각하였는데,
// 빈도수를 이용하여 해시 맵으로 풀어나가는 생각이 참신했다.
// 실제로 배열을 순회하는 것보다 키/값으로 찾는게 훨씬 빠르다고 하니 해시맵을 사용하는 것을 연습해야겠다고 생각함.
