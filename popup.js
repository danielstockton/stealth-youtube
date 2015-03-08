chrome.storage.sync.get('settings', function(storageValues) {
  var settings = storageValues.settings;
  if (settings === undefined)
    settings = STEALTH_YOUTUBE_GLOBAL.defaultSettings;

  $('#enabled').prop('checked', settings.enabled);

  $('#enabled').change(function() {
    settings.enabled = $(this).is(':checked');
    chrome.storage.sync.set({settings: settings}, function() {
      alert('Settings saved.');
    });
  });
});
