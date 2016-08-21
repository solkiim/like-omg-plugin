var valleyGirlIfied = false;
var VGedTabs = {};
deValleyGirlIfy();
initVGData();

function deValleyGirlIfy(){
	valleyGirlIfied = false;
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.executeScript(tab.id, {code: "window.location.reload();"});
	});
	VGedTabs[getTabID()] = false;
}

function valleyGirlIfy(){
	valleyGirlIfied = true;
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "async.js"}, function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
	VGedTabs[getTabID()] = true;
}

// update chrome storage on whether or not VG was activated on that tab
function getTabID() {
	var curTabID = null;
	chrome.tabs.query({active:true, windowType:"normal", currentWindow: true}, function(t){
		curTabID = t[0].id;
	});
	return curTabID;
}

chrome.browserAction.onClicked.addListener(function(){
	if (valleyGirlIfied){
		deValleyGirlIfy();
	} else {
		valleyGirlIfy();
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if (valleyGirlIfied && !VGedTabs[tabId]) {
		window.alert("valleygirlifying");
		valleyGirlIfy();
	}
});

chrome.tabs.onRemoved.addListener(function(tabId, removeinfo){
	delete VGedTabs[tabId];
}
