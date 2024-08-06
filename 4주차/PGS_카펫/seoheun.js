function solution(brown, yellow) {
    var answer = [];

    let pair = [];

    // 약수
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            pair.push(i);
        }
    }

    let total = brown + yellow;

    for (let i = 0; i < pair.length; i++) {
        let temp = yellow / pair[i];
        if (pair[i] * 2 + temp * 2 + 4 === brown) {
            answer = [pair[i] + 2, temp + 2];
            return answer.reverse();
        }
    }
}
