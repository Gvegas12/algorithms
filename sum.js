const arr = Array.from(Array(4).keys());

function sum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let total = 0;
  for (let x in arr) {
    total += x;
  }
  return total;
}

console.log(sum(arr));
