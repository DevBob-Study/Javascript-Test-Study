function solution(arr) {
  let deleted = [];
  deleted.push(arr[0]);
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] != arr[i - 1]) {
      deleted.push(arr[i]);
    }
  }

  return deleted;
}
