// if str.length > num
// return the string[0:num]

// if str.length <= num
// return str


// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num) + '...'
//   }
// }

// substr & trim
function truncateString(str, num) {
  let trimmedString = str.trim()
  if (trimmedString.length === 0) {
    return 'Learn more...'
  } else if (trimmedString.length <= num) {
    return str;
  } else {
    return trimmedString.substr(0, num) + '...'
  }
}

console.log(truncateString("        ", 8));
console.log(truncateString("    A-tisket a-tasket A green and yellow basket   ", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))