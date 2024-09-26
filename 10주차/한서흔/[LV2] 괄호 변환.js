function solution(p) {
    let answer = "";

    let temp = [];
    let reverse_temp = [];

    if (p === "") return "";

    for (let i = 0; i < p.length; i++) {
        if (p[i] === "(") {
            if (reverse_temp.length === 0) {
                temp.push(p[i]);
                answer += p[i];
            } else {
                reverse_temp.pop();
                answer += ")";
            }
        } else {
            if (temp.length !== 0) {
                if (reverse_temp.length === 0) {
                    temp.pop();
                    answer += p[i];
                }
            } else {
                reverse_temp.push(p[i]);
                answer += "(";
            }
        }
    }

    return answer;
}
