// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

// const object = {"single": NaN}
// const object = {"single": undefined}
// const object = {"single": ""}
// const object = {"single": "yes"}
// console.log(Boolean(object.single))


// Loop through array and make sure each object has the key
// If any object doesn't have the key return false
// Check against Boolean()
function truthCheck(collection, pre) {
  for (let item of collection) {
    if (!Boolean(item[pre])) {
      return false
    }
  }
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) // should return true.
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")) // should return false.
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")) // should return false.
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")) // should return false
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")) // should return true
console.log(truthCheck([{"single": "yes"}], "single")) // should return true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single")) // should return false
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")) // should return false
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single")) // should return false