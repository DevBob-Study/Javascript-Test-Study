// 조합 사용
function solution(orders, course) {
    let answer = [];

    let menuList = []; // order.split 저장할 배열

    for (let count of course) {
        let menus = new Map();
        for (let order of orders) {
            menuList = order.split("");
            // course 메뉴 개수에 맞춘 모든 조합 배열 구하기
            let combinations = getCombination(menuList, count);
            // 오름차순 정렬 후 해시 테이블에 저장
            combinations.forEach((combs) => {
                let comb = combs.sort().join("");
                if (menus.has(comb)) {
                    let temp = menus.get(comb);
                    menus.set(comb, temp + 1);
                } else {
                    menus.set(comb, 1);
                }
            });
        }

        // 가장 많이 주문된 횟수 파악
        let topMenu = [...menus.values()].sort((a, b) => b - a)[0];

        // 가장 많이 주문된 횟수와 같은 조합 + 2번 이상 주문되었을 경우 push
        for (let menu of menus) {
            if (menu[1] === topMenu && menu[1] >= 2) {
                answer.push(menu[0]);
            }
        }
    }

    return answer.sort();
}

function getCombination(arr, selectNumber) {
    const results = [];

    // nC1 계산 시 모든 배열의 원소를 return
    if (selectNumber === 1) return arr.map((v) => [v]);

    // 조합 구하기
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map((v) => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
}
