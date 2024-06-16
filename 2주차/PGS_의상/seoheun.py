# 답 참고 풀이

def solution(clothes):
    count_cloth = {}
    
    for cloth in clothes:
        if cloth[1] in count_cloth.keys():
            count_cloth[cloth[1]] += 1
        else:
            count_cloth[cloth[1]] = 1
    
    count_list = list(count_cloth.values())
    
    result = 1
    for i in count_list:
        result *= (i + 1)
        
    return result - 1 # 아무것도 해당되지 않는 경우 제외