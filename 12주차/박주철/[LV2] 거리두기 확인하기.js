// 1차 시도 (성공)
function solution(places) {
  const result = [];
  
  for (let room of places) {
      let isValid = true;
      
      for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
              if (room[i][j] === 'P') {
                  if (!checkNearby(room, i, j)) {
                      isValid = false;
                      break;
                  }
              }
          }
          if (!isValid) break;
      }
      
      result.push(isValid ? 1 : 0);
  }
  
  return result;
}

function checkNearby(room, row, col) {
  if (
      (row > 0 && room[row-1][col] === 'P') ||
      (row < 4 && room[row+1][col] === 'P') ||
      (col > 0 && room[row][col-1] === 'P') ||
      (col < 4 && room[row][col+1] === 'P')
  ) {
      return false;
  }
  
  if (
      (row > 0 && col > 0 && room[row-1][col-1] === 'P' && (room[row-1][col] !== 'X' || room[row][col-1] !== 'X')) ||
      (row > 0 && col < 4 && room[row-1][col+1] === 'P' && (room[row-1][col] !== 'X' || room[row][col+1] !== 'X')) ||
      (row < 4 && col > 0 && room[row+1][col-1] === 'P' && (room[row+1][col] !== 'X' || room[row][col-1] !== 'X')) ||
      (row < 4 && col < 4 && room[row+1][col+1] === 'P' && (room[row+1][col] !== 'X' || room[row][col+1] !== 'X'))
  ) {
      return false;
  }
  
  if (
      (row > 1 && room[row-2][col] === 'P' && room[row-1][col] !== 'X') ||
      (row < 3 && room[row+2][col] === 'P' && room[row+1][col] !== 'X') ||
      (col > 1 && room[row][col-2] === 'P' && room[row][col-1] !== 'X') ||
      (col < 3 && room[row][col+2] === 'P' && room[row][col+1] !== 'X')
  ) {
      return false;
  }
  
  return true;
}