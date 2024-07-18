// 4차 시도
function solution(s) {
    let arr = s.split("");

    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer[answer.length - 1] === arr[i]) {
            answer.pop();
        } else {
            answer.push(arr[i]);
        }
    }

    if (answer.length === 0) {
        return 1;
    } else return 0;
}
