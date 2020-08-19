# Free Code Camps Regex

### Remove Whitespace from Start and End

[Challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g;
let matchResult = hello.match(wsRegex);
console.log(matchResult)
let result = hello.replace(wsRegex, "");
console.log(result)
```

[Solution and Hints](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-remove-whitespace-from-start-and-end/301362)