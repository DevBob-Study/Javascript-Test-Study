// 2차 시도 (성공)
function solution(s) {
	// c: 변환 횟수, z: 제거된 0의 개수를 저장하는 변수
	let [c, z] = [0, 0];

	// s가 "1"이 될 때까지 반복
	while (s !== "1") {
		// s를 0을 기준으로 분할하고, 그 길이에서 1을 빼면 제거된 0의 개수
		// 예: "101" -> ["1", "1"] (길이 2) -> 2 - 1 = 1 (0 하나 제거됨)
		z += s.split("0").length - 1;

		// 정규표현식으로 1만 남기고, 그 개수를 2진수로 변환
		// match(/1/g): 모든 1을 배열로 반환
		// length: 1의 개수 (즉, 0을 제거한 후의 길이)
		// toString(2): 그 길이를 2진수 문자열로 변환
		s = s.match(/1/g).length.toString(2);

		// 변환 횟수 증가
		c++;
	}

	// [변환 횟수, 제거된 0의 개수] 반환
	return [c, z];
}



// 1차 시도 (성공)
function solution(s) {
	// 제거된 0의 개수를 저장하는 변수
	let zeroCount = 0;
	// 변환 횟수를 저장하는 변수
	let transformCount = 0;

	// s가 "1"이 될 때까지 반복
	while (s !== "1") {
		transformCount++; // 변환 횟수 증가

		// 0 제거 및 카운트
		const beforeLength = s.length; // 0 제거 전 길이 저장
		s = s.replace(/0/g, ""); // 모든 0을 제거
		zeroCount += beforeLength - s.length; // 제거된 0의 개수 계산

		// 현재 문자열의 길이를 2진법으로 변환
		s = s.length.toString(2);
	}

	// [변환 횟수, 제거된 0의 개수] 반환
	return [transformCount, zeroCount];
}
