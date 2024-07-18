function solution(n) {
    var answer = "";

    let wm = Math.floor(n / 2);
    while (wm > 0) {
        answer += "수박";
        wm -= 1;
    }

    if (n % 2 === 1) {
        answer += "수";
    }

    return answer;
}
