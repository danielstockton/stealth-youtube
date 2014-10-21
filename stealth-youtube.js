var obstructView = function () {

    // not a player view ?
    if (!document.getElementsByClassName("html5-video-container").length) {
        return;
    }

    // Remove video.
    document.getElementsByClassName("html5-video-container")[0].style.display="none";
    document.getElementById("player-api").style.height="30px";

    document.getElementById("eow-title").style.fontSize = "10px";

    (function obstructRelated() {

        var thumbnails = document.querySelectorAll(".yt-uix-simple-thumb-wrap, .video-thumb"),
            titles = document.querySelectorAll("#eow-title, .title");

        // Remove thumbnails.
        for (var i = 0, thumbnail; thumbnail = thumbnails[i]; i++) {
          thumbnail.style.display = "none";
        }

        // Reduce font size of titles.
        for (var i = 0, title; title = titles[i]; i++) {
          title.style.fontSize = "10px";
        }

    })();
};

obstructView();

document.getElementsByTagName("body").onclick = obstructView;
