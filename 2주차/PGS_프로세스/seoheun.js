// 답 참고 풀이

function solution(priorities, location) {
    var answer = 0;
    let prior_list = [];

    for (let i = 0; i < priorities.length; i++) {
        prior_list[i] = [i, priorities[i]];
    }

    while (true) {
        have = false;
        temp = prior_list.shift();
        for (let i = 0; i < prior_list.length; i++) {
            if (prior_list[i][1] > temp[1]) {
                have = true;
                prior_list.push(temp);
                break;
            }
        }
        if (!have) {
            answer += 1;
            if (temp[0] == location) return answer;
        }
    }
}
