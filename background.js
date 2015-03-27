chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.task === 'setIcon') {
            chrome.browserAction.setIcon({
                path: request.iconPath
            });
        }
});
