function solution(arr) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0) {
            answer.push(arr[i]);
        } else {
            if (arr[i] !== answer[answer.length - 1]) {
                answer.push(arr[i]);
            }
        }
    }

    return answer;
}

let start = new Date(); // 시작
solution([1, 1, 3, 3, 0, 1, 1]);
let end = new Date(); // 종료

console.log(end - start); // 경과시간 (밀리초)
