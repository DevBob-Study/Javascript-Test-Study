#https://school.programmers.co.kr/learn/courses/30/lessons/12980
def solution(n):
    energy=0
    pos=n
    while(pos>0):
        if(pos%2==0):# 짝수면
            pos//=2
        else: #홀수면
            pos-=1
            energy=energy+1
            pos//=2
        #print(pos,energy)
    
    return energy