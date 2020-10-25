/*

STRETCH GOALS:

1) Go all out with styles: fonts, sizes, backgrounds, transitions, colours! 

2) Find a purpose for your card: business card, invitation to a party, email subscription, 
a video reveal or a music album cover with a song player at the back. 

3) Depending on you purpose add some the relevant interactivity: 
    - business card: links to your social media
    - invitation to a party, email subscription: confirmation of the subscription 
    - a video reveal/song card: start playing the video/song

*/

const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const newQuestionBtn = document.querySelector("#new-question-btn");

window.addEventListener('DOMContentLoaded', () => {
    let randomNum = Math.floor(Math.random() * questions.length)
    front.innerHTML = questions[randomNum].question
    back.innerHTML = questions[randomNum].answer
})

cardContainer.addEventListener('click', () => {
    card.classList.toggle('flip')
})

cardContainer.addEventListener('mouseenter', () => {
    card.classList.add('flip')
})

cardContainer.addEventListener('mouseleave', () => {
    card.classList.remove('flip')
})

newQuestionBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * questions.length)
    front.innerHTML = questions[randomNum].question
    back.innerHTML = questions[randomNum].answer
})