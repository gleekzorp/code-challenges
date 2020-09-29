# Free Code Camps Regex

### Positive and Negative Lookahead With Password Challenge

[Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

> Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

```javascript
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2,})/;
let result = pwRegex.test(sampleWord);
```

[Solution and Hints](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-positive-and-negative-lookahead/301360)


### GO BACK TO REGEX HOME
> [home](./readme.md)