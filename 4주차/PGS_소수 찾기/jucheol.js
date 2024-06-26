// 2차 시도 (성공)
function solution(numbers) {
	const nums = numbers.split("");
	const set = new Set();

	function permute(arr, str = "") {
		if (str.length > 0) {
			set.add(Number(str));
		}

		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
				permute(newArr, str + arr[i]);
			}
		}
	}

	function isPrime(num) {
		if (num < 2) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	permute(nums);

	return [...set].filter(isPrime).length;
}



// 1차 시도 (실패) - 시간 초과
function solution(numbers) {
	const digits = numbers.split("");
	const primes = new Set();

	function generateNumber(current, remaining) {
		if (current !== "" && isPrime(parseInt(current))) {
			primes.add(parseInt(current));
		}

		for (let i = 0; i < remaining.length; i++) {
			const newCurrent = current + remaining[i];
			const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
			generateNumber(newCurrent, newRemaining);
		}
	}

	function isPrime(num) {
		if (num < 2) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	generateNumber("", digits);
	return primes.size;
}
