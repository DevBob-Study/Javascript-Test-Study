def solution(answers):
    answer = { 1: 0, 2: 0, 3: 0 }
    
    student1 = [1, 2, 3, 4, 5] # 5
    student2 = [2, 1, 2, 3, 2, 4, 2, 5] # 8
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] # 10
    
    for i in range(len(answers)):
        if answers[i] == student1[i % 5]:
            answer[1] += 1
        if answers[i] == student2[i % 8]:
            answer[2] += 1
        if answers[i] == student3[i % 10]:
            answer[3] += 1
    
    result = answer[1]
    keyList = []
        
    for key in range(1, 4):
        if result < answer[key]:
            result = answer[key]
            keyList = []
            keyList.append(key)
        elif result == answer[key]:
            keyList.append(key)

    keyList.sort()
            
    return keyList