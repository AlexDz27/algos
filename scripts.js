// Removes duplicate values in array
const arrWithDuplicates = ['Eat', 'Eat', 'Do', 'Eat', 'Create', 'Do'];
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
sortArrayUnique(arrWithDuplicates);

//////////////

// Binary search - Finds position of element by its value
const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
function binarySearch(arr, searchedElem) {
  let foundElemPos;

  let lowestIndex = 0;
  let highestIndex = arr.length - 1;
  let middleIndex;

  let middleElem;

  for (let i = 0; i < 10; i++) {
    middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
    middleElem = arr[middleIndex];

    if (searchedElem === middleElem) {
      foundElemPos = middleIndex;
      break;
    }

    if (searchedElem < middleElem) {
      highestIndex = middleIndex - 1;
    }

    if (searchedElem > middleElem) {
      lowestIndex = middleIndex + 1;
    }
  }

  return foundElemPos;
}
console.log('RESULT: ' + binarySearch(testArr, 3));

//////////////












