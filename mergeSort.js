const array1 = [10, 20, 30];
const array2 = [8, 18, 31, 40];

const mergeStep = (array1, array2) => {
  // On commence avec deux tableaux triés, array1 et array2, ainsi qu'un tableau vide result qui servira à stocker la fusion triée des deux tableaux.

  let i = 0;
  let j = 0;
  const result = [];

  while (i < array1.length && j < array2.length) {
    // À chaque étape, on sélectionne l'élément le plus petit parmi les éléments actuellement pointés par les indices i et j.
    if (array1[i] < array2[j]) {
      // On ajoute cet élément sélectionné à result, et on avance l'indice correspondant.
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  //Après avoir épuisé l'un des deux tableaux, il peut rester des éléments dans l'autre tableau => on ajoute tous les éléments restants de ce tableau à la fin de result.
  if (i == array1.length) {
    while (j < array2.length) {
      result.push(array2[j]);
      j++;
    }
  }
  if (j == array2.length) {
    while (i < array1.length) {
      result.push(array1[i]);
      i++;
    }
  }
  // On retourne result
  return result;
};

const array3 = [11, 22, 64, 72];

const mergeSort = array => {
  if (array.length <= 1) return array;
  // console.log('initial array is ' + array);
  let mid = Math.floor(array.length / 2);
  let leftSliced = array.slice(0, mid);
  // console.log('left sliced array is ' + leftSliced);
  let left = mergeSort(leftSliced);
  // console.log('left is ' + left);
  let rightSliced = array.slice(mid);
  // console.log('right sliced array is ' + rightSliced);
  let right = mergeSort(array.slice(mid));
  // console.log('right is ' + right);
  return mergeStep(left, right);
};

// console.log('final array is ' + mergeSort(array3));

console.log(mergeStep(array1, array2));
