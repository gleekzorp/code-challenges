/*
DESCRIPTION:
In this challenge you are a magician that tells your audience that by pressing only
the first square on the left, you can change ALL 9 squares on the grid to be yellow.
Write a function using the .forEach() method that will do just that.

event listeners, Array work

*/

// Write your code here 👇

const squares = document.querySelectorAll('.square')
const mainSquare = document.querySelector('#main-square')

mainSquare.addEventListener('click', () => {
  squares.forEach(square => {
    if (square.style.backgroundColor == 'yellow') {
      square.style.backgroundColor = 'purple'
    } else {
      square.style.backgroundColor = 'yellow'
    }
  })
})
    
    


/*

DETAILED INSTRUCTIONS 
1. Use JavaScript to turn elements into an Array
2. Use the .forEach() method to apply a change to all the elements
3. Listen out for when the first square is clicked

STRETCH GOALS:
- What else can you change about the squares?
- Can you improve the overall design?

*/
