// Sort unique values in array
const arrWithDuplicates = ['Eat', 'Eat', 'Do', 'Eat', 'Create', 'Do'];
/**
 *
 * @param arr
 * @returns {Array}
 */
function sortArrayUnique(arr) {
  let cleanArr = [];

  outer: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < cleanArr.length; j++) {
      if (cleanArr[i - 1] === arr[j]) {
        continue outer;
      }
    }

    cleanArr[i] = arr[i];
  }

  return cleanArr;
}

console.log(sortArrayUnique(arrWithDuplicates));

//////////////

