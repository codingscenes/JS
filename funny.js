const startBtn = document.getElementById('active-btn');
const stopBtn = document.getElementById('pause-btn');

const activeContainer = document.getElementById('active');
const pauseContainer = document.getElementById('pause');

startBtn.addEventListener('click', function () {
  activateAnimation();
});

stopBtn.addEventListener('click', function () {
  deactivateAnimation();
});

function activateAnimation() {
  activeContainer.style.display = 'flex';
  pauseContainer.style.display = 'none';
}

function deactivateAnimation() {
  activeContainer.style.display = 'none';
  pauseContainer.style.display = 'flex';
}
