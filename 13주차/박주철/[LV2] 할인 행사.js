function solution(want, number, discount) {
	let answer = 0;

	const wantList = {};
	want.forEach((item, index) => {
		wantList[item] = number[index];
	});

	function checkDiscount(start) {
		const discountList = {};

		for (let i = start; i < start + 10; i++) {e
			const item = discount[i];
			discountList[item] = (discountList[item] || 0) + 1;
		}

		for (let item in wantList) {
			if (wantList[item] !== discountList[item]) {
				return false;
			}
		}

		return true;
	}

	for (let i = 0; i <= discount.length - 10; i++) {
		if (checkDiscount(i)) {
			answer++;
		}
	}

	return answer;
}
