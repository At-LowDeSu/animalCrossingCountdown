excitedSpan = document.querySelector('#excited-text');

let hoursLeft;
let minutesLeft;
let secondsLeft;

function updateTimer() {
  excitedSpan.innerText = `releases in ${hoursLeft} hour, ${minutesLeft} minutes, and ${secondsLeft} seconds ! `;
}

let timer = setInterval(e => {
  let today = new Date();
  let todayUTC = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
    today.getUTCHours(),
    today.getUTCMinutes(),
    today.getUTCSeconds()
  );
  let release = new Date(2020, 03, 19, 22).getTime();
  let t = release - todayUTC;
  hoursLeft = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 18);
  minutesLeft = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  secondsLeft = Math.floor((t % (1000 * 60)) / 1000);

  if (hoursLeft >= 0) {
    updateTimer();
  } else {
    excitedSpan.innerText = 'IS OUT!! GO PLAY!!';
  }
}, 1000);
