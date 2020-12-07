// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-telephone-number-validator/16090

/////////////////
// Helpful Tools
////////////////
// https://regex101.com/
// https://www.regexpal.com/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://cheatography.com/davechild/cheat-sheets/regular-expressions/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// Check for numbers, spaces, dashes, and parens are all ok
// Check 555 555 5555
// if it starts with a number and is followed by a parents that number needs to be a 1
// if there is a parens it has to be followed by 3 numbers and a closing parens )
// if it starts with a number and doesn't have a parens after it
//   3 numbers 3 numbers 4 numbers

function telephoneCheck(str) {
  // let result = str.match(/[0-9\s\(\)]/g)
  // const regex = RegExp(/[0-9-\s\(\)]/g)
  // const regex = RegExp(/([0-9-\s\(\)])(?=\())/g)
  // const regex = RegExp(/\b\d{3,4}\b/g)
  // const regex = /(\d{3})-(\d{3})-(\d{4})/gm;
  // const regex = /(\(?)(\d{3})(-|\))(\s?)(\d{3})-(\d{4})/gm;
  // const regex = /(\(?)(\d{3})(-?|\)?|\s?)(\d{3})(\s?|-)(\d{4})/gm;
  // const regex = /(1?)(\s?)(\(?)(\d{3})(-?|\)?|\s?)(\d{3})(\s?|-)(\d{4})/gm;
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  let result = regex.test(str)
  return result;
}

// console.log(telephoneCheck("(555)555-5555")) // should return a false.
// console.log(telephoneCheck("555-555-5555")) // should return a boolean.
// console.log(telephoneCheck("1 555-555-5555")) //  should return true.
// console.log(telephoneCheck("1 (555) 555-5555")) //  should return true.
// console.log(telephoneCheck("5555555555")) //  should return true.
// console.log(telephoneCheck("555-555-5555")) //  should return true.
// console.log(telephoneCheck("(555)555-5555")) //  should return true.
// console.log(telephoneCheck("1(555)555-5555")) //  should return true.
// console.log(telephoneCheck("555-5555")) //  should return false.
// console.log(telephoneCheck("5555555")) //  should return false.
// console.log(telephoneCheck("1 555)555-5555")) //  should return false.
// console.log(telephoneCheck("1 555 555 5555")) //  should return true.
// console.log(telephoneCheck("1 456 789 4444")) //  should return true.
// console.log(telephoneCheck("123**&!!asdf#")) //  should return false.
// console.log(telephoneCheck("55555555")) //  should return false.
// console.log(telephoneCheck("(6054756961)")) //  should return false
// console.log(telephoneCheck("2 (757) 622-7382")) //  should return false.
// console.log(telephoneCheck("0 (757) 622-7382")) //  should return false.
// console.log(telephoneCheck("-1 (757) 622-7382")) //  should return false
// console.log(telephoneCheck("2 757 622-7382")) //  should return false.
// console.log(telephoneCheck("10 (757) 622-7382")) //  should return false.
// console.log(telephoneCheck("27576227382")) //  should return false.
// console.log(telephoneCheck("(275)76227382")) //  should return false.
// console.log(telephoneCheck("2(757)6227382")) //  should return false.
// console.log(telephoneCheck("2(757)622-7382")) //  should return false.
// console.log(telephoneCheck("555)-555-5555")) //  should return false.
// console.log(telephoneCheck("(555-555-5555")) //  should return false.
// console.log(telephoneCheck("(555)5(55?)-5555")) //  should return false.