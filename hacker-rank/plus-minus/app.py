# https://www.hackerrank.com/challenges/plus-minus/problem


def plusMinus(arr):
  positive = 0
  negative = 0
  zero = 0
  
  for num in arr:
    if num > 0:
      positive += 1
    elif num < 0:
      negative += 1
    else:
      zero += 1
  # print(positive / len(arr))
  # print(negative / len(arr))
  # print(zero / len(arr))
  print(format(positive / len(arr), '.6f'))
  print(format(negative / len(arr), '.6f'))
  print(format(zero / len(arr), '.6f'))
  # print(float(format(positive / len(arr), '.6f')))
  # print(float(format(negative / len(arr), '.6f')))
  # print(float(format(zero / len(arr), '.6f')))
  # print(float('{0:.6f}'.format(positive / len(arr))))
  # print(float('{0:.6f}'.format(negative / len(arr))))
  # print(float('{0:.6f}'.format(zero / len(arr))))

plusMinus([-4, 3, -9, 0, 4, 1]) # 0.500000, 0.333333, 0.166667