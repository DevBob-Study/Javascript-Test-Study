//3차 시도 - 성공
function solution(topping) {
	const brother = new Map();
	const cheolsu = new Map();
	let fair = 0;
	let bTypes = 0,
		cTypes = 0;

	for (let i of topping) {
		brother.set(i, (brother.get(i) || 0) + 1);
		if (brother.get(i) === 1) {
			bTypes++;
		}
	}

	for (let i of topping) {
		if (!cheolsu.has(i)) {
			cTypes++;
		}
		cheolsu.set(i, (cheolsu.get(i) || 0) + 1);
		brother.set(i, brother.get(i) - 1);
		if (brother.get(i) === 0) {
			bTypes--;
    }
		if (cTypes === bTypes) {
			fair++;
		}
	}

	return fair;
}

//2차 시도 - 성공
function solution(topping) {
	let answer = 0;

	let brotherToppings = new Map();
	let cheolsuToppings = new Map();

	let brotherTypes = 0;
	let cheolsuTypes = 0;

	for (let i of topping) {
		if (!brotherToppings.has(i)) {
			brotherToppings.set(i, 1);
			brotherTypes++;
		} else {
			brotherToppings.set(i, brotherToppings.get(i) + 1);
		}
	}

	for (let i of topping) {
		if (!cheolsuToppings.has(i)) {
			cheolsuToppings.set(i, 1);
			cheolsuTypes++;
		} else {
			cheolsuToppings.set(i, cheolsuToppings.get(i) + 1);
		}

		brotherToppings.set(i, brotherToppings.get(i) - 1);

		if (brotherToppings.get(i) === 0) {
			brotherToppings.delete(i);
			brotherTypes--;
		}
		if (cheolsuTypes === brotherTypes) {
			answer++;
		}
	}

	return answer;
}

//1차 시도 - 시간 초과
function solution(topping) {
	let answer = 0;
	let totalToppings = {};
	let cheolsuToppings = new Set();

	for (let i of topping) {
		totalToppings[i] = (totalToppings[i] || 0) + 1;
	}

	for (let i of topping) {
		cheolsuToppings.add(i);
		totalToppings[i]--;

		if (totalToppings[i] === 0) {
			delete totalToppings[i];
		}

		if (cheolsuToppings.size === Object.keys(totalToppings).length) {
			answer++;
		}
	}

	return answer;
}
