// 내 풀이 - 테스트 10만 시간초과
function mySolution(number, k) {
    let arr = number.split("").map((item) => Number(item));
    let i = 0;

    while (k > 0) {
        if (arr[i] < arr[i + 1]) {
            arr.splice(i, 1);
            k--;
            i--;
            if (i < 0) i = 0;
        } else {
            i++;
        }

        if (k > 0 && arr.length === i) {
            arr.splice(arr.length - 1, k);
            break;
        }
    }

    return arr.join("");
}

// 검색한 방법
function solution(number, k) {
    let answer = [];

    for (let i = 0; i < number.length; i++) {
        while (k > 0 && answer[answer.length - 1] < number[i]) {
            answer.pop();
            k--;
        }
        answer.push(number[i]);
    }

    answer.splice(answer.length - k, k);
    return answer.join("");
}
