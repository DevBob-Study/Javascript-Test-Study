// 문제 통과는 못했지만 일단 테스트 케이스는 통과해서... (23.1%)

function solution(n, wires) {
    let result = [];

    for (let i = 0; i < wires.length; i++) {
        let temp = wires.filter((value) => value !== wires[i]);
        let include = [wires[i][0]];
        for (let j = 0; j < temp.length; j++) {
            if (include.includes(temp[j][0])) {
                include.push(temp[j][1]);
            } else if (include.includes(temp[j][1])) {
                include.push(temp[j][0]);
            }
        }
        result.push(include.length);
    }

    return Math.abs(n - 2 * Math.max(...result));
}
