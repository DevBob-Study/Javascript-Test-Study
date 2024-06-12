// 4차 시도 (성공)
function solution(prices) {
	// prices 배열의 각 요소에 대해 콜백 함수를 실행하고 결과를 모아 새로운 배열 answer를 생성해야 함
	const answer = prices.map((_, i) => {
		let count = 0;
		// 가격이 떨어지지 않은 기간을 저장할 변수

		// 현재 시점 i 이후의 가격들을 비교하기 위한 반복문
		for (let j = i + 1; j < prices.length; j++) {
			count++;
			// 가격이 떨어지지 않은 기간을 증가시킴

			// 현재 시점의 가격이 이후 시점의 가격보다 크면 (가격이 떨어지면)
			if (prices[i] > prices[j]) {
				break;
				// 반복문 종료
			}
		}
		return count;
		// 가격이 떨어지지 않은 기간을 반환
	});

	return answer;
	// 결과 배열 반환
}

// 3차 시도 (성공)
function solution(prices) {
	const answer = new Array(prices.length).fill(0);
	// 결과를 저장할 배열 초기화
	const stack = [];
	// 스택 초기화

	// prices 배열을 순회하면서
	for (let i = 0; i < prices.length; i++) {
		// 스택이 비어있지 않고, 현재 가격이 스택의 top에 있는 인덱스의 가격보다 작으면 (가격이 떨어지면)
		while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
			const j = stack.pop();
			// 스택에서 인덱스를 꺼냄

			answer[j] = i - j;
			// 현재 인덱스와 스택에서 꺼낸 인덱스의 차이를 결과 배열에 저장
		}
		stack.push(i);
		// 현재 인덱스를 스택에 push
	}

	// 배열 순회가 끝난 후에도 스택에 남아있는 인덱스들 처리
	while (stack.length) {
		const j = stack.pop();
		// 스택에서 인덱스를 꺼냄
		answer[j] = prices.length - 1 - j;
		// 배열의 마지막 인덱스와 스택에서 꺼낸 인덱스의 차이를 결과 배열에 저장
	}

	return answer;
	// 결과 배열 반환
}



// 2차 시도 (성공)
function solution(prices) {
	const answer = [];

	for (let i = 0; i < prices.length; i++) {
		let count = 0;
		for (let j = i + 1; j < prices.length; j++) {
			count++;
			if (prices[i] > prices[j]) {
				break;
			}
		}
		answer.push(count);
	}

	return answer;
}



// 1차 시도 (실패) - 시간 초과
function solution(prices) {
	const answer = new Array(prices.length).fill(0);

	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			answer[i]++;
			if (prices[i] > prices[j]) {
				break;
			}
		}
	}

	return answer;
}
