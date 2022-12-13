// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

let count = 0;

// O(n^2)
function URLify(str) {
  for (char in str) {
    if (str[char] === ' ') {
      str = str.replace(str[char], '%20');
    }
  }
  return str;
}

console.log(URLify('Mr John Smith ') === 'Mr%20John%20Smith');

function URLifyImproved(str, n = s.length) {
  let characters = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== ' ') {
      characters++;
    }
  }

  let outputString = '';
  let spaces = n - characters;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === ' ' && spaces > 0) {
      outputString += '%20';
      spaces--;
    } else if (char !== ' ') {
      outputString += char;
    }
  }
  return outputString;
}

console.log(URLifyImproved('Mr John Smith ', 13) === 'Mr%20John%20Smith');
