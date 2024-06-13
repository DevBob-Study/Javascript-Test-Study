def solution(progresses, speeds):
    times = []
    
    for i in range(len(progresses)):
        remain = 100 - progresses[i]
        if remain % speeds[i] == 0:
            times.append(remain // speeds[i])
        elif remain % speeds[i] != 0:
            times.append((remain // speeds[i]) + 1)
            
    answer = [1]
    j = 0
    day = times[0]
    
    for k in range(1, len(times)):
        if times[k] <= day:
            answer[j] += 1
        elif times[k] > day:
            day = times[k]
            j += 1
            answer.append(1)
        
    return answer