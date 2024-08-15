// 1차 시도 (성공)
function solution(s) {
	// 압축된 문자열 중 가장 짧은 길이를 저장할 변수
	// 초기값은 원본 문자열의 길이
	let minLength = s.length;

	// 1부터 문자열 길이의 절반까지 단위로 반복
	// 문자열의 절반 이상으로 자르면 압축 효과가 없으므로 절반까지만 시도
	for (let i = 1; i <= Math.floor(s.length / 2); i++) {
		// 현재 단위(i)로 압축한 문자열을 저장할 변수
		let compressed = "";
		// 현재 비교 중인 문자열의 반복 횟수
		let count = 1;
		// 이전에 처리한 문자열 단위를 저장
		let prev = s.slice(0, i);

		// 문자열을 i 길이만큼 잘라가며 비교
		for (let j = i; j < s.length; j += i) {
			// 현재 비교할 문자열 단위
			const current = s.slice(j, j + i);

			if (prev === current) {
				// 이전 단위와 현재 단위가 같으면 카운트 증가
				count++;
			} else {
				// 다르면 지금까지의 결과를 압축 문자열에 추가
				// count가 1보다 크면 숫자를 포함, 아니면 생략
				compressed += (count > 1 ? count : "") + prev;
				// 다음 비교를 위해 현재 단위를 이전 단위로 설정
				prev = current;
				// 카운트 초기화
				count = 1;
			}
		}

		// 마지막 단위 처리 (루프에서 처리되지 않은 나머지)
		compressed += (count > 1 ? count : "") + prev;

		// 현재 압축 결과와 기존의 최소 길이를 비교하여 더 작은 값을 저장
		minLength = Math.min(minLength, compressed.length);
	}

	// 가장 짧은 압축 길이 반환
	return minLength;
}
