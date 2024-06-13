def solution(prices):
    answer = []
    count = 0
    
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            if prices[i] <= prices[j]:
                count += 1
            else:
                count += 1
                break
        answer.append(count)
        count = 0
    
    return answer