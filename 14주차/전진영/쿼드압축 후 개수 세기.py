def solution(arr):
    divSize= len(arr)
    answer=[0,0]
    
    def quad(x, y,divSize ):
        for i in range(x, x+divSize):
            for j in range(y, y+divSize):
                if arr[x][y] != arr[i][j]:
                    divSize= divSize//2
                    quad(x, y,divSize)
                    quad(x, y+divSize, divSize)
                    quad(x+divSize, y, divSize)
                    quad(x+divSize, y+divSize, divSize)
                    return
        answer[arr[x][y]]+=1
        
    quad(0,0,divSize)
    print(answer)
    return answer