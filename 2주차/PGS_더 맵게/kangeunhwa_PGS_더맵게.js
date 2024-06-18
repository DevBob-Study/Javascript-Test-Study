class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  // 주어진 모든 스코빌 지수를 최소 힙에 삽입
  for (let s of scoville) {
    minHeap.insert(s);
  }

  let answer = 0;

  // 힙의 최솟값이 K 이상이 될 때까지 반복
  while (minHeap.size() > 1 && minHeap.peek() < K) {
    // 가장 맵지 않은 두 개의 스코빌 지수를 추출하여 섞음
    const first = minHeap.extractMin();
    const second = minHeap.extractMin();
    const newScoville = first + second * 2;

    // 새로운 스코빌 지수를 힙에 삽입
    minHeap.insert(newScoville);
    answer++;
  }

  // 모든 음식의 스코빌 지수가 K 이상이 될 수 없는 경우
  if (minHeap.peek() < K) {
    return -1;
  }

  return answer;
}
