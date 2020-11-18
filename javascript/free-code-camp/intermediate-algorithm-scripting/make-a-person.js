// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

// console.log('bob ross'.split(' ')[0])
// let name = 'bob ross'.split(' ')
// console.log(name.join(' '))

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0]
  }
  this.getLastName = function() {
    return firstAndLast.split(" ")[1]
  }
  this.setFirstName = function(first) {
    let split = firstAndLast.split(" ")
    split[0] = first
    firstAndLast = split.join(' ')
  }
  this.setLastName = function(last) {
    let split = firstAndLast.split(" ")
    split[1] = last
    firstAndLast = split.join(' ')
  }
  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
// Object.keys(bob).length // should return 6.
// bob instanceof Person // should return true.
// bob.firstName // should return undefined.
// bob.lastName // should return undefined.
// bob.getFirstName() // should return "Bob".
// bob.getLastName() // should return "Ross".
// bob.getFullName() // should return "Bob Ross".
// bob.setFirstName("Haskell")
// console.log(bob.getFullName()) // should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() // should return "Haskell Curry" after bob.setLastName("Curry").
bob.setFullName("Haskell Curry")
bob.getFullName() // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() // should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() // should return "Curry" after bob.setFullName("Haskell Curry").