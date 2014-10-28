
var stripNonEssentials = function () {

  var videoContainer = $('.html5-video-container'), // Video container.
      playerAPI = $('#player-api'), // Player controls.
      title = $('#eow-title'), // Current video title.
      relatedLinks = $('a.related-video').after('<br>'); // Related video links.

  // Not a player view?
  if (!videoContainer) return;

  videoContainer.css('display', 'none');
  playerAPI.height(40);
  relatedLinks.find('img').remove();

  $('body').empty().append(videoContainer, playerAPI, title, relatedLinks);

};

stripNonEssentials();
$('body').click(stripNonEssentials);

