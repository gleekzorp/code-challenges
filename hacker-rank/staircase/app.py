# https://www.hackerrank.com/challenges/staircase/problem

def staircase(n):
  spaces = n - 1
  for step in range(1, n + 1):
    print(" " * spaces + '#' * step)
    spaces -= 1

staircase(6)