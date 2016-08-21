initVGData();	// set up all translation data in initData.js
var valleyGirlIfied = false;	// boolean tracking if valleygirl is activated
var VGedTabs = {};	// hashtable that stores each tabs and whether they have been VG-ified
deValleyGirlIfy();	// initialize as turned off

// return page to original contents
function deValleyGirlIfy(){
	valleyGirlIfied = false;
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.executeScript(tab.id, {code: "window.location.reload();"});
	});
	chrome.tabs.query({active:true, windowType:"normal", currentWindow: true}, function(t){
		curTabID = t[0].id;
		VGedTabs[curTabID] = false;
	});
}

// translate page contents to valleygirl
function valleyGirlIfy(){
	valleyGirlIfied = true;
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "async.js"}, function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
	chrome.tabs.query({active:true, windowType:"normal", currentWindow: true}, function(t){
		curTabID = t[0].id;
		VGedTabs[curTabID] = true;
	});
}

// toggle valleygirl activation on ext icon click
chrome.browserAction.onClicked.addListener(function(){
	if (valleyGirlIfied){
		deValleyGirlIfy();
	} else {
		valleyGirlIfy();
	}
});

// correct valleygirl activation on tab update/refresh/change
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if (info.status == "complete") {
		correctVG(tabId);
	}
});

// correct valleygirl activation on tab change
chrome.tabs.onActivated.addListener(function(activeInfo){
	window.alert(VGedTabs[activeInfo.tabId]);
	correctVG(activeInfo.tabId);
});

// delete tabId from tracker hashtable when tab removed
chrome.tabs.onRemoved.addListener(function(tabId, removeinfo){
	delete VGedTabs[tabId];
}

// make sure tab is correctly VG-toggled
function correctVG(tabId) {
	if (valleyGirlIfied && !VGedTabs[tabId]) {	// if VG is turned on but the tab isn't VG-ed
		valleyGirlIfy();
		VGedTabs[tabId] = true;
	}
	else if (!valleyGirlIfied && VGedTabs[tabId]) {
		deValleyGirlIfy();
		VGedTabs[tabId] = false;
	}
}
