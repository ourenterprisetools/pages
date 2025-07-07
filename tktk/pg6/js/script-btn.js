const giftOption = document.querySelector(".gift-options");
const giftOpen = document.querySelector(".gift-open");
var giftBox = document.querySelectorAll('.gift-box');

giftBox.forEach(function (e) {
	e.addEventListener("click", function () {
		e.classList.add("animate__bounce");
		setTimeout(function() {
			giftOption.classList.add("hide-options");
			giftOpen.classList.add("show-prize");
			startTimer();
		}, 1200);
	});
});

// Timer Countdown
var timerSpan = document.getElementById('timer');
timerSpan.innerHTML = 5 + ":" + "00";

function startTimer() {
  var presentTime = timerSpan.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s==59) {
    m=m-1
  }
  if (m<0) {
    roulette.classList.add('hidden');
    return
  }

  timerSpan.innerHTML = m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}