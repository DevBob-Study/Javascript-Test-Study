def solution(x):

    numSum=0
    num=x
    while(num>0):
        numSum+=num%10
        num=num//10
    #print(x, numSum)
    if(x%numSum==0):
        return True
    else:
        return False
