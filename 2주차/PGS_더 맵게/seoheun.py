# 답 수식 참고

import heapq

def solution(scoville, K):
    answer = 0

    heapq.heapify(scoville)
    
    while scoville[0] < K:
        first_small = heapq.heappop(scoville)
        second_small = heapq.heappop(scoville) * 2
        result = first_small + second_small
        heapq.heappush(scoville, result)
        answer += 1
        if len(scoville) == 1 and scoville[0] < K:
            return -1
    
    return answer 