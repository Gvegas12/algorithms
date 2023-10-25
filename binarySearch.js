let i = 0;
const binarySearch = (list, item) => {
  let low = 0; // Нижний index
  let high = list.length - 1; // Верхний индекс

  while (low <= high) {
    i += 1;
    const middle = Math.floor((low + high) / 2); // Средний индекс
    const guess = list[middle]; // Предположение

    if (guess === item) {
      return middle;
    } else if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
};

console.log(binarySearch(Array.from(new Array(128).keys()), 50), i);
