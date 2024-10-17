import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split()) 

ladder = dict()
for _ in range(n):
  x, y = map(int, input().split())
  ladder[x] = y

snake = dict()
for _ in range(m):
  u, v = map(int, input().split())
  snake[u] = v

visited = [False for _ in range(101)]

dices = [1, 2, 3, 4, 5, 6]

def bfs():
  que = deque()
  que.append([1, 0])

  while que:
    pos, count = que.popleft()

    if pos == 100:
      print(count)
      break

    for dice in dices:
      next = pos + dice

      if next <= 100 and not visited[next]:
        # 사다리 처리
        if next in ladder.keys():
          next = ladder[next]
        # 뱀 처리
        elif next in snake.keys():
          next = snake[next]
        # 이동 처리 후 위치 재확인
        if not visited[next]:
          visited[next] = True
          que.append([next, count + 1])

bfs()