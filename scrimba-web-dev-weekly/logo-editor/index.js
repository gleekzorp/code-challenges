/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇
const text = document.querySelector('#text')
const logo = document.querySelector('.logo')
const btnOne = document.querySelector('#button-one')
const btnTwo = document.querySelector('#button-two')
const btnThree = document.querySelector('#button-three')


btnOne.addEventListener('click', () => {
  text['style'].color = text.style.color == "black" ? "white" : "black"
})

btnTwo.addEventListener('click', () => {
  let currentValue = logo.style.backgroundColor
  logo.style.backgroundColor = currentValue == "red" ? "#FF8600" :"red"
})

btnThree.addEventListener('click', () => {
  logo.style.boxShadow = logo.style.boxShadow ? "" : "0px 0px 20px 4px rgba(0, 0, 0, 0.5)"
})

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/
