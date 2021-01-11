# https://www.hackerrank.com/challenges/grading/problem

# Pseudo

# math problem:
# base * round(num / base)
#   example: 5 * round(73 / 5)
#       5 * round(14.6)
#       5 * 15
#       75

# Check if below 37
#   return num
# check num to nearest 5 - num < 3
#   return num to nearest 5
# else
#   return num

"""
My solution
"""
# def gradingStudents(grades):
#   result = []
#   for num in grades:
#     base = 5
#     rounded_num = base * math.ceil(num/base)
#     if num <= 37:
#       result.append(num)
#       print(num)
#     elif rounded_num - num < 3:
#       result.append(rounded_num)            
#       print(rounded_num)
#     else:
#       result.append(num)            
#       print(num)
#   return result

# print(gradingStudents([73, 67, 38, 33])) # should return [75, 67, 40, 33]





"""
Solution from discusssion using modulus
"""
# def gradingStudents(grades):
#   result = []
#   for grade in grades:
#     if grade >= 38:
#       if grade % 5 == 3:
#         grade += 2
#       elif grade % 5 == 4:
#         grade += 1
#     result.append(grade)
#   return result

# print(gradingStudents([73, 67, 38, 33])) # should return [75, 67, 40, 33]





"""
Solution from discusssion using modulus but shortened
"""
# def gradingStudents(grades):
#   result = []
#   for grade in grades:
#     if grade >= 38:
#       if grade % 5 > 2:
#         grade += 5 - (grade % 5)
#     result.append(grade)
#   return result

# print(gradingStudents([73, 67, 38, 33])) # should return [75, 67, 40, 33]
