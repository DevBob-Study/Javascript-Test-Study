// 1차 시도 (성공)
function solution(k, tangerine) {
	// 귤의 크기별 개수를 저장할 객체 생성
	let sizeCount = {};

	// 귤의 크기별 개수 계산
	for (let size of tangerine) {
		if (sizeCount[size]) {
			sizeCount[size] += 1;
		} else {
			sizeCount[size] = 1;
		}
	}

	// 개수를 기준으로 내림차순 정렬
	let sortedCounts = Object.values(sizeCount).sort((a, b) => b - a);

	// 필요한 개수(k)를 채우기 위한 변수 초기화
	let sum = 0;
	let kindCount = 0;

	// 필요한 개수(k)를 채울 때까지 큰 그룹부터 선택
	for (let count of sortedCounts) {
		sum += count;
		kindCount += 1;

		// 필요한 개수를 채웠다면 반복 중단
		if (sum >= k) {
			break;
		}
	}

	// 결과 반환
	return kindCount;
}
