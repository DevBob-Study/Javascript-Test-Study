function solution(arr1, arr2) {
    return arr1.map((v) => {
        let temp = [];
        for (let i = 0; i < arr2[0].length; i++) {
            // 이해가 잘 안되는군
            let sum = 0;
            for (let j = 0; j < v.length; j++) {
                sum += v[j] * arr2[j][i];
            }
            temp.push(sum);
        }
        return temp;
    });
}
