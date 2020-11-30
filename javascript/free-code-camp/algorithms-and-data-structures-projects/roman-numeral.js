// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
// https://www.mathsisfun.com/roman-numerals.html

// You can't build something that goes past 3999 since we don't have the symbol available

// m = 1000
// d = 500
// c = 100
// l = 50
// x = 10
// v = 5
// i = 1

// 121
// cxxi

// 652
// dclii


/////////////////
// Lookup tables
////////////////
const onesLookup = {
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
}

const tensLookup = {
  "10": "X",
  "20": "XX",
  "30": "XXX",
  "40": "XL",
  "50": "L",
  "60": "LX",
  "70": "LXX",
  "80": "LXXX",
  "90": "XC",
  // "1": "X",
  // "2": "XX",
  // "3": "XXX",
  // "4": "XL",
  // "5": "L",
  // "6": "LX",
  // "7": "LXX",
  // "8": "LXXX",
  // "9": "XC",
}

const hundredsLookup = {
  "100": "C",
  "200": "CC",
  "300": "CCC",
  "400": "CD",
  "500": "D",
  "600": "DC",
  "700": "DCC",
  "800": "DCCC",
  "900": "CM",
  // "1": "C",
  // "2": "CC",
  // "3": "CCC",
  // "4": "CD",
  // "5": "D",
  // "6": "DC",
  // "7": "DCC",
  // "8": "DCCC",
  // "9": "CM",
}

const thousandsLookup = {
  "1000": "M",
  "2000": "MM",
  "3000": "MMM",
  // "1": "M",
  // "2": "MM",
  // "3": "MMM",
}





///////////////////////////////////
// First attempt with lookup table
//////////////////////////////////
// function convertToRoman(num) {
//   const split = num.toString().split('')
//   if (split.length == 4) {
//     let result = ''
//     const [thousands, hundreds, tens, ones] = num.toString().split('')
//     if (thousands && thousands != '0') {
//       result += thousandsLookup[thousands]
//     }
//     if (hundreds && hundreds != '0') {
//       result += hundredsLookup[hundreds]
//     }
//     if (tens && tens != '0') {
//       result += tensLookup[tens]
//     }
//     if (ones && ones != '0') {
//       result += onesLookup[ones]
//     }
//     return result
//   }

//   if (split.length == 3) {
//     let result = ''
//     const [hundreds, tens, ones] = num.toString().split('')
//     if (hundreds && hundreds != '0') {
//       result += hundredsLookup[hundreds]
//     }
//     if (tens && tens != '0') {
//       result += tensLookup[tens]
//     }
//     if (ones && ones != '0') {
//       result += onesLookup[ones]
//     }
//     return result
//   }

//   if (split.length == 2) {
//     let result = ''
//     const [tens, ones] = num.toString().split('')
//     if (tens && tens != '0') {
//       result += tensLookup[tens]
//     }
//     if (ones && ones != '0') {
//       result += onesLookup[ones]
//     }
//     return result
//   }

//   if (split.length == 1) {
//     let result = ''
//     const [ones] = num.toString().split('')
//     if (ones && ones != '0') {
//       result += onesLookup[ones]
//     }
//     return result
//   }
// }





/////////////////////////
// Lookup table Refactor
////////////////////////
// function convertToRoman(num) {
//   function separateNumberIntoUnits(n) {
//     if (n == 0) return [0];
//     // n = Math.floor(n); // needed for decimal numbers
//     var arr = [];
//     var i = 1;
  
//     while (n > 0) {
//       arr.unshift((n % 10) * i);
//       n = Math.floor(n / 10);
//       i *= 10
//     }
//     return arr;
//   }
//   const split = separateNumberIntoUnits(num)
//   return split.map(item => {
//     switch (item.toString().split('').length) {
//       case 4:
//         return thousandsLookup[item]
//       case 3:
//         return hundredsLookup[item]
//       case 2:
//         return tensLookup[item]
//       case 1:
//         return onesLookup[item]
//     }
//   }).join('')
// }





/////////////////////////////
// Lookup table Refactor # 2
///////////////////////////
// function convertToRoman(num) {
//   if (num >= 4000) return 'Please provide a number below 4000'
//   const separateNumberIntoUnits = () => {
//     if (num == 0) return [0];
//     // n = Math.floor(n); // needed for decimal numbers
//     var arr = [];
//     var i = 1;
  
//     while (num > 0) {
//       arr.unshift((num % 10) * i);
//       num = Math.floor(num / 10);
//       i *= 10
//     }
//     return arr;
//   }
//   return separateNumberIntoUnits().map(item => {
//     switch (item.toString().split('').length) {
//       case 4:
//         return thousandsLookup[item]
//       case 3:
//         return hundredsLookup[item]
//       case 2:
//         return tensLookup[item]
//       case 1:
//         return onesLookup[item]
//     }
//   }).join('')
// }
// console.log(convertToRoman(4000)) // should return 'Please provide a number below 4000'.





//////////////////////////////////
// Interesting one from solutions
/////////////////////////////////
// function convertToRoman(num) {
//   const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
//   const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
//   let romanized = ''
//   let dec, div;

//   for (var i = 0; i < decimalValue.length; i++) {
//     dec = decimalValue[i];
//     div = Math.floor(num / dec);
    
//     if(div > 0) {
//       romanized += romanNumeral[i].repeat(div);
//       num = num % dec;
//     }
//   }
  
//   return romanized;
// }
// console.log(convertToRoman(5000)) // should return 'Please provide a number below MMMMM'.


// console.log(convertToRoman(2)) // should return "II".
// console.log(convertToRoman(3)) // should return "III".
// console.log(convertToRoman(4)) // should return "IV".
// console.log(convertToRoman(5)) // should return "V".
// console.log(convertToRoman(9)) // should return "IX".
console.log(convertToRoman(12)) // should return "XII".
// console.log(convertToRoman(16)) // should return "XVI".
console.log(convertToRoman(29)) // should return "XXIX".
// console.log(convertToRoman(44)) // should return "XLIV".
// console.log(convertToRoman(45)) // should return "XLV"
// console.log(convertToRoman(68)) // should return "LXVIII"
// console.log(convertToRoman(83)) // should return "LXXXIII"
// console.log(convertToRoman(97)) // should return "XCVII"
// console.log(convertToRoman(99)) // should return "XCIX"
// console.log(convertToRoman(400)) // should return "CD"
// console.log(convertToRoman(500)) // should return "D"
// console.log(convertToRoman(501)) // should return "DI"
// console.log(convertToRoman(649)) // should return "DCXLIX"
// console.log(convertToRoman(798)) // should return "DCCXCVIII"
// console.log(convertToRoman(891)) // should return "DCCCXCI"
// console.log(convertToRoman(1000)) // should return "M"
// console.log(convertToRoman(1004)) // should return "MIV"
// console.log(convertToRoman(1006)) // should return "MVI"
// console.log(convertToRoman(1023)) // should return "MXXIII"
// console.log(convertToRoman(2014)) // should return "MMXIV"
// console.log(convertToRoman(3999)) // should return "MMMCMXCIX"