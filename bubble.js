function bubbleSort(arr) {
  let swap = 1;
  let i = 0;
  let l = 0;
  let count = 0;
  while (swap) {
    i = 0;
    swap = 0;

    while (i < arr.length - l) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = 1;
      }
      i += 1;
    }
    l -= 1;
  }

  console.log(count);
  return arr;
}

module.exports = bubbleSort;
