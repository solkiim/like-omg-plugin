function initVGData() {
	var pivotArr = [{"really": ["hella", "legit", "highkey"]},
		{"very": ["highkey", "hella", "legit", "V"]},
		{"no": ["hell nah", "hell naw", "nope – bye Felicia –"]},
		{"yes": ["yaaaas", "hell yah", "yaaaas bitchhhh"]},
		{"rude": ["#savage🔥"]},
		{"can’t": ["#canteven"]},
		{"can't": ["#canteven🙅"]},
		{"coffee": ["venti Starbucks caramel frappuccino"]},
		{"good": ["#selfieready💯💯💯", "#IGworthy😍😍😍", "dope😍", "sweet😍", "niiiiice😍😍😍", "cool😍", "chill😍", "gucci😍💯💕", "soooooo gucci it gives me life😍😍😍😍😍", "straight fire🔥🔥🔥💯👏"]},
		{"great": ["helllllla chill🙌🙌🙌", "hella cool", "sweeeeet", "fire🔥", "straight fire🔥🔥🔥👏👏👏"]},
		{"bad": ["#trash👎", "garbage🙅", "zero chill👎🙅"]},
		{"butt": ["asss🍑🍑🍑🍑🍑", "cake🍰🍰🍰"]},
		{"chat": ["DM"]},
		{"message": ["DM"]},
		{"friend": ["#bffl💕"]},
		{"friends": ["#fam", "#crew💕", "#squad"]},
		{"lucky": ["#blessed🙌"]},
		{"me": ["me", "literal me"]},
		{"leave": ["bail", "bounce"]},
		{"agree": ["#RT"]},
		{"reject": ["#curve", "#swerve", "#dub"]},
		{"rejected": ["#curved😭", "#swerved😭", "#dubbed😭"]},
		{"calm down": ["chill", "chillax"]},
		{"play": ["hang out", "netflix and chill"]},
		{"excited": ["pumped", "hella excited", "amped"]},
		{"cutie": ["bae😍", "cutie😘", "babe", "hottie😍😘", "hunk"]},
		{"boy": ["bae😍😘", "cutie", "babe😍😘😘", "hottie", "hunk"]},
		{"girl": ["bae", "cutie", "babe😍😘", "hottie😘"]},
		{"boyfriend": ["bae😍", "babe😘😘😘"]},
		{"girlfriend": ["bae😍😘😘", "babe"]},
		{"leaving": ["bailing", "bouncing"]},
		{"dollars": ["bucks"]},
		{"helped": ["bro-ed"]},
		{"caught": ["busted"]},
		{"fun": ["turnt🍻🍻🍻🎉", "lit🍻🎉"]},
		{"going to sleep": ["gonna crash"]},
		{"shoes": ["uggs"]},
		{"drunk": ["wasted", "turnt🍻🍻🍻🎉"]},
		{"muscular": ["buff", "ripped"]},
		{"fail": ["epic fail"]},
		{"is": ["is, like,", "is, like, soooo", "is, like, hella"]},
		{"are": ["are, like,", "are, like, soooo", "are, like, hella"]},
		{"were": ["were, like,", "were, like, soooo", "were, like, hella"]},
		{"am": ["am, like,", "am, like, soooo", "am, like, hella"]},
		{"has": ["has, like,"]},
		{"eat": ["pig out"]},
		{"destroy": ["trash"]},
		{"close": ["tight"]},
		{"the": ["the freakin", "the freakin", "the", "the", "the, like,"]},
		{"jewelry": ["bling💎💎💎"]},
		{"about to": ["boutta", "finna", "gonna"]},
		{"going to": ["boutta", "finna", "gonna"]},
		{"pants": ["leggings"]},
		{"annoying": ["#extra😑"]},
		{"girl": ["guuuuurl", "homegirl", "biatch", "hunty", "#THOT💕💕💕"]},
		{"love": ["#love😍💕"]},
		{"beautiful": ["#beautiful💕", "#IGworthy🙌", "on fleek🔥🔥", "slaying👑🙌👏"]},
		{"pretty": ["on fleek🔥🙌👏", "slaying👑🙌", "#IGworthy👏👏👏"]},
		{"cute": ["#cute💕", "on fleek🔥🔥", "slaying👑🙌"]},
		{"suspicious": ["shady", "sketchy", "sus"]},
		{"bye": ["bye Felicia"]},
		{"obvious": ["#obvi"]},
		{"obviously": ["#obvi"]},
		{"sympathetic": ["#woke"]},
		{"knowledgeable": ["#woke"]},
		{"goals": ["#goals"]},
		{"work": ["#twerk🍑"]},
		{"working": ["#twerking🍑🍑🍑"]},
		{"respect": ["#respect🙌", "#respeck🙌"]},
		{"outfit": ["#ootd"]},
		{"so": ["soooo likeee"]},
		{"and": ["and, like,"]},
		{"totally": ["tooootally", "totes"]},
		{"stop": ["stop, just stop", "get. out."]},
		{"to": ["to, like,"]},
		{"funny": ["sooooo funny - I'm literally dying 😂😂😂 -", "sooooo funny - I'm literally crying 😂😂 -", "sooooo funny - I'm literally screaming 😂 -", "sooooo funny - what is air??!!??!? 😂😂😂😂 -"]},
		{", ": [", ", ", ", ", ", ", like, ", ", like actually, ", ", literally, ", ", dude, ", ", bro, ", ", gurl, "]},
		{". ": [". ", ". ", ". 💁 ", ". 💁 ", ". 💁 ", ", dude. ", ", bro. ", ", gurl. 💁 ", ", fer shure. 💁 ", ", like, seriously. 💁 ", ". I, like, #cantEVEN. 💁 ", ". #YOLO. 💁 "]},
		// {".": [".", ".", ". 💁"]},
		// {" ": [" ", " ", " ", " ", " ", " ", ", literally, ", " freakin ", " soooooo ", ", dude, ", ", gurl, "]},
		{"! ": ["! ", "!!!!!!!! ", "!!! ", "!!!! Damn! ", "! OMG! 😱😱😱 ", "!!!!!!!!!! Like, are you forreal?! ", "! Seriously! 💁 "]}
	];

	// map to capitalized versions of the words
	// var cappedPivotArr = [];
	// var lowercase = new RegExp("/^[a-z]/");
	// for (var i = 0; i < pivotArr.length; i++) {
	// 	var word = Object.keys(pivotArr[i])[0];
	// 	var pivotVal = pivotArr[i][word];
	// 	word = capitalize(word);
	// 	for (var j = 0; j < pivotVal.length; j++) {
	// 		pivotVal[j] = capitalize(pivotVal[j])
	// 	}
	// 	var pivotMapping = {};
	// 	pivotMapping[word] = pivotVal;
	// 	cappedPivotArr.push(pivotMapping);
	// }
	// pivotArr = pivotArr.concat(cappedPivotArr);

	// set all pivot values in chrome storage for access in content.js
	var wordKeys = [];
	for (var i = 0; i < pivotArr.length; i++) {
		wordKeys.push(Object.keys(pivotArr[i])[0]);
		chrome.storage.sync.set(pivotArr[i]);
	}
	chrome.storage.sync.set({"wordKeys": wordKeys});
}
