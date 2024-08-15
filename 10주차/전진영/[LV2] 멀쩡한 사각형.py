def solution(w,h):

#1. 최대 공약수 찾고, 
    w,h = min(w,h), max(w,h)
    def getYaksu(w,h):
        yaksu=1
        minValue=min(w,h)
        for i in range (2,minValue+1):
            if(w%i ==0 and h%i ==0):
                yaksu=i
        return yaksu
            
            
    divider=getYaksu(w,h)
    # 한 유닛안에서 유닛의 가로*세로-1 만큼 못 쓰는 사각형 생긴다.: w/divider+h/divider -1
    # 전체 사각형에서 못쓰는 사각형을 뺀다.
    return w*h-(w/divider+h/divider -1)*divider