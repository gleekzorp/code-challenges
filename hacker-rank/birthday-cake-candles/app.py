# https://www.hackerrank.com/challenges/birthday-cake-candles/problem

def birthdayCakeCandles(candles):
  largest_number = max(candles)
  def how_many_equal_largest(num):
    if num == largest_number:
      return True
    else:
      return False
  result = filter(how_many_equal_largest, candles)
  return len(list(result))
