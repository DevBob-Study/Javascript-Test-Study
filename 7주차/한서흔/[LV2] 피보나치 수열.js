// 1차 시도 - 실패
function solution(n) {
    let sum = 1;

    const F = (n) => {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else if (n > 1) {
            return F(n - 1) + F(n - 2);
        }
    };

    return F(n) % 1234567;
}

// 2차 시도 - 성공
function solution(n) {
    let answer = 0;
    let first = 0;
    let last = 1;

    for (let i = 2; i <= n; i++) {
        answer = (first + last) % 1234567;
        first = last;
        last = answer;
    }

    return answer;
}
