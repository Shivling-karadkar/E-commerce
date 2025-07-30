# Input: , k = 3
# Output: [-1,3,4]
# Explanation: 
# The subsequence has the largest sum of -1 + 3 + 4 = 6.

# nums = [-1,-2,3,4]
# k=3

# # nums = [3,4,3,3]
# # k = 2


# nums.sort()

# a=nums[::-1]
# # print(a)

# result=a[:k]
# # final=result[::-1] 10 case passed

# print(result[::-1])

    
nums = [3,4,3,3]
k=3
indexed_nums = list(enumerate(nums))
# print(indexed_nums)
indexed_nums.sort(key=lambda x:x[1])
# print(indexed_nums[-k:])
a=[]
for i in indexed_nums[-k:]:
    a.append(i[1])
print(a)

    