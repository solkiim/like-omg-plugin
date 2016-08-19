var valleyGirlIfied = false;
deValleyGirlIfy();
initVGData();

function deValleyGirlIfy(){
	valleyGirlIfied = false;
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.executeScript(tab.id, {code: "window.location.reload();"});
	});
}

function valleyGirlIfy(){
	valleyGirlIfied = true;
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "async.js"}, function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
}

function toggleState(){
	if (valleyGirlIfied){
		deValleyGirlIfy();
	} else {
		valleyGirlIfy();
	}
}

chrome.browserAction.onClicked.addListener(toggleState);
