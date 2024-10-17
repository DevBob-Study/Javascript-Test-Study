function solution(targets) {
    let answer = 0;
    let lastTarget = 0;

    targets.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < targets.length; i++) {
        if (lastTarget <= targets[i][0]) {
            lastTarget = targets[i][1];
            answer++;
        }
    }

    return answer;
}
