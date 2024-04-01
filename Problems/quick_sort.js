function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
  return array;
}

function partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // Swap array[i] and array[j]
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap array[i+1] and array[high] (pivot)
  return i + 1; // Return the index of the pivot
}

const array = [-6, 20, 8, -2, 4];
console.log(quickSort(array)); // Output: [-6, -2, 4, 8, 20]
