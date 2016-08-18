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

function initVGData() {
	var wordsToChange = [{"really": ["hella"]},
		{"can’t even": ["#canteven"]},
		{"can’t": ["#canteven"]},
		{"can't even": ["#canteven"]},
		{"can't": ["#canteven"]},
		{"coffee": ["venti Starbucks caramel frappuccino"]},
		{"good": ["#selfieready"]},
		{"best friend": ["#bffl"]},
		{"friend": ["#bffl"]},
		{"is me": ["is, like, sooooo me"]},
		{"I understand.": ["I, like, totally get it."]},
		{"I'm done": ["I'm soooo done"]},
		{"don't like": ["am sooooo over"]},
		{"don’t like": ["am sooooo over"]},
		{"doesn't like": ["is sooooo over"]},
		{"doesn’t like": ["is sooooo over"]},
		{"great": ["sooooo fetch"]},
		{"shoes": ["uggs"]},
		{"pants": ["leggings"]}
]

}
