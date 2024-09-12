// 2차 시도 - 실패(시간 초과)
function solution(numbers) {
	return numbers.map(findNextNumber);
}

function findNextNumber(n) {
	if (n % 2 === 0) {
		return n + 1;
	} else {
		let rightmostZeroBit = ~n & (n + 1);
		return n + rightmostZeroBit - (rightmostZeroBit >> 1);
	}
}

// 1차 시도 - 실패(시간 초과)
function solution(numbers) {
	let result = [];

	for (let i = 0; i < numbers.length; i++) {
		let num = numbers[i];
		let next = num + 1;

		while (true) {
			let binaryNum = num.toString(2).padStart(50, "0");
			let binaryNext = next.toString(2).padStart(50, "0");

			let diffCount = 0;
			for (let j = 0; j < 50; j++) {
				if (binaryNum[j] !== binaryNext[j]) {
					diffCount++;
				}
			}

			if (diffCount <= 2) {
				result.push(next);
				break;
			}

			next++;
		}
	}

	return result;
}
