from math import floor

def binarySearch(list, item):
    low = 0
    high = len(list) - 1
    
    while low <= high:
        mid = floor((low + high) / 2)
        guess = list[mid]
        
        if guess == item:
            return item
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None    
    
print(binarySearch([*range(1, 100)], 49))