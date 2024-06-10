// 3차 시도 (성공) - 이거 미친 듯;;; 겨우 풀었음;;; 이게 어떻게 2단계야;;;
class MinHeap {
	constructor() {
		this.heap = [];
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return 2 * index + 1;
	}

	getRightChildIndex(index) {
		return 2 * index + 2;
	}

	swap(index1, index2) {
		const temp = this.heap[index1];
		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}

	push(value) {
		this.heap.push(value);
		let currentIndex = this.heap.length - 1;
		let parentIndex = this.getParentIndex(currentIndex);

		while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
			this.swap(currentIndex, parentIndex);
			currentIndex = parentIndex;
			parentIndex = this.getParentIndex(currentIndex);
		}
	}

	pop() {
		if (this.isEmpty()) return null;
		if (this.heap.length === 1) return this.heap.pop();

		const root = this.heap[0];
		this.heap[0] = this.heap.pop();

		let currentIndex = 0;
		let leftChildIndex = this.getLeftChildIndex(currentIndex);
		let rightChildIndex = this.getRightChildIndex(currentIndex);

		while (
			(leftChildIndex < this.heap.length && this.heap[currentIndex] > this.heap[leftChildIndex]) ||
			(rightChildIndex < this.heap.length && this.heap[currentIndex] > this.heap[rightChildIndex])
		) {
			const smallerChildIndex =
				rightChildIndex >= this.heap.length || this.heap[leftChildIndex] < this.heap[rightChildIndex]
					? leftChildIndex
					: rightChildIndex;

			this.swap(currentIndex, smallerChildIndex);
			currentIndex = smallerChildIndex;
			leftChildIndex = this.getLeftChildIndex(currentIndex);
			rightChildIndex = this.getRightChildIndex(currentIndex);
		}

		return root;
	}

	isEmpty() {
		return this.heap.length === 0;
	}
}

function solution(scoville, K) {
	const minHeap = new MinHeap();

	for (let i = 0; i < scoville.length; i++) {
		minHeap.push(scoville[i]);
	}

	let count = 0;

	while (minHeap.heap[0] < K) {
		if (minHeap.heap.length === 1) return -1;

		const first = minHeap.pop();
		const second = minHeap.pop();
		const mixed = first + second * 2;

		minHeap.push(mixed);
		count++;
	}

	return count;
}



// 2차 시도 (실패) - 시간 초과
function solution(scoville, K) {
	let count = 0;
	scoville.sort((a, b) => a - b);

	while (scoville[0] < K) {
		if (scoville.length === 1) return -1;

		const first = scoville.shift();
		const second = scoville.shift();
		const mixed = first + second * 2;

		scoville.push(mixed);
		scoville.sort((a, b) => a - b);
		count++;
	}

	return count;
}



// 1차 시도 (실패)
function solution(scoville, K) {
	let count = 0;

	while (scoville[0] < K) {
		if (scoville.length === 1) {
			return -1;
		}

		scoville.sort((a, b) => a - b);
		const first = scoville.shift();
		const second = scoville.shift();
		const mixed = first + second * 2;
		scoville.push(mixed);
		count++;
	}

	return count;
}
