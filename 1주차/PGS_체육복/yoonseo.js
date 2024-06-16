function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);
  
  lost.forEach((l) => students[l - 1]--);
  
  
  reserve.forEach((r) => students[r - 1]++);
  
  for (let i = 0; i < n; i++) {
      if (students[i] === 0) {
          if (i > 0 && students[i - 1] === 2) {
              students[i]++;
              students[i - 1]--;
          } else if (i < n - 1 && students[i + 1] === 2) {
              students[i]++;
              students[i + 1]--;
          }
      }
  }
  
  return students.filter((student) => student > 0).length;
}