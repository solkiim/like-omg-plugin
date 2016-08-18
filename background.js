var valleyGirlIfied = false;
deValleyGirlIfy();
initVGData();

function deValleyGirlIfy(){
	chrome.browserAction.setIcon({path:"inactivelogo.png"});
	chrome.tabs.executeScript(null, {file: "undocontent.js"})
}

function valleyGirlIfy(){
	chrome.browserAction.setIcon({path:"activelogo.png"});
	chrome.tabs.executeScript(null, { file: "async.js" }, function() {
		chrome.tabs.executeScript(null, { file: "content.js" });
	});
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
		{"pants": ["leggings"]},
		{", ": [", ", ", ", ", ", ", like, "]},
		{"so": ["soooo likeee"]},
		{"totally": ["tooootally", "totes"]},
		{"stop": ["stop, just stop", "get. out."]},
		{"no way": ["nooooo freakin way", "no. way. get. out."]},
		{"funny": ["sooooo funny - I'm literally dying -", "sooooo funny - I'm literally crying -", "sooooo funny - I'm literally screaming -", "sooooo funny - what is air??!!??!? -"]},
		{". ": [".", ".", ".", ", dude.", ", man.", ", fer shure.", ", like, seriously.", ", I, like, #cantEVEN."]},
		{" ": [" ", " ", " ", " ", " ", " ", ", literally, ", " freakin ", " soooooo ", ", dude, ", ", gurl, "]},
		{"! ": ["! ", "! ", "! ", "! Damn! ", "! OMG! ", "! Like, are you forreal?! ", "! Seriously!"]},
		{"girl": ["guuuuurl", "homegirl", "biatch"]}
	];
	var wordKeys = [];
	for (var i = 0; i < wordsToChange.length; i++) {
		wordKeys.push(Object.keys(wordsToChange[i])[0]);
		chrome.storage.sync.set(wordsToChange[i]);
	}
	chrome.storage.sync.set({"wordKeys": wordKeys});
}
