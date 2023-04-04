var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
		video = document.getElementById("player1");
		video.autoplay = false;
		video.loop = false;
	
});

document.querySelector("#play").addEventListener("click", function() {

console.log("Play Video");
video.play();
document.querySelector("#volume").innerHTML= video.volume*100+"%";


});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video")
	speed = video.playbackRate*0.9;
	video.playbackRate = speed;
	console.log("Playback speed is", speed);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video")
	speed = video.playbackRate*1.1;
	video.playbackRate = speed;
	console.log("Playback speed is", speed);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead")
	skips = video.currentTime+10;
	cr = video.currentTime;
	console.log("Current Time is", cr);
	if(cr >= video.duration){
	cr = 0;}
	else{
		cr = skips;}

	video.currentTime = cr;

});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute")
	if(video.muted == true)
	{
		document.querySelector("#mute").innerHTML = "Mute"
		video.muted = false;
	}
	else
	{
		document.querySelector("#mute").innerHTML = "Unmute"
		video.muted = true;

	}
});
document.querySelector("#slider").addEventListener("change", function(){
	vol = document.querySelector("#slider").value;
	console.log("Volume Slider")
	document.querySelector("#volume").innerHTML = vol+"%";
	
});
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	
});
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	
});
