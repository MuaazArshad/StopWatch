'use strict';

const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ms = document.querySelector('.ms');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let t = 0;

const oneSecond = 100;
const oneMinute = 60 * 1000;

const displayTime = function (t) {
	let second = Math.floor(t / oneSecond);
	let minute = Math.floor(second / 60);
	if (minute < 10) min.innerHTML = `0${minute}:`;
	else min.innerHTML = `${minute}:`;
	if (second % 60 < 10) sec.innerHTML = `0${second % 60}:`;
	else sec.innerHTML = `${second % 60}:`;
	if (t % 100 < 10) ms.innerHTML = `0${t % 100}`;
	else ms.innerHTML = `${t % 100}`;
};

btnStart.addEventListener('click', () => {
	const increment = setInterval(() => {
		t += 1;
		displayTime(t);
	}, 10);
	btnReset.addEventListener('click', () => {
		t = 0;
		min.innerHTML = `00:`;
		sec.innerHTML = `00:`;
		ms.innerHTML = `00`;
		clearInterval(increment);
	});
	btnStop.addEventListener('click', () => {
		clearInterval(increment);
	});
});
