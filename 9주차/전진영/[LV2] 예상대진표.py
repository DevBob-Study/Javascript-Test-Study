def solution(n,a,b):
    a,b=min(a,b), max(a,b)
    round=1
   
    def nextNum(current):
        if(current%2==0):
            current=current/2
        else:
            current=current//2+1
        return current
    
    while(true):
        if(b%2==0)&(b-a==1):
            break
        round+=1
        a=nextNum(a)
        b=nextNum(b)
    
    return round