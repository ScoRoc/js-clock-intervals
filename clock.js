var genColor = function() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

var rotateClock = function() {
  var now = new Date();
  var nowSec = now.getSeconds();
  var nowMin = now.getMinutes();
  var nowHour = now.getHours();
  var secondHand = document.getElementById('second');
  var minuteHand = document.getElementById('minute');
  var hourHand = document.getElementById('hour');
  var atSecond = function (currentSecond) {
      return (currentSecond / 60) * 360;
  };
  var atMinute = function (currentMinute) {
    return ((currentMinute / 60) * 360) + -360;
  };
  var atHour = function (currentHour) {
    return ((currentHour / 12) * 360) + -360;
  };
  var secRotate = atSecond(nowSec);
  // console.log(secRotate);
  var minRotate = atMinute(nowMin);
  var hourRotate = atHour(nowHour);
  secondHand.style.transform = "rotate(" + secRotate + "deg)";
  minuteHand.style.transform = "rotate(" + minRotate + "deg)";
  hourHand.style.transform = "rotate(" + hourRotate + "deg)";
};

rotateClock();
var currentTime = setInterval(rotateClock, 1000);

var clockColor = setInterval(function() {
  var face = document.getElementById('face');
  face.style.backgroundColor = genColor();
}, 1000);
var bodyColor = setInterval(function () {
  var now = new Date();
  var nowSec = now.getSeconds();
  var body = document.getElementById('body');
  if (nowSec === 0) {
  body.style.backgroundColor = genColor();
} else if (nowSec === 30) {
  body.style.backgroundColor = genColor();
}
}, 1000);

var timerDoneFlash;
var timerDiv;
var timerDone = function() {
	var timerFlash1 = document.getElementById('timerFlash1');
	timerFlash1.style.border = "5px solid black";
	timerFlash1.style.backgroundColor === "white" ? timerFlash1.style.backgroundColor = "red" : timerFlash1.style.backgroundColor = "white";
	var timerText = document.getElementById('timerText');
	timerFlash1.style.backgroundColor === "white" ? timerText.style.color = "red" : timerText.style.color = "white";
};

var startTimer = function () {
  var secInput = document.getElementById('secInput').value;
  setTimeout(function() {
		timerDoneFlash = setInterval(timerDone, 400);
	}, (secInput * 1000));
};

var resetTimer = function () {
  clearInterval(timerDoneFlash);
	timerFlash1 = document.getElementById('timerFlash1');
	timerFlash1.style.borderColor = "transparent";
	timerFlash1.style.backgroundColor = "transparent";
	timerText.style.color = "transparent";
};

//Working with Minute hand rotating backwards
//keeps increasing rotation value without resetting
//not current time

/*
var seconds = 6;
var minutes = -354;
var hours = 0.5;

var seconds = 6;
var secondInterval = setInterval(function() {
  secondHand.style.transform = "rotate(" + seconds + "deg)";
  face.style.backgroundColor = genColor();
  seconds += 6;
}, 1000);

var atMinute = function (currentMinute) {
  (currentMinute / 60) * 360;
};

var minutes = -354;
var minuteInterval = setInterval(function() {
  minuteHand.style.transform = "rotate(" + minutes + "deg)";
  body.style.backgroundColor = genColor();
  minutes -= 354;
}, 60000);

var atHour = function (currentHour) {
  (currentHour / 60) * 360;
};

var hours = 0.5;
var hourInterval = setInterval(function() {
  hourHand.style.transform = "rotate(" + hours + "deg)";
  hours += 0.5;
}, 60000);
*/
