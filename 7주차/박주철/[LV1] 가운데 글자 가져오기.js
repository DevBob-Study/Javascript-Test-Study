// 2차 시도 (성공)
function solution(s) {
	return !s.length % 2 ? s.substr(s.length / 2 - 1, 2) : s.substr(s.length / 2, 1);
}



// 2차 시도 (성공)
function solution(s) {
	// 문자열의 길이를 구합니다.
	const length = s.length;

	// 문자열의 중간 인덱스를 계산합니다.
	const middleIndex = Math.floor(length / 2);

	// 문자열의 길이가 홀수인 경우
	if (length % 2 !== 0) {
		// 가운데 한 글자만 반환합니다.
		return s[middleIndex];
	} else {
		// 문자열의 길이가 짝수인 경우
		// 가운데 두 글자를 반환합니다.
		return s[middleIndex - 1] + s[middleIndex];
	}
}
