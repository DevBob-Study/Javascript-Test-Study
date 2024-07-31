// 1차 시도 (성공)
function solution(s) {
	// 올바른 괄호 문자열인지 확인하는 함수
	function isValid(str) {
		const stack = [];
		const opens = "({[";
		const closes = ")}]";

		for (let char of str) {
			if (opens.includes(char)) {
				stack.push(char);
			} else {
				if (stack.length === 0) return false;
				const lastOpen = stack.pop();
				if (opens.indexOf(lastOpen) !== closes.indexOf(char)) return false;
			}
		}

		return stack.length === 0;
	}

	let count = 0;
	const len = s.length;

	// 문자열을 회전시키면서 각 경우를 확인
	for (let i = 0; i < len; i++) {
		const rotated = s.slice(i) + s.slice(0, i);
		if (isValid(rotated)) count++;
	}

	return count;
}
