# Free Code Camps Regex

### Check For Mixed Grouping of Characters


[Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters)

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

```javascript
let myString = "Eleanor D. Roosevelt";
let myRegex = /(Franklin|Eleanor)\s(\w*\W*\s*)Roosevelt/;
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
console.log(result)
```

[Solution and Hints](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-check-for-mixed-grouping-of-characters/301339)


### GO BACK TO REGEX HOME
> [home](./readme.md)