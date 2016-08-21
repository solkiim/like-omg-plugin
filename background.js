var valleyGirlIfied = false;
deValleyGirlIfy();
initVGData();

function deValleyGirlIfy(){
	valleyGirlIfied = false;
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.executeScript(tab.id, {code: "window.location.reload();"});
	});
	updateStorage(false);
}

function valleyGirlIfy(){
	valleyGirlIfied = true;
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "async.js"}, function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
	updateStorage(true);
}

// update chrome storage on whether or not VG was activated on that tab
function updateStorage(bool) {
	chrome.tabs.query({active:true, windowType:"normal", currentWindow: true}, function(t){
		var curTabID = t[0].id;
		chrome.storage.sync.set({curTabID: bool});
	});
}

chrome.browserAction.onClicked.addListener(function(){
	if (valleyGirlIfied){
		deValleyGirlIfy();
	} else {
		valleyGirlIfy();
	}
});

chrome.tabs.onUpdated.addListener(function(){
	chrome.tabs.query({active:true, windowType:"normal", currentWindow: true}, function(t){
		var curTabID = t[0].id;
		chrome.storage.sync.set({curTabID: bool});
	});
});
chrome.storage.sync.get("wordKeys", function (result) {
	wordKeys = result["wordKeys"];
});

chrome.tabs.onRemoved.addListener(function(){
	
}
