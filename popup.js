(function() {
  var GLOB = STEALTH_YOUTUBE_GLOBAL;

  chrome.storage.sync.get('settings', function(storageValues) {
    var settings = storageValues.settings,
        skin;
    if (settings === undefined)
      settings = GLOB.defaultSettings;

    $('#enabled').prop('checked', settings.enabled);

    for(var i=0; i < GLOB.availableSkins.length; i++) {
      skin = GLOB.availableSkins[i];
      if (!$('#skin option[value="' + skin[0] + '"]').length) {
        $('#skin').append('<option value="' + skin[0] + '">' + skin[1] + '</option>\n');
      }
    }
    $('#skin').val(settings.skin);

    $('#save').click(function() {
      settings.enabled = $('#enabled').is(':checked');
      settings.skin = $('#skin').val();
      console.log(settings);
      chrome.storage.sync.set({settings: settings}, function() {
        alert('Settings saved. Reload tab for changes to be applied.');
      });
    });
  });

})();
