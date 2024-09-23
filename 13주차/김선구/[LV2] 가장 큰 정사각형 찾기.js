function solution(board) {
  let max = 0;

  function check(startX, startY, length) {
    for (let i = 0; i < length; i++) {
      if (
        startX + length > board.length ||
        startY + length > board[0].length ||
        board[startX + length - 1][startY + i] === 0 ||
        board[startX + i][startY + length - 1] === 0
      ) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (
          let len = 1;
          len <= Math.min(board.length - i, board[0].length - j);
          len++
        ) {
          if (check(i, j, len)) {
            max = Math.max(max, len);
          } else {
            break;
          }
        }
      }
    }
  }

  return max * max;
}
