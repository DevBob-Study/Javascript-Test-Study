function calculate(x, numbers, operators) {
    if (x === "*") {
        while (operators.indexOf(x) > -1) {
            let index = operators.indexOf(x);
            operators.splice(index, 1);
            let sumArr = numbers.splice(index, 2);

            numbers.splice(index, 0, sumArr[0] * sumArr[1]);
        }
        return numbers;
    } else if (x === "+") {
        while (operators.indexOf(x) > -1) {
            let index = operators.indexOf(x);
            operators.splice(index, 1);
            let sumArr = numbers.splice(index, 2);

            numbers.splice(index, 0, sumArr[0] + sumArr[1]);
        }
        return numbers;
    } else {
        while (operators.indexOf(x) > -1) {
            let index = operators.indexOf(x);
            operators.splice(index, 1);
            let sumArr = numbers.splice(index, 2);

            numbers.splice(index, 0, sumArr[0] - sumArr[1]);
        }
        return numbers;
    }
}

function solution(expression) {
    var answer = 0;

    let numbers = [];
    let operators = [];
    let temp = "";

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== "*" && expression[i] !== "+" && expression[i] !== "-") {
            temp += expression[i];
        } else {
            numbers.push(Number(temp));
            temp = "";
            operators.push(expression[i]);
        }
    }

    numbers.push(Number(temp));

    let order = [
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["-", "*", "+"],
        ["-", "+", "*"],
    ];

    let result = [];

    for (let i = 0; i < order.length; i++) {
        let numTemp = [...numbers];
        let opTemp = [...operators];
        for (let x = 0; x < 3; x++) {
            calculate(order[i][x], numTemp, opTemp);
        }
        result.push(Math.abs(numTemp[0]));
    }

    return result.sort((a, b) => b - a)[0];
}
