chrome.storage.sync.get('enabled', function(storageValues) {
  $('#enabled').prop('checked', storageValues.enabled);

  $('#enabled').change(function() {
    var isChecked = $(this).is(':checked');
    chrome.storage.sync.set({enabled: isChecked}, function() {
      alert('Settings saved.');
    });
  });
});
