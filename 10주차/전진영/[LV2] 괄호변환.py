# 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
# 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
# 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
#   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
# 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
#   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
#   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
#   4-3. ')'를 다시 붙입니다. 
#   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
#   4-5. 생성된 문자열을 반환합니다.
    
#올바른 괄호
def isRight(p):
    stack=[]
    for i in range(0,len(p)):
        if p[i]=='(':
            stack.append(p[i])
        else: # )이면
            if(len(stack)==0):
                return False
            stack.pop()
    return True

# 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
def seperateUV(p):
    open=0
    close=0
    for i in range(len(p)):
        if p[i]=='(':
            open+=1
        else:
            close+=1
        if open == close:
            return p[:i+1], p[i+1:]
    return p,''
            
def solution(p):
    answer = ''
       
    if len(p)==0:
        return p
    u,v =seperateUV(p)
    if isRight(u):
        return u+solution(v)
    else:
        answer='('
        answer+=solution(v)
        answer+=')'
        for i in range(1, len(u)-1):
            if u[i]=='(':
                answer+=')'
            else:
                answer+='('
        return answer
            