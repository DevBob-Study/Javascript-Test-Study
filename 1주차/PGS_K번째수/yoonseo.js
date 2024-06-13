function solution(array, commands) {
  const answer = [];
  var i = 0;

  for (i = 0; i < commands.length; i++) {
      const [start,end,k] = commands[i];
      const slicedArray = array.slice(start-1,end);
      // console.log(slicedArray);
      const sortedArray = slicedArray.sort((a,b) => (a-b));
      // console.log(sortedArray);
      answer[i]=sortedArray[k-1];
  }

  return answer;
}