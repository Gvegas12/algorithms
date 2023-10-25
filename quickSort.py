def quikcSort(arr):
    if len(arr) < 2:
        return arr
    pivot = arr[0]
    less = [i for i in arr[1:] if i < pivot]
    greater = [i for i in arr[1:] if i > pivot]
    
    return quikcSort(less) + [pivot] + quikcSort(greater)

arr = [30, 15, 10, 40]
print(quikcSort(arr))