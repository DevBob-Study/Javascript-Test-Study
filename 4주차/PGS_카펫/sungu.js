function solution(brown, yellow) {
  const sum = brown + yellow;
  for (let i = 3; i < brown; i++) {
    if (sum % i == 0 && (sum / i - 2) * (i - 2) == yellow) {
      return [sum / i, i];
    }
  }
}
