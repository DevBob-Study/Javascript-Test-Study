# 자력으로 풀지 못함

def solution(participant, completion):
    participaneDic = {}
    sumHash = 0

    for value in participant:
        partHash = hash(value)
        participaneDic[partHash] = value
        sumHash += partHash
    
    for complete in completion:
        sumHash -= hash(complete)
        
    return participaneDic[sumHash]