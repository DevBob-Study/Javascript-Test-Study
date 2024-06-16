function solution(sizes) {
  var answer = 0;
  var w_max = 0, h_max = 0;

  for (var i = 0; i < sizes.length; i++) {
      if (sizes[i][1] > sizes[i][0]) {
          var temp = sizes[i][1];
          sizes[i][1] = sizes[i][0];
          sizes[i][0] = temp;
      }
      w_max = Math.max(w_max, sizes[i][0]);
      h_max = Math.max(h_max, sizes[i][1]);
  }
  answer = w_max * h_max;
  return answer;
}
