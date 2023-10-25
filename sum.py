arr = [*range(4)]

def sum(arr):
    if len(arr) == 0:
        return 0
    if len(arr) == 1:
        return arr[0]
    
    total = 0
    for x in arr:
        total += x
    return total

print(sum(arr))