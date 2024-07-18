function solution(n) {
    var answer = 0;
    let n_str = n.toString();

    for (let i = 0; i < n_str.length; i++) {
        answer += parseInt(n_str[i]);
    }

    return answer;
}
