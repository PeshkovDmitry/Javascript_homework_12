const videoEl = document.querySelector('video');
const playButtonEl = document.querySelector('[src="img/play.jpg"]');
const pauseButtonEl = document.querySelector('[src="img/pause.jpg"]');
const stopButtonEl = document.querySelector('[src="img/stop.jpg"]');
const forwardButtonEl = document.querySelector('[src="img/forward.jpg"]');
const rewindButtonEl = document.querySelector('[src="img/rewind.jpg"]');

playButtonEl.addEventListener('click', () => videoEl.play());
pauseButtonEl.addEventListener('click', () => videoEl.pause());
stopButtonEl.addEventListener('click', () => videoEl.currentTime = 0);
rewindButtonEl.addEventListener('click', () => videoEl.currentTime -= 5);
forwardButtonEl.addEventListener('click', () => videoEl.currentTime += 5);
