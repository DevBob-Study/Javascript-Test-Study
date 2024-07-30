// 1차 시도 (성공)
function solution(p) {
	// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환
	if (p === "") return "";

	// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리
	let u = "",
		v = "";
	let count = 0;

	for (let i = 0; i < p.length; i++) {
		if (p[i] === "(") count++;
		else count--;

		// u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 함
		if (count === 0) {
			u = p.slice(0, i + 1);
			v = p.slice(i + 1);
			break;
		}
	}

	// 3. 문자열 u가 "올바른 괄호 문자열" 이라면
	if (isCorrect(u)) {
		// 3-1. 문자열 v에 대해 1단계부터 다시 수행
		return u + solution(v);
	} else {
		// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면
		let result = "("; // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙임
		result += solution(v); // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙임
		result += ")"; // 4-3. ')'를 다시 붙임

		// 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
		for (let i = 1; i < u.length - 1; i++) {
			result += u[i] === "(" ? ")" : "(";
		}

		// 4-5. 생성된 문자열을 반환
		return result;
	}
}

// 주어진 문자열이 "올바른 괄호 문자열"인지 확인하는 함수
function isCorrect(str) {
	let count = 0;
	for (let char of str) {
		if (char === "(") count++;
		else count--;
		if (count < 0) return false; // 닫는 괄호가 더 많아지면 올바르지 않음
	}
	return count === 0; // 최종적으로 괄호의 개수가 맞아야 함
}
