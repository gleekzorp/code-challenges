// EXERCISE 1
// Fetch the data from the .json file and display each persons name on the web page.

const peopleWrapper = document.querySelector('#people-wrapper')

fetch('people.json')
  .then((res) => res.json())
  .then((people) => {
    people.forEach((person) => {
      const personDiv = document.createElement('div')
      const personTextNode = document.createTextNode(person.name)
      personDiv.appendChild(personTextNode)
      peopleWrapper.appendChild(personDiv)
    })
  })
  .catch((err) => {
    console.log(err, 'You most likely need to run this as a server.  Use something like live server')
  })

// Teacher Solution Exercise 1
// fetch('people.json')
//   .then( res => res.json() )
//   .then( json => {
//     json.forEach( person => {
//       const div = document.createElement('div');
//       div.innerHTML = person.name;
//       document.body.appendChild(div);
//     })
//   })




// EXERCISE 2
// Fetch the data from the .json file and display each persons name and age like this: "John is 20".
fetch('people2.json')
  .then((res) => res.json())
  .then((people) => {
    people.forEach((person) => {
      const personDiv = document.createElement('div')
      const personTextNode = document.createTextNode(`${person.name} is ${person.age}`)
      personDiv.appendChild(personTextNode)
      peopleWrapper.appendChild(personDiv)
    })
  })
  .catch((err) => {
    console.log(err, 'You most likely need to run this as a server.  Use something like live server')
  })

// Teacher Solution Exercise 2
// fetch('people.json')
//   .then( res => res.json())
//   .then( json => {
//     json.forEach( person => {
//       const div = document.createElement('div');
//       div.innerHTML = `${person.name} is ${person.age}`;
//       document.body.appendChild(div);
//     })
//   })