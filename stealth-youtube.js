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

    var videoContainer = $('.html5-video-container'), // Video container.
        playerAPI = $('#player-api'), // Player controls.
        title = $('#eow-title'), // Current video title.
        relatedLinks = $('a.related-video'), // Related video links.
        skinId = 'stackoverflow', // Selected skin
        skinCssUrl = chrome.extension.getURL('skins/' + skinId +'/style.css?v=1'),
        skinCssTag = $('link.stealth-youtube.' + skinId);

    if (!enabled) return;

    // Not a player view?
    if (!videoContainer) return;

    videoContainer.css('display', 'none');
    playerAPI.height(50);
    title.css('font-size', '10px');
    relatedLinks.find('span').css('font-size', '10px');
    relatedLinks.find('img').remove();

    // Apply skin
    if (!skinCssTag) {
      $('link.stealth-youtube').remove(); // remove prev skin, if any
      skinCssTag = document.createElement('link');
      skinCssTag.setAttribute('class', 'stealth-youtube ' + skinId);
      skinCssTag.setAttribute('rel', 'stylesheet');
      skinCssTag.setAttribute('type', 'text/css');
      skinCssTag.setAttribute('href', skinCssUrl);
      document.getElementByTagName('head')[0].appendChild(skinCssTag);
    }

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

