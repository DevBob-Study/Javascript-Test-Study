def solution(s):
    result = []
    
    for i in s:
        if i == ')' and len(result) != 0:
            result.pop()
        else:
            result.append(i)
                
    if len(result) == 0:
        return True
    else:
        return False