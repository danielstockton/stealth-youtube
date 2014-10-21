var obstructView = function () {
    if (!document.getElementsByClassName("html5-video-container").length) {
        return;
    }
    document.getElementsByClassName("html5-video-container")[0].style.display="none";
    document.getElementById("player-api").style.height="30px";

    document.getElementById("eow-title").style.fontSize = "10px";
    (function obstructRelated() {
        var thumbnails = document.getElementsByClassName("yt-uix-simple-thumb-wrap"),
            titles = document.getElementById("watch-related").getElementsByClassName("title");
        for (var thumbInd = 0; thumbInd < thumbnails.length; thumbInd++) {
            thumbnails[thumbInd].style.display = "none";
        }
        for (var titleInd = 0; titleInd < titles.length; titleInd++) {
            titles[titleInd].style.fontSize = "10px";
        }
    })();
};

obstructView();

document.getElementsByTagName("body").onclick = obstructView;
