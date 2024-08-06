// 3차 시도 성공
function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        let sum = i;
        for (let num = i + 1; num < n; num++) {
            sum += num;
            if (sum > n) {
                break;
            } else if (sum === n) {
                answer++;
                break;
            }
        }
    }

    return answer + 1;
}
