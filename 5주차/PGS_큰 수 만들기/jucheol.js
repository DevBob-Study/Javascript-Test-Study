// 2차 시도 (성공)
function solution(number, k) {
	const stack = [];
	for (let num of number) {
		while (k > 0 && stack[stack.length - 1] < num) {
			stack.pop();
			k--;
		}
		stack.push(num);
	}
	stack.splice(stack.length - k, k);
	return stack.join("");
}



// 1차 시도 (성공)
function solution(number, k) {
	const stack = [];
	let count = 0;

	for (let i = 0; i < number.length; i++) {
		const current = number[i];

		while (count < k && stack.length > 0 && stack[stack.length - 1] < current) {
			stack.pop();
			count++;
		}

		if (stack.length < number.length - k) {
			stack.push(current);
		}
	}

	return stack.join("");
}
