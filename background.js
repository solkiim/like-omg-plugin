var valleyGirlIfied = false;
deValleyGirlIfy();
initVGData();

function deValleyGirlIfy(){
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.getSelected(null, function(tab) {
		var code = 'window.location.reload();';
		chrome.tabs.executeScript(tab.id, {code: code});
	});
}

function valleyGirlIfy(){
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "async.js"}, function() {
		chrome.tabs.executeScript(null, {file: "content.js"});
	});
}

function toggleState(){
	if (valleyGirlIfied){
		valleyGirlIfied = false;
		deValleyGirlIfy();
	} else {
		valleyGirlIfied = true;
		valleyGirlIfy();
	}
}

chrome.browserAction.onClicked.addListener(toggleState);
