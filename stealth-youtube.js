// Stealth-YouTube

var loaded = function(storageValues) {

  var enabled = storageValues.enabled;
  if (!enabled && enabled !== false) enabled = true; // Enabled by default.

  /*
   *var toggleFn = "function toggle() { localStorage.setItem('enabled', !JSON.parse(localStorage.getItem('enabled'))); window.location.reload(); }"
   *var script = document.createElement("script");
   *script.innerHTML = "window.toggle = " + toggleFn;
   *document.head.appendChild(script);
   */

  var obscureView = function() {

    if (!enabled) return;

    var videoContainer = $('.html5-video-container'), // Video container.
        playerAPI = $('#player-api'), // Player controls.
        title = $('#eow-title'), // Current video title.
        relatedLinks = $('a.related-video'); // Related video links.

    // Not a player view?
    if (!videoContainer) return;

    videoContainer.css('display', 'none');
    playerAPI.height(40);
    title.css('font-size', '10px');
    relatedLinks.find('span').css('font-size', '10px');
    relatedLinks.find('img').remove();

  }

  // YouTube uses PushState on related links.
  function afterNavigate() {
    obscureView();
    $('body').click(obscureView);
  }

  $(document).bind('transitionend', function(e) {
    e = e.originalEvent;
    if (e.propertyName === 'width' && e.target.id === 'progress') {
      afterNavigate();
    }
  });

  afterNavigate();

}

chrome.storage.sync.get('enabled', loaded);

