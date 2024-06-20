// 검색 참고 - 재귀 함수 사용

function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({ length: dungeons.length }, () => false);

    function DFS(hp, count) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }

    DFS(k, 0);

    return answer;
}
