const array = [1023, 115, 1, 27, 12, 6];

const bubbleSort0 = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const bubbleSort1 = array => {
  let swapped;

  for (let i = 0; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      console.log('break');
      break;
    }
  }
  return array;
};

const bubbleSort2 = array => {
  let swapped;
  let lastUnsorted = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < lastUnsorted; j++) {
      console.log(array, array[j], array[j + 1]);
      swapped = false;
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    lastUnsorted--;
    if (!swapped) {
      console.log('break');
      break;
    }
  }
  return array;
};

const bubbleSort3 = array => {
  let swapped;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      console.log(array, array[j], array[j + 1]);
      swapped = false;
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      console.log('break');
      break;
    }
  }
  return array;
};


// console.log(bubbleSort0(array));
// console.log(bubbleSort1(array));
// console.log(bubbleSort2(array));
// console.log(bubbleSort3(array));
