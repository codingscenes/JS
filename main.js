const numElement = document.getElementById('bigNumber');
let timer = null;
let btnTimerStart = 'Start';
let btnTimerResume = 'Resume';
let btnTimerStop = 'Stop';
let timerBtnState = btnTimerStop;

let timerCount = 0;
// for increment
document
  .getElementById('startCount')
  .addEventListener('click', function (event) {
    if (timerBtnState == btnTimerStop) {
      event.target.textContent = btnTimerStop;
      timerBtnState = btnTimerStart;
      startTimer(false);
    } else if (timerBtnState == btnTimerStart) {
      event.target.textContent = btnTimerResume;
      timerBtnState = btnTimerResume;
      timerCount = +numElement.textContent || 0;
      clearInterval(timer);
    } else if (timerBtnState == btnTimerResume) {
      timerBtnState = btnTimerStart;
      event.target.textContent = btnTimerStop;
      numElement.textContent = +timerCount;
      timerCount = null;
      startTimer(false);
    }
  });

document.getElementById('stopCount').addEventListener('click', function () {
  timerCount = null;
  timerBtnState = btnTimerStop;
  const btnStartCountElem = document.getElementById('startCount');
  clearInterval(timer);
  btnStartCountElem.innerText = btnTimerStart;
  numElement.textContent = 0;
});

function startTimer(reset) {
  if (reset && timer) {
    numElement.textContent = 0;
    clearInterval(timer);
  } else {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    let prevNum = timerCount || +numElement.textContent;
    numElement.textContent = prevNum + 1;
  }, 1000);
}
