let str = 'abcdeff';

// Algorithm using a hashMap O(n)
function isUnique(str) {
  let hash = {};
  // assuming we have an ASCII string, return false if the length is more then 128
  if (str.length > 128) return false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash[char]) {
      return false;
    }
    hash[char] = true;
  }
  return true;
}

console.log(`Is the string "${str}" unique?`, isUnique(str));

// Algorithm without using additional data structures O(n^2)
function isUniqueWithNoDataStructure(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(`Is the string "${str}" unique?`, isUniqueWithNoDataStructure(str));
