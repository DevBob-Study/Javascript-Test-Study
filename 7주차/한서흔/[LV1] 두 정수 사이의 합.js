function solution(a, b) {
    var answer = 0;

    let num = [a, b].sort((a, b) => a - b);

    for (let i = num[0]; i <= num[1]; i++) {
        answer += i;
    }

    return answer;
}
