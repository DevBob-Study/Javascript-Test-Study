// https://velog.io/@haegu97/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD

//스스로 해결하지 못한 문제

function solution(bridge_length, weight, truck_weights) {
  let onBridge = new Array(bridge_length).fill(0); // 다리의 길이만큼 0으로 채운다.
  let answer = 0; // 시간 초기화

  while (onBridge.length) {
    // 다리에 트럭이 있으면 계속 반복문 진행
    answer++; // 반복문 진행될 때마다 1초 추가
    onBridge.shift(); // 끝에 있는 트럭 다리에서 내림

    if (truck_weights.length) {
      // 대기중인 트럭 있으면 대기중인 트럭과 현재 다리에 있는 트럭의 총 무게 합이 다리가 버틸 수 있는 무게와 비교해서 진행
      let onBridgeSum = 0;

      onBridge.forEach((truck) => {
        onBridgeSum += truck;
      });

      if (onBridgeSum + truck_weights[0] <= weight) {
        // 다리가 버틸 수 있는 무게 넘지 않으면 대기중인 트럭 다리에 올림
        onBridge.push(truck_weights.shift());
      } else {
        // 넘으면 0으로 채움.(다리 길이 유지해야하기 떄문)
        onBridge.push(0);
      }
    }
  }

  return answer;
}
