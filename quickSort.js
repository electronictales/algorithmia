const array = [4, 6, 9, 1, 2];
// const array1 = [4, 6, 9, 1, 2, 5, 3];
// const array2 = [10, 1, 24, 8, 14, 6, 12, 54, 7];

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

const swapWithLogs = (array, a, b) => {
  if (a !== b) {
    console.log("let's swap " + array[a] + ' and ' + array[b]);
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  } else {
    console.log('No swap, items are already in the right place.');
  }
};

const pivot0 = array => {
  const pivotIndex = 0;
  let counter = 0;
  for (let i = 1; i < array.length; i++) {
    // && i != pivotIndex + 1 évite de swapper si l'élément immédiatement après le pivot est plus petit que le pivot
    if (array[i] < array[pivotIndex] && i != pivotIndex + 1) {
      swapWithLogs(array, i, pivotIndex + 1 + counter);
      counter++;
      console.log(array);
    }
  }
  swapWithLogs(array, pivotIndex, counter);
  console.log('final array is ' + array);
};

const pivot1 = (array, start = 0) => {
  const pivotIndex = start;
  let counter = 0;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < array[pivotIndex]) {
      swapWithLogs(array, i, pivotIndex + 1 + counter);
      counter++;
      console.log(array);
    }
  }
  swapWithLogs(array, pivotIndex, counter);
  return { array, counter };
};

// le end va nous servir dans la suite
const pivot2 = (array, start = 0, end = array.length) => {
  // On va prendre le 1er élément de l'array comme pivot
  let pivotIndex = start;

  console.log('*** At the beginning of pivot2, array is : ' + array + ' ***');
  console.log(
    '*** At the beginning of pivot2, pivotIndex is : ' + pivotIndex + ' ***'
  );

  console.log("Let's loop from " + start + ' to ' + end + '.');

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[start]) {
      pivotIndex++;
      console.log('Incrementing pivotIndex. It is now ' + pivotIndex + '.');
      swapWithLogs(array, i, pivotIndex);
      console.log('Intermediate array is : ' + array);
    }
  }

  console.log(
    "Let's do the final swap. Swapping  " +
      array[start] +
      ' and ' +
      array[pivotIndex] +
      '.'
  );

  swapWithLogs(array, start, pivotIndex);

  console.log('*** At the end of pivot2, array is : ' + array + ' ***');
  console.log('Returned pivotIndex is ' + pivotIndex + '.');
  console.log('\n');

  return pivotIndex;
};

const quickSortWithLogs = (array, left, right) => {
  console.log(
    'Calling quicksort. ' +
      'Left is ' +
      left +
      ', right is ' +
      right +
      '.'
  );
  if (left < right) {
    let pivotIndex = pivot2(array, left, right);
    console.log('pivotIndex is ' + pivotIndex);
    quickSort(array, left, pivotIndex - 1, 'left');
    quickSort(array, pivotIndex + 1, right, 'right');
  }
  console.log(
    'Exiting quicksort. ' +
      'Left is ' +
      left +
      ', right is ' +
      right +
      '.'
  );
  return array;
};

const quickSort = (array, left, right) => {
  console.log('Left is ' + left + ', right is ' + right + '.');
  if (left < right) {
    let pivotIndex = pivot2(array, left, right);
    console.log('Pivot index is ' + pivotIndex + '.');
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log('initial array is : ' + array);
console.log('\n');
console.log(quickSort(array, 0, array.length - 1));
