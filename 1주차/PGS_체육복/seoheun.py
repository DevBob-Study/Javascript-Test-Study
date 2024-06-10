def solution(n, lost, reserve):
    result = n - len(lost)
    
    ex = []
    
    lost.sort()
    reserve.sort()
    
    for no in lost:
        for yes in reserve:
            if yes == no:
                result += 1
                ex.append(no)
                reserve.remove(yes)
    
    for ex_item in ex:
        for no in lost:
            if ex_item == no:
                lost.remove(no)
                
    for no in lost:
        for yes in reserve:
            print(no, yes)
            if yes - 1 == no or yes + 1 == no:
                result += 1
                no = None
                reserve.remove(yes)
    
    return result
            