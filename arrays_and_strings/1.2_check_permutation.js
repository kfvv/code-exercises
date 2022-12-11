// Check Permutation: given two strings, write a method to decide if
// one is a permutation of the other. Sorting the strings and then
// comparing them is easy but not efficient, is there a better way?

let strOne = 'ddog';
let strTwo = 'godd';

function checkPermutation(strOne, strTwo) {
  while (strOne.length === strTwo.length) {
    return sortString(strOne) === sortString(strTwo);
  }
  return false;
}

function sortString(str) {
  // for ASCII string
  return [...str].sort().join('');
  // For unicode string:
  // return [...str].sort((a, b) => a.localeCompare(b)).join('');
}

console.log(
  `First assignment: Are "${strOne}" and "${strTwo}" permutations?`,
  checkPermutation(strOne, strTwo)
);

function checkPermutationEfficient(strOne, strTwo) {
  if (strOne.length != strTwo.length) {
    return false;
  }

  let countArray = {};
  for (let i in strOne) {
    let char = strOne[i];
    if (countArray[char]) {
      countArray[char]++;
    } else {
      countArray[char] = 1;
    }
  }

  for (let i in strTwo) {
    let char = strTwo[i];
    countArray[char]--;
    if (countArray[char] < 0) {
      return false;
    }
  }
  return true;
}

console.log(
  `Second assignment: Are "${strOne}" and "${strTwo}" permutations?`,
  checkPermutationEfficient(strOne, strTwo)
);
