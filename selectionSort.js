/**
 * Находит и возвращает наименьшее число в массиве
 * @param {Number[]} arr
 * @returns {Number} Наименьшее число в массиве
 */
function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

/**
 * Сортировка выбором
 * @param {Number[]} arr
 * @param {Function} cb
 * @returns {Number[]}
 */
function selectionSort(arr) {
  const newArr = [];
  const currentArr = [...arr];
  for (_ in arr) {
    const smallest_index = findSmallest(currentArr);
    newArr.push(currentArr.splice(smallest_index, 1)[0]);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
