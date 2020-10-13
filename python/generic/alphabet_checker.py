# Build out a function that checks to see if the string includes all the letters in the alphabet

""" Won't work with odd characters like !/_*"""
def alphabet_checker(string):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    string_sorted_duplicates_removed = sorted(set(string.lower().replace(" ", "")))
    if "".join(string_sorted_duplicates_removed) == alphabet:
        return True
    else:
        return False

print(alphabet_checker('hello'))
print(alphabet_checker('The quick brown fox jumped over the lazy dog'))
print(alphabet_checker('The quick brown fox jumps over the lazy dog'))
print(alphabet_checker('The quick brown fox jumps over the lazy dog!/_*'))
print(alphabet_checker('abcdefghijklmnopqrstuvwxyzasda'))


""" Regex to clean up odd characters like !/_*"""
# import re
# def alphabet_checker(string):
#     alphabet = 'abcdefghijklmnopqrstuvwxyz'
#     string_stripped = re.sub('[^A-Za-z0-9]+', '', string)
#     string_duplicates_removed = set(string_stripped.lower())
#     string_sorted = sorted(string_duplicates_removed)
#     if "".join(string_sorted) == alphabet:
#         return True
#     else:
#         return False

# print(alphabet_checker('hello'))
# print(alphabet_checker('The quick brown fox jumped over the lazy dog'))
# print(alphabet_checker('The quick brown fox jumps over the lazy dog'))
# print(alphabet_checker('The quick brown fox jumps over the lazy dog!/_*'))
# print(alphabet_checker('abcdefghijklmnopqrstuvwxyzasda'))
