let tot_secs = 15 * 24 * 60 * 60;

function updatetime() {
  let days = Math.floor(tot_secs / (24 * 3600));
  let remainingSeconds = tot_secs % (24 * 3600);
  let hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds %= 3600;
  let minutes = Math.floor(remainingSeconds / 60);

  document.querySelector('.main').textContent = `${days} : ${hours} : ${minutes} : ${remainingSeconds%60}`;
  tot_secs--;
  console.log(days , hours , minutes, remainingSeconds);
  if (tot_secs < 0) {
    clearInterval(interval);
    document.querySelector('.main').textContent = 'Countdown Ended';
  }
}

const interval = setInterval(() => {
  updatetime();
}, 1000);
