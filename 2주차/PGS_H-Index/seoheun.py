# 답 참고 풀이

def solution(citations):
    
    citations.sort(reverse = True)
    
    for idx, citation in enumerate(citations):
        if idx >= citation:
            return idx
    return len(citations) # 모든 값이 같은 경우