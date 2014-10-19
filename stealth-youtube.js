// Remove video.
document.getElementsByClassName("html5-video-container")[0].style.display = "none";
document.getElementById("player-api").style.height = "30px";

// Remove thumbnails.
var thumbnails = document.querySelectorAll(".yt-uix-simple-thumb-wrap, .video-thumb");

for (var i = 0, thumbnail; thumbnail = thumbnails[i]; i++) {
  thumbnail.style.display = "none";
}

// Reduce font size of titles.
var titles = document.querySelectorAll("#eow-title, .title");

for (var i = 0, title; title = titles[i]; i++) {
  title.style.fontSize = "10px";
}

