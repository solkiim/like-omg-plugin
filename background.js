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
		{"is": ["is, like,", "is, like, soooo", "is, like, hella"]},
		{"are": ["are, like,", "are, like, soooo", "are, like, hella"]},
		{"were": ["were, like,", "were, like, soooo", "were, like, hella"]},
		{"am": ["am, like,", "am, like, soooo", "am, like, hella"]},
		{"has": ["has, like,"]},
		{"the": ["the freakin", "the", "the, like,"]},
		{"jewelry": ["bling"]},
		{"have fun": ["be lit", "get turnt"]},
		{"about to": ["boutta", "finna", "gonna"]},
		{"pants": ["leggings"]},
		{"girl": ["guuuuurl", "homegirl", "biatch"]},
		{"love": ["#love"]},
		{"beautiful": ["#beautiful"]},
		{"cute": ["#cute"]},
		{"outfit": ["#ootd"]},
		{"so": ["soooo likeee"]},
		{"totally": ["tooootally", "totes"]},
		{"stop": ["stop, just stop", "get. out."]},
		{"no way": ["nooooo freakin way", "no. way. get. out."]},
		{"to": ["to, like,"]},
		{"funny": ["sooooo funny - I'm literally dying -", "sooooo funny - I'm literally crying -", "sooooo funny - I'm literally screaming -", "sooooo funny - what is air??!!??!? -"]},
		{", ": [", ", ", ", ", ", ", like, ", ", like actually, ", ", literally, ", ", dude, ", ", gurl, "]},
		{". ": [". ", ". ", ". ", ", dude. ", ", man. ", ", fer shure. ", ", like, seriously. ", ". I, like, #cantEVEN. "]},
		// {" ": [" ", " ", " ", " ", " ", " ", ", literally, ", " freakin ", " soooooo ", ", dude, ", ", gurl, "]},
		{"! ": ["! ", "! ", "! ", "! Damn! ", "! OMG! ", "! Like, are you forreal?! ", "! Seriously!"]}
	];
	var wordKeys = [];
	for (var i = 0; i < wordsToChange.length; i++) {
		wordKeys.push(Object.keys(wordsToChange[i])[0]);
		chrome.storage.sync.set(wordsToChange[i]);
	}
	chrome.storage.sync.set({"wordKeys": wordKeys});
}
