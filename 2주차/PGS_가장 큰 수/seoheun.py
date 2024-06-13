# 답 참고 풀이

def solution(numbers):
    arr = []
    for num in numbers:
        arr.append(str(num))
        
    arr.sort(key = lambda x: x * 3, reverse = True)
    
    return str(int(''.join(arr))) # 00 을 0 으로