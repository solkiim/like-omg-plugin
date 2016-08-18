var valleyGirlIfied = false;
deValleyGirlIfy();

function deValleyGirlIfy(){
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.executeScript(null, {file: "undocontent.js"})
}

function valleyGirlIfy(){
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, {file: "content.js"});
}

function toggleState(){
	if(valleyGirlIfied){
		valleyGirlIfied=false;
		deValleyGirlIfy();
	} else {
		valleyGirlIfied=true;
		valleyGirlIfy();
	}
}

chrome.browserAction.onClicked.addListener(toggleState);
