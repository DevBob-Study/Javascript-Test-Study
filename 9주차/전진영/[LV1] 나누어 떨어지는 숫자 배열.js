function solution(arr, divisor) {
  var answer = [];
  //1차: for문 사용
  //     for(let item of arr){
  //         if(item%divisor===0){
  //             answer.push(item)
  // ;        }
  //     }

  //2차: filter 사용
  answer = arr.filter((item) => item % divisor === 0);
  console.log(answer);
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
