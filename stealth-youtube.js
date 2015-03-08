// Stealth-YouTube

(function() {
var GLOB = STEALTH_YOUTUBE_GLOBAL,
    settingsLoaded = function(storageValues) {
      var settings, obscureView;

      if (storageValues.settings === undefined) {
        // shamelessly use defaults
        settings = GLOB.defaultSettings;
      } else {
        settings = storageValues.settings;
      }

      // do the messy work
      if (!settings.enabled) {
        $('html').removeClass('stealth-mode');
        $('html').removeClass('stealth-' + settings.skin);
      } else {
        $('html').addClass('stealth-mode stealth-' + settings.skin);
      }

  };

chrome.storage.sync.get('settings', settingsLoaded);
})();
