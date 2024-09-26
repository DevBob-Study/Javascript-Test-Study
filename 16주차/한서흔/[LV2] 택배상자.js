function solution(order) {
    let count = 0;
    let extra = [];
    let temp = 1;

    for (const box of order) {
        while (temp < box) {
            extra.push(temp);
            temp++;
        }

        if (extra[extra.length - 1] === box) {
            extra.pop();
            count++;
        } else if (temp === box) {
            temp++;
            count++;
        } else {
            break;
        }
    }

    return count;
}
