// 2차 시도 (성공)
function solution(seoul) {
	return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}



// 1차 시도 (성공)
function solution(seoul) {
	// seoul 배열을 순회하면서 "Kim"의 인덱스를 찾음
	for (let i = 0; i < seoul.length; i++) {
		if (seoul[i] === "Kim") {
			// "Kim"을 찾으면 결과 문자열을 반환
			return `김서방은 ${i}에 있다`;
		}
	}
}
