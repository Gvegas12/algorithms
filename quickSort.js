const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const less = arr.filter((item) => item < pivot);
  const greater = arr.filter((item) => item > pivot);

  return quickSort(less).concat([pivot]).concat(greater);
};

const arr = [30, 15, 10, 40];
console.log(quickSort(arr));
