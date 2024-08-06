//  혼자 해결 x

function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && number[i] > arr[arr.length - 1]) {
      arr.pop();
      k--;
    }
    arr.push(number[i]);
  }
  arr.splice(arr.length - k, k);
  return arr.join("");
}
