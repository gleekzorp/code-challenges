# https://www.hackerrank.com/challenges/time-conversion/problem


# 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 AM
# 12 = 0

# 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 PM
# 12 = 12
# every other number you need to add 12
# example: 1 + 12 = 13

def timeConversion(s):
  split = s.split(':')
  hour = split[0]
  minutes = split[1]
  seconds = split[2][0:2]
  period = split[2][2:]
  if period == 'AM':
    return f'{"00" if hour == "12" else hour}:{minutes}:{seconds}'
  else:
    return f'{"12" if hour == "12" else int(hour) + 12}:{minutes}:{seconds}'

print(timeConversion('07:05:45PM')) # should return 19:05:45
print(timeConversion('12:01:00AM')) # should return 00:01:00
print(timeConversion('01:01:00AM')) # should return 01:01:00