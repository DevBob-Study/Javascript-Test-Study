// 1차 시도 (성공)
function solution(expression) {
    const operators = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*']
    ];
    
    const calculate = (a, b, operator) => {
        switch(operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
        }
    };
    
    const evaluate = (tokens, priority) => {
        for (let op of priority) {
            for (let i = 1; i < tokens.length - 1; i += 2) {
                if (tokens[i] === op) {
                    const result = calculate(Number(tokens[i-1]), Number(tokens[i+1]), op);
                    tokens.splice(i-1, 3, result);
                    i -= 2;
                }
            }
        }
        return Math.abs(tokens[0]);
    };
    
    const tokens = expression.match(/(\d+|[+\-*])/g);
    
    return Math.max(...operators.map(op => evaluate([...tokens], op)));
}