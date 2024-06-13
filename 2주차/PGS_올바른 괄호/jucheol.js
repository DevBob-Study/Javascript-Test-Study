// 3차 시도 (성공) - 스택 사용
function solution(s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === "(") {
			stack.push(char);
		} else {
			if (stack.length === 0) {
				return false;
			}
			stack.pop();
		}
	}

	return stack.length === 0;
}



// 2차 시도 (성공) - 스택 미사용
function solution(s) {
    let count = 0;
    
    for (const char of s) {
        count += char === '(' ? 1 : (count > 0 ? -1 : Number.MIN_SAFE_INTEGER);
    }
    
    return count === 0;
}



// 1차 시도 (성공) - 스택 미사용
function solution(s) {
	if (s[i] == ")") {
		return false;
	}

	var count = 0;
	for (var i = 0; i < s.length; i++) {
		s[i] == "(" ? (count += 1) : (count -= 1);
		if (count < 0) return false;
	}

	return count == 0;
}
