// 최소직사각형
function solution(sizes) {
  // sizes 배열의 각 요소를 오름차순으로 정렬한다.
  // 이를 통해 각 카드의 작은 값이 첫 번째 요소에, 큰 값이 두 번째 요소에 위치하게 된다.
  sizes.map((size) => size.sort((a, b) => a - b));
  // 각 카드의 첫 번째 요소들 중 최대값을 width에 저장하고, 두 번째 요소들 중 최대값을 height에 저장한다.
  const width = Math.max(...sizes.map((size) => size[0]));
  const height = Math.max(...sizes.map((size) => size[1]));
  // width, height를 곱하여 반환
  return width * height;
}
