var video = document.getElementById("player1");
var numSlows = 0;

// Load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	// document.querySelector(".video").setAttribute("autoplay", "false");
	video.autoplay = false;
	console.log("Loop is set to false");
	// document.querySelector(".video").setAttribute("loop", "false");
	video.loop = false;
});

// Play video and update volume
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	document.getElementById("volume").innerHTML = 100 * video.volume + "%";
	video.play();
});

// Pause video
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down
document.getElementById("slower").addEventListener("click", function() {
	numSlows++;
	if (numSlows < 0) {
		video.playbackRate = 1 * (Math.pow(1.1, -1 * numSlows));
	}
	else {
		video.playbackRate = 1 * (Math.pow(0.9, numSlows));
	}
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

// Speed up
document.getElementById("faster").addEventListener("click", function() {
	numSlows--;
	if (numSlows < 0) {
		video.playbackRate = 1 * (Math.pow(1.1, -1 * numSlows));
	}
	else {
		video.playbackRate = 1 * (Math.pow(0.9, numSlows));
	}
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead 10sec
document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) { // If exceeded, go to 0
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

// Muted
document.getElementById("mute").addEventListener("click", function() {
	if (!video.muted) { // if not already muted, mute it and change text to unmute
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Mute");
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmute");
	}
});

// Volume slider
document.getElementById("slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = 100 * video.volume + "%";
	console.log("The current value is", video.volume);
});

// Vintage
document.getElementById("vintage").addEventListener("click", function() {
	document.querySelector(".video").className += " oldSchool";
});

// Original
document.getElementById("orig").addEventListener("click", function() {
	document.querySelector(".video").className = "video";
});