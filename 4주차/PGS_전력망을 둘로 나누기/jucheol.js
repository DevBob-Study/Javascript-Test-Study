// 2차 시도 (성공)
function solution(n, wires) {
    let minDiff = n;
    const connections = {};

    wires.forEach(([a, b]) => {
        connections[a] = connections[a] || [];
        connections[b] = connections[b] || [];
        connections[a].push(b);
        connections[b].push(a);
    });

    function countNodes(start, except) {
        let count = 1;
        const visited = new Set([start]);
        const queue = [start];

        while (queue.length) {
            const node = queue.shift();
            for (const next of connections[node]) {
                if (next !== except && !visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                    count++;
                }
            }
        }
        return count;
    }

    wires.forEach(([a, b]) => {
        const diff = Math.abs(countNodes(a, b) - countNodes(b, a));
        minDiff = Math.min(minDiff, diff);
    });

    return minDiff;
}



// 1차 시도 (성공)
function solution(n, wires) {
    let minDifference = Infinity;

    function buildNetwork() {
        let network = {};
        for (let i = 1; i <= n; i++) {
            network[i] = [];
        }
        for (let [a, b] of wires) {
            network[a].push(b);
            network[b].push(a);
        }
        return network;
    }

    function countConnectedTowers(start, except) {
        let visited = new Set();
        let stack = [start];
        while (stack.length > 0) {
            let current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                for (let neighbor of network[current]) {
                    if (neighbor !== except) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return visited.size;
    }

    let network = buildNetwork();

    for (let [a, b] of wires) {
        let count1 = countConnectedTowers(a, b);
        let count2 = n - count1;
        let difference = Math.abs(count1 - count2);
        minDifference = Math.min(minDifference, difference);
    }

    return minDifference;
}