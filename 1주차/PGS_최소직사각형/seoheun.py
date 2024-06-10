def solution(sizes):
    answer = 0
    big_x = 0
    big_y = 0
    
    for size in sizes:
        if size[0] > size[1]:
            temp = size[0]
            size[0] = size[1]
            size[1] = temp
    
    for size in sizes:
        if big_x < size[0]:
            big_x = size[0]
        if big_y < size[1]:
            big_y = size[1]
        
    answer = big_x * big_y
    
    return answer