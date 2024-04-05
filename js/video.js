var video;
var slider = document.getElementById('slider');
var volume = document.getElementById('volume');

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	console.log(video);
	video.loop = false; // Turn off loop
	video.autoplay = false; // Turn off autoplay
});

// Volume Slider
slider.oninput = function() {
	volume.innerHTML = `${this.value}%`; // Display new slider value
	video.volume = this.value / 100; // Divide by 100 to get between 0 and 1.0
}

// Play Video
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = `${slider.value}%`; // Display new slider value
	video.volume = slider.value / 100; // Divide by 100 to get between 0 and 1.0
});

// Pause Video
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Video
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log(`New speed: ${video.playbackRate}`);
});

// Speed Video
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log(`New speed: ${video.playbackRate}`);
});

// Skip Ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	const newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}
	console.log(`New current time: ${video.currentTime}`);
});

// Mute
document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute/Unmute");
	if (video.muted == false) { // If video is not muted, mute
		video.muted = true;
		mute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		mute.innerHTML = "Mute";
	}
});

// Old School
document.getElementById("vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add('oldSchool');
});

// Original
document.getElementById("orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove('oldSchool');
});


