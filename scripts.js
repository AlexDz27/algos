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
console.log(sortArrayUnique(arrWithDuplicates)); // -> ["Eat", empty, "Do", empty, "Create"]

//////////////

// Binary search - Finds position of element by its value
const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
function binarySearch(arr, searchedElem) {
  let foundElemPos;

  let lowestIndex = 0;
  let highestIndex = arr.length - 1;
  let middleIndex;

  let middleElem;

  for (; lowestIndex <= highestIndex;) {
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
console.log(binarySearch(testArr, 3)); // -> 2

//////////////

// Selection sort - Sorts the array -> array becomes sorted in ascending order
const testArr21 = [5, 3, 0, 7, 4, 8, 12, 20, 6, 11, 18];
function selectionSort(arr) {
  let sortedArr = [];
  let initialArrLength = arr.length;
  
  for (let i = 0; i < initialArrLength; i++) {
    let smallestIndex = 0;
    let smallestEl = arr[smallestIndex];

    for (let j = 1; j < arr.length; j++) {
      if (smallestEl > arr[j]) {
        smallestIndex = j;
        smallestEl = arr[smallestIndex];
      }
    }

    sortedArr.push(arr.splice(smallestIndex, 1).pop());
  }
  
  return sortedArr;
}
console.log(selectionSort(testArr21)); // -> [0, 3, 4, 5, 6, 7, 8, 11, 12, 18, 20]

/////////////////////////

// Complex array filter. What it does:
// 0) Places values in ascending order: [[25, 50], [0, 20]] -> [[0, 20], [25, 50]]
// 1) Duplicate values: [[0, 100], [0, 100]] -> [[0, 100]]
// 2) Intersecting values: [[0, 100], [50, 75]] -> [[0, 100]]
const arr21 = [[100, 600], [200, 300], [250, 275], [600, 700], [700, 900], [900, 1000], [1500, 2000], [1600, 1700]];
function sortComplex(arr) {
  // Placing values in ascending order
  let sortedArr = [];
  const arrInitialLength = arr.length;

  for (let i = 0; i < arrInitialLength; i++) {
    let smallestIndex = 0;
    let smallestInterval = arr[smallestIndex];

    for (let j = 1; j < arr.length; j++) {
      if (smallestInterval[0] > arr[j][0]) {
        smallestIndex = j;
        smallestInterval = arr[smallestIndex];
      }
    }

    sortedArr.push(arr.splice(smallestIndex, 1).pop());
  }

  // Logic
  let newIntervals = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let good = sortedArr[i];

    for (let j = 1; j < sortedArr.length; j++) {
      let next = sortedArr[j];

      if (i === j) {
        continue;
      }

      if (i === sortedArr.length - 1 && i > j) {
        continue;
      }

      if (good[0] < next[0] && good[1] > next[1]) {
        sortedArr.splice(j, 1);
        j -= 1;

        continue;
      }

      if (good[1] === next[0]) {
        good[1] = next[1];

        sortedArr.splice(j, 1);
        j -= 1;

        continue;
      }
    }

    newIntervals.push(good);
  }

  return newIntervals;
}
console.log(sortComplex(arr21)); // -> [[100, 1000], [1500, 2000]]

////////////////

// Reverse string
function reverseString(str) {
  let newStr = '';
  const strMaxIndex = str.length - 1;
  for (let i = strMaxIndex; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
console.log(reverseString('hello')); // -> olleh

/////////////////////

// Factorial
function fact(number) {
  let res = number;

  if (number !== 1) {
    res *= fact(number - 1);
  }

  return res;
}
console.log(fact(4)); // -> 24

/////////////////////

// Find the Longest Word in a String
function findLongestWordLength(str) {
  const strArray = str.split(' ');
  const strArrayLength = strArray.length;

  let longestItemLength = strArray[0].length;
  for (let i = 1; i < strArrayLength; i++) {
    if (strArray[i].length > longestItemLength) {
      longestItemLength = strArray[i].length;
    }
  }

  return longestItemLength;
}
console.log(findLongestWordLength("Long cat on me")); // -> 4

/////////////////////

// Return sum of numbers till the number specified in func param (via for loop and via recursion)
function sumToViaLoop(number) {
  let res = 0;

  for (let i = number; i > 0; i--) {
    res += i;
  }

  return res;
}
console.log(sumToViaLoop(4));
function sumToViaRecursion(number) {
  let res = number;

  if (number > 1) {
    res += sumToViaRecursion(number - 1);
  }

  return res;
}
console.log(sumToViaRecursion(4));

/////////////////////

// Sum numbers in array (via for loop, via recursion)
function getSumOfNumbersArrayViaLoop(numbersArray) {
  let result = 0;
  const numbersArrayLength = numbersArray.length;

  for (let i = 0; i < numbersArrayLength; i++) {
    result += numbersArray[i];
  }

  return result;
}
console.log(getSumOfNumbersArrayViaLoop([2, 3, 10]));
function getSumOfNumbersArrayViaRecursion(numbersArray) {
  const numbersArrayLength = numbersArray.length;
  let result = numbersArray[numbersArray.length - 1];
  numbersArray.pop();

  if (numbersArrayLength > 1) {
    result += getSumOfNumbersArrayViaRecursion(numbersArray);
  }

  return result;
}
console.log(getSumOfNumbersArrayViaRecursion([2, 3, 10]));

































































