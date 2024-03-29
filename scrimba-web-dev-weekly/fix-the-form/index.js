/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")
const successElement = document.getElementById("success")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("email: ", email.value)
    form.style.display = 'none'
    successElement.style.display = 'flex'
})

