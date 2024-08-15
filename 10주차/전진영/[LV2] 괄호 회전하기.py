def solution(s):
    answer=0
    # 현재 문자열이 올바른 괄호인지?
    def isRight(s):
        stack=[]
        
        for char in s:
            if(char=='('or char=='[' or char== '{'):
                stack.append(char)
            else:
                if len(stack)==0: return False
                current=stack.pop()
                if char==')' and current != '(':
                    return False
                elif char=='}' and current!= '{':
                    return False
                elif char==']' and current!= '[':
                    return False
        return len(stack) == 0
        
    
    for x in range(0,len(s)): #0<=x<len(s) 만큼 반복
        #회전을 시키고
        s=s[1:len(s)]+s[0]
        #올바른 괄호열인지 체크
        if isRight(s):
            answer+=1 #올바른 괄호가 되는 횟수를 누적한다.
            
        # print(s,isRight(s))
        
    return answer