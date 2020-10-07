// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

// break string into array seperated by spaces, caps, underscore, and dashes
// lowercase all the letters
// join back together with dash

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".

function spinalCase(str) {
  // adds a space in front of each uppercase if it comes after a lowercase letter
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // replaces any random numbers and replaces with a dash
  str = str.replace(/\d/g, "-");
  // replaces any white spaces or underscores with a dash
  return str.replace(/\s|_/g, "-").toLowerCase();
  // return str.replace(/\s+|_+/g, "-").toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("ThisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
console.log(spinalCase("This8IsSpinalTap"));
