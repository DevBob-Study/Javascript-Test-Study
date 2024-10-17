import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split()) 
graph = [list(map(int, input().rstrip())) for _ in range(n)]

# 벽 부수고 이동하기 (검색 참고)
# tip : 벽을 뚫지 않은 경우 [0] 뚫은 경우 [1] 두 가지 루트를 모두 기록

visited = [[[0, 0] for _ in range(m)] for _ in range(n)]

px = [1, -1, 0, 0]
py = [0, 0, 1, -1]

def bfs():
	que = deque()
	que.append([0, 0, 0]) 
	visited[0][0][0] = 1

	while que:
		x, y, b = que.popleft()
		
		if x == n - 1 and y == m - 1:
			return visited[x][y][b]

		for i in range(4):
			posX, posY = x + px[i], y + py[i]

			if 0 <= posX < n and 0 <= posY < m:
					# 벽일 경우 + 부수지 않았을 경우 -> 부순 루트는 [1]에서 이어서 저장
					if graph[posX][posY] == 1 and b == 0: 
						visited[posX][posY][1] = visited[x][y][0] + 1
						que.append([posX, posY, 1])
					
					# 아닐 경우 + 방문하지 않았을 경우 -> [0]으로 계속 저장
					if graph[posX][posY] == 0 and visited[posX][posY][b] == 0:
						visited[posX][posY][b] = visited[x][y][b] + 1
						que.append([posX, posY, b])

	return -1

print(bfs())