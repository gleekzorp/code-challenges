const countdownDisplay = document.getElementById("countdown-display");
const countDownText = document.querySelector(".countdown-text");

function renderCountdown() {
  const christmas = 25;
  const today = new Date();
  const todayDay = today.getDate();
  const remainingDays = christmas - todayDay;
  if (remainingDays === 0) {
    countDownText.remove();
    countdownDisplay.innerHTML = "Merry Christmas!";
  } else {
    countdownDisplay.innerHTML = remainingDays;
  }
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

// function remainingTime(deadline) {
//   const today = new Date();
//   const todayTime = today.getTime();
//   const deadlineTime = new Date(deadline).getTime();
//   const remainingTime = deadlineTime - todayTime;
//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
//   return {
//     seconds,
//     minutes,
//     hours,
//     days,
//   };
// }

// function timer(deadline) {
//   setInterval(() => {
//     const { seconds, minutes, hours, days } = remainingTime(deadline);
//     if (seconds === 0 && minutes === 0 && hours === 0) {
//       countdownDisplay.innerHTML = `${days} days`;
//       if (days === 0) {
//         countdownDisplay.innerHTML = "Merry Christmas!";
//       }
//     } else {
//       countdownDisplay.innerHTML = `${days} days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//     }
//   }, 1000);
// }

// timer("December 25, 2021");
