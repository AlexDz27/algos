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
binarySearch(testArr, 11);

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
selectionSort(testArr21);

///////////////////////////

/*const arr21 = [[100, 600], [200, 300], [250, 275], [700, 10000]];
function sortV(arr) {
  // Filtering asc
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
  const sortedArrInitialLength = sortedArr.length;

  for (let i = 0; i < sortedArr.length; i++) {
    let goodIndex = 0;
    // let goodInterval = sortedArr[goodIndex];
    let goodInterval = sortedArr[i];
    let goodAmount = goodInterval[1] - goodInterval[0];
    // console.log(goodAmount);

    for (let j = 1; j < sortedArrInitialLength; j++) {
      let next = sortedArr[j];
      if (next === undefined) {
        break;
      }

      let nextAmount = next[1] - next[0];

      console.log(goodInterval + ' ' + j);
      console.log(next + ' ' + j);
      if (goodInterval[0] < next[0] && goodInterval[1] > next[1]) {
        // goodIndex = j;
        // goodInterval = sortedArr[goodIndex];

        sortedArr.splice(j, 1);
      }

      /!*if (goodInterval[0] < next[0] && goodInterval[1] > next[1]) {
        console.log('got');
        // goodIndex = j;
        // goodInterval = sortedArr[goodIndex];
        sortedArr.splice(j, 1);
      }*!/
    }

    if (newIntervals.includes(goodInterval)) {
      continue;
    }

    // newIntervals.push(sortedArr.splice(goodIndex, 1).pop());
    newIntervals.push(goodInterval);
  }

  return newIntervals;
}

console.log(sortV(arr21));*/



//////////////

// const arr21 = [[100, 600], [200, 300], [250, 275]];
const arr21 = [[100, 600], [200, 300], [250, 275], [700, 1000], [800, 900]];
function sortV(arr) {
  // Filtering asc
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
  const sortedArrInitialLength = sortedArr.length;

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

        // if (i === 0) {
        //   newIntervals.push(good);
        // }

        continue;
      }


      console.log(good);
      console.log(next);

    }

    newIntervals.push(good);
  }

  return newIntervals;
}

console.log(sortV(arr21));


// const myArrNew = [5, 66, 1, 66, 0, 10];
// function removeSixSix(arr) {
//   let sortedArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 66) {
//       continue;
//     }
//
//     sortedArr.push(arr[i]);
//   }
//
//   return sortedArr;
// }
// console.log(removeSixSix(myArrNew));








