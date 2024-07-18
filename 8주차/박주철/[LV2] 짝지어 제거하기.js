// 2차 시도 (실패) - 시간 초과
function solution(s) {
	const stack = [];
	for (let char of s) {
		stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
	}
	return Number(stack.length === 0);
}



// 1차 시도 (성공)
function solution(s) {
	var stack = [];
	for (var i = 0; i < s.length; i++) {
		if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
			stack.push(s[i]);
		} else {
			stack.pop();
		}
	}
	return stack.length === 0 ? 1 : 0;
}
