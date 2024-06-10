def solution(nums):
    num = len(nums)/2
    num_type = len(list(set(nums)))
    
    if num <= num_type:
        # 만약 종류가 고를 수 있는 개수와 같거나 클 경우 -> num개
        return num
    else:
        # 종류가 고를 수 있는 개수보다 작을 경우 -> num_type개
        return num_type