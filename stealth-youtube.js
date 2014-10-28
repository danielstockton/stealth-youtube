
var obscureView = function() {

  var videoContainer = $('.html5-video-container'), // Video container.
      playerAPI = $('#player-api'), // Player controls.
      title = $('#eow-title'), // Current video title.
      relatedLinks = $('a.related-video').after('<br>'); // Related video links.

  // Not a player view?
  if (!videoContainer) return;

  videoContainer.css('display', 'none');
  playerAPI.height(40);
  title.css('font-size', '10px');
  relatedLinks.find('span').css('font-size', '10px');
  relatedLinks.find('img').remove();

};

// YouTube uses PushState on related links.
function afterNavigate() {
  obscureView();
  $('body').click(obscureView);
};

$(document).bind('transitionend', function(e) {
  e = e.originalEvent;
  if (e.propertyName === 'width' && e.target.id === 'progress') {
    afterNavigate();
  }
});

afterNavigate();

