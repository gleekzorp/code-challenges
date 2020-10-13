// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript

// function domainName(url){
//   //your code here
//   if (url.match(/www/)) {
//     return url.split('.')[1]
//   } else if (url.match(/\/\//)) {
//     let split = url.split('//')
//     let dot = split[1].indexOf('.')
//     return split[1].slice(0, dot)
//   } else {
//     return url.split('.')[0]
//   }
// }




///////////////////////////
// Cool One From Solutions
//////////////////////////

// function domainName(url){
//   //your code here
//   url = url.replace('https://', '')
//   url = url.replace('http://', '')
//   url = url.replace('www.', '')
//   return url.split('.')[0]
// }


///////////////////////////
// Cool One From Solutions
//////////////////////////
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)/, '').split('.')[0]
}

// People complained about ftp so I just added it as another ? projection
function domainName(url){
  // return url.replace(/(https?:\/\/)?(www\.)?(ftp:?\/?\/?)/, '').split('.')[0]
  return url.replace(/(https?:\/\/)?(www\.)?(ftp:\/\/)/, '').split('.')[0]
}





console.log(domainName("http://google.com")) // == "google" 
console.log(domainName("http://github.com/carbonfive/raygun")) // == "github" 
console.log(domainName("http://www.zombie-bites.com")) // == "zombie-bites"
console.log(domainName("https://www.cnet.com")) // == "cnet"
console.log(domainName("www.xakep.ru")) // == "xakep"
console.log(domainName("dabv803kaxae020y.com/users")) // == "dabv803kaxae020y"

// lots of people complained about needing to check for ftp as well as www.
// Which I think isn't valid since there wasn't a test case for it, but I modified one of the results to make it work
console.log(domainName("ftp://somerandomFTP.com/users")) // == "dabv803kaxae020y"
console.log(domainName("ftp:somerandomFTP.com/users")) // == "dabv803kaxae020y"
console.log(domainName("www.www.*(net/com/etc)")) // == "dabv803kaxae020y"