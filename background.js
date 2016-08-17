chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
});

// var alreadyExecuted = false;
// chrome.browserAction.onClicked.addListener(function(activeTab) {
// 	if (!alreadyExecuted) {
// 		chrome.tabs.executeScript(null, {file: "content.js"});
// 		alreadyExecuted = true;
// 	}
// });
