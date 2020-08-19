# Free Code Camps Regex

[Restrict Possible Usernames](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

> Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

> You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.


```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let userCheck = /^[a-z]([a-z]+\d*|\d\d+)$/i;
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

[Solutions with break down](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-restrict-possible-usernames/301363)

> Tests
- Your regex should match JACK
- Your regex should not match J
- Your regex should match Jo
- Your regex should match Oceans11
- Your regex should match RegexGuru
- Your regex should not match 007
- Your regex should not match 9
- Your regex should not match A1
- Your regex should not match BadUs3rnam3
- Your regex should match Z97
- Your regex should not match c57bT3