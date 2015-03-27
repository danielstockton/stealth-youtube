chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.task === 'setIcon') {
            chrome.browserAction.setIcon({
                path: request.iconPath
            });

            chrome.tabs.query(
                {url: '*://*.youtube.com/*'},
                function(results){
                    for (var i=0; i < results.length; i++) {
                        chrome.tabs.reload(results[i]['id'])
                    }
                })
        }
});
