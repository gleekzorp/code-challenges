// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

//////////
// Pseudo
/////////
// Break the string into an array
// longestWord = stringList[0]
// Loop over array and check if the current word is longer then the longestWord
// If so replace longest word
// return longest word

function findLongestWordLength(str) {
  let stringList = str.split(" ")
  let longestWord = stringList[0]
  for (let i = 0; i < stringList.length; i++) {
    console.log(stringList[i])
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i]
    }
  }
  return longestWord.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");




//////////
// Reduce
/////////

function findLongestWordLength(str) {
  return str.split(" ").reduce((longest, word) => {
    if (word.length > longest.length) {
      return word
    } else {
      return longest
    }
  }).length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");




//////////////////////////
// More Reduce from hints
/////////////////////////
function findLongestWordLength(str) {
  return str.split(" ").reduce((x, y) => {
    return Math.max(x, y.length)
  }, 0)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");




/////////////////////////
// Filter
// Michael did this one
///////////////////////

function findLongestWordLength(str) {
  let wordArr = str.split(" ");
  let longestWord = wordArr[0].length
  wordArr.filter((word) => word.length > longestWord ? longestWord = word.length : null)
  return longestWord
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
