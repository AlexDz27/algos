// Removes duplicate values in array
const dupArr1 = ['Eat', 'strell', 'sto', 'do', 'Eat', 'sleep', 'strell', 'do', 'stuff'];
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pivot = arr[i];

    for (let j = 1; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      let compared = arr[j];

      if (pivot === compared) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
}
console.log(removeDuplicates(dupArr1)); // ["Eat", "strell", "sto", "do", "sleep", "stuff"]

//////////////

// Binary search - Finds position of element by its value
function calcMiddleIndex(lowestIndex, highestIndex) {
  return Math.floor((highestIndex + lowestIndex) / 2);
}
function binarySearch(arr, searchValue) {
  let lowestIndex = 0;
  let highestIndex = arr.length - 1;

  while (lowestIndex <= highestIndex) {
    let midIndex = calcMiddleIndex(lowestIndex, highestIndex);
    let guessValue = arr[midIndex];

    if (guessValue === searchValue) {
      return midIndex;
    }

    if (guessValue > searchValue) {
      highestIndex = midIndex - 1;
    }

    if (guessValue < searchValue) {
      lowestIndex = midIndex + 1;
    }
  }

  return 'No such a search value found';
}
console.log(binarySearch([2, 5, 10, 15, 20, 25], 6666)); // No such a search value found
console.log(binarySearch([2, 5, 10, 15, 20, 25, 30, 35], 15));// 3

//////////////

// Selection sort - Sorts the array -> array becomes sorted in ascending order
function selectionSort(arr) {
  let resultArr = [];
  let arrLength = arr.length;

  while (resultArr.length !== arrLength) {
    let pivotIndex = 0;
    let pivot = arr[pivotIndex];

    for (let j = 1; j < arrLength; j++) {
      let compared = arr[j];

      if (compared < pivot) {
        pivot = compared;
        pivotIndex = j;
      }
    }

    arr.splice(pivotIndex, 1);

    resultArr.push(pivot);
  }

  return resultArr;
}
console.log(selectionSort([120, -120, -1, -5, 2, 1, 1000, 0, 10])); // [-120, -5, -1, 0, 1, 2, 10, 120, 1000]

/////////////////////////

// Complex array filter. What it does:
// 0) Places values in ascending order: [[25, 50], [0, 20]] -> [[0, 20], [25, 50]]
// 1) Removes duplicate values: [[0, 100], [0, 100]] -> [[0, 100]]
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
  let result = numbersArray[numbersArrayLength - 1];
  numbersArray.pop();

  if (numbersArrayLength > 1) {
    result += getSumOfNumbersArrayViaRecursion(numbersArray);
  }

  return result;
}

console.log(getSumOfNumbersArrayViaRecursion([2, 3, 10]));

/////////////////////

// Find biggest number in array
function findBiggestNumberInArrayViaLoop(numbersArray) {
  let max = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    let nextMax = numbersArray[i];
    if (max < nextMax) {
      max = nextMax;
    }
  }

  return max;
}

console.log(findBiggestNumberInArrayViaLoop([10, 20, 40, 30]));

function findBiggestNumberInArrayViaRecursion(numbersArray) {
  let max = numbersArray[0];
  let nextMax = numbersArray[1];

  if (numbersArray.length > 2) {
    numbersArray.shift();
    let recursionMax = findBiggestNumberInArrayViaRecursion(numbersArray);
    if (recursionMax > max) {
      max = recursionMax;
    }
  }

  if (nextMax > max) {
    max = nextMax;
  }

  return max;
}

console.log(findBiggestNumberInArrayViaRecursion([100, 1000, 10, 20, 50, 30, 60, 0]));

/////////////////////

// Fibanacci sequence - finds fibanacci element by its position
function fib(pos) {
  let fibArr = [0, 1, 1];

  for (let i = 3; i <= pos; i++) {
    let nextFiNumber = fibArr[i - 1] + fibArr[i - 2];

    fibArr.push(nextFiNumber);
  }

  return fibArr[pos];
}
console.log(fib(77)); // 5527939700884757

/////////////////////

// Quick sort - sorts the array in ascending order
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  if (arr.length === 2) {
    let resultArr = [];

    let pivot = arr[0];
    let compared = arr[1];

    if (pivot > compared) {
      resultArr.push(compared);
      resultArr.push(pivot);
    } else {
      resultArr.push(pivot);
      resultArr.push(compared);
    }

    return resultArr;
  }

  let midIndex = calcMiddleIndex(0, arr.length - 1);
  let pivot = arr[midIndex];
  let lessArr = [];
  let moreArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) {
      continue;
    }

    let compared = arr[i];

    if (pivot > compared) {
      lessArr.push(compared);
    } else {
      moreArr.push(compared);
    }
  }

  return Array.prototype.concat(quickSort(lessArr), pivot, quickSort(moreArr));
}
console.log(quickSort([5, 2, 10, 100, 1, -100, 8, 10000, 450])); // [-100, 1, 2, 5, 8, 10, 100, 450, 10000]




























































