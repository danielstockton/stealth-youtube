// Remove video.
document.getElementsByClassName("html5-video-container")[0].style.display = "none";
document.getElementById("player-api").style.height = "30px";

// Remove thumbnails.
var thumbnails = document.getElementsByClassName("yt-uix-simple-thumb-wrap");
var videoThumbnails = document.getElementsByClassName("video-thumb");

for (var i = 0, thumbnail; thumbnail = thumbnails[i]; i++) {
  thumbnail.style.display = "none";
}

for (var i = 0, thumbnail; thumbnail = videoThumbnails[i]; i++) {
  thumbnail.style.display = "none";
}

// Reduce font size of titles.
document.getElementById('eow-title').style.fontSize = "10px";
var titles = document.getElementsByClassName("title");

for (var i = 0, title; title = titles[i]; i++) {
  title.style.fontSize = "10px";
}

