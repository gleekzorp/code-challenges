// https://www.hackerrank.com/challenges/grading/problem

///////////////
// My solution
//////////////
// function gradingStudents(grades) {
//   let result = [];
//   for (let num of grades) {
//     let base = 5;
//     let rounded_num = base * Math.ceil(num / base);
//     if (num <= 37) {
//       result.push(num);
//     } else if (rounded_num - num < 3) {
//       result.push(rounded_num);
//     } else {
//       result.push(num);
//     }
//   }
//   return result;
// }

// console.log(gradingStudents([4, 73, 67, 38, 33])) // should return [75, 67, 40, 33]





////////////////////////////////////////
// solution from discussion with modulus
///////////////////////////////////////
function gradingStudents(grades) {
  let result = [];
  for (let grade of grades) {
    if (grade >= 38) {
      if (grade % 5 == 3) {
        grade += 2
      } else if (grade % 5 == 4) {
        grade += 1
      }
    }
    result.push(grade);
  }
  return result;
}

console.log(gradingStudents([4, 73, 67, 38, 33])); // should return [75, 67, 40, 33]





///////////////////////////////////////////////////
// Shortened solution from discussion with modulus
//////////////////////////////////////////////////
// function gradingStudents(grades) {
//   let result = [];
//   for (let grade of grades) {
//     if (grade >= 38) {
//       if (grade % 5 > 2) {
//         grade += 5 - (grade % 5);
//       }
//     }
//     result.push(grade);
//   }
//   return result;
// }

// console.log(gradingStudents([4, 73, 67, 38, 33])); // should return [75, 67, 40, 33]
