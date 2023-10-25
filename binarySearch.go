package main

import "fmt"

func binarySearch(list [128]int, item int) int {
	low := 0
	high := len(list) - 1

	for low <= high {
		middle := low + high/2
		guess := list[middle]

		if guess == item {
			return middle
		} else if guess > item {
			high = middle - 1
		} else {
			low = middle - 1
		}
	}

	return -1
}

func main() {
	arr := [128]int{}

	for i := 0; i < 128; i++ {
		arr[i] = i
	}

	fmt.Print(binarySearch(arr, 12))
}
