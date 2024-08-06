// 검색 참고

function solution(numbers) {
    var answer = [];

    let num_arr = numbers.split("");

    const isPrime = (num) => {
        if (num === 1 || num === 0) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        // 소수일 경우
        return true;
    };

    const DFS = (arr, str) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const temp = Math.abs(str + arr[i]);
                const nums = [...arr];
                nums.splice(i, 1);
                if (!answer.includes(temp) && isPrime(temp)) {
                    answer.push(temp);
                }
                DFS(nums, temp);
            }
        }
    };

    DFS(num_arr, "");
    return answer.length;
}
