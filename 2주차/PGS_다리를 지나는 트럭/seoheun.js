function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let temp = 0;

    let truck = [];
    let bridge_truck = [];

    for (let i = 0; i < truck_weights.length; i++) {
        truck_weights[i] = [truck_weights[i], 0];
    }

    while (true) {
        truck = truck_weights.shift();
        if (temp + truck[0] <= weight) {
            temp += truck[0];
            bridge_truck.push(truck);
            for (let i = 0; i < bridge_truck.length; i++) {
                bridge_truck[i][1] += 1;
            }
        } else {
            truck_weights.unshift(truck);
            for (let i = 0; i < bridge_truck.length; i++) {
                bridge_truck[i][1] += 1;
            }
        }

        answer += 1;

        for (let i = 0; i < bridge_truck.length; i++) {
            if (bridge_truck[i][1] === bridge_length) {
                temp -= bridge_truck[i][0];
                bridge_truck.splice(i, 1);
            }
        }

        if (truck_weights.length === 0) {
            return answer + bridge_length;
        }
    }
}

// 풀이: https://dev-birdfeet.tistory.com/6
