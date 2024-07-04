// 1차 시도
function solution(routes) {
    var answer = 0;

    const findAnswer = (routeList) => {
        routeList.sort((a, b) => a[0] - b[0]);
        let startLine = routes[0];
        routeList.shift();

        routeList.sort((a, b) => b[1] - a[1]);
        let endLine = routes[0];
        routeList.shift();

        answer = answer + 2;

        let outOfStart = routes.filter((value) => startLine[1] < value[0]);
        let outOfEnd = routes.filter((value) => value[1] < endLine[0]);
        let new_routes = [...outOfStart, ...outOfEnd];

        if (new_routes.length < 3) {
            return answer;
        } else {
            findAnswer(new_routes);
        }
    };

    let result = findAnswer(routes);

    return result;
}

// AI 피드백을 받은 2차 시도 - 성공
function solution(routes) {
    var answer = 0;

    while (routes.length > 0) {
        routes.sort((a, b) => a[1] - b[1]);
        let startLine = routes[0];
        routes.shift();

        let routesLeft = routes.filter((value) => value[0] > startLine[1]);
        if (routesLeft.length > 0) {
            answer++;
        }

        routes = routesLeft;
    }

    return answer + 1;
}
