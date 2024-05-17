const array = [114, 21, 12, 1, 1022];

const insertionSort0 = array => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let leftNeighbor = i - 1;
    while (leftNeighbor >= 0 && current < array[leftNeighbor]) {
      array[leftNeighbor + 1] = array[leftNeighbor];
      console.log('intermediate array is ' + array);
      leftNeighbor--;
    }
    array[leftNeighbor + 1] = current;
    console.log('array is ' + array);
  }
  return array;
};

const insertionSort1 = array => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

// console.log(insertionSort0(array));
// console.log(insertionSort1(array));
