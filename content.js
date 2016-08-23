var wordKeys = [];
var tabID = "";
var elements = document.getElementsByTagName('*');
var changedElms = [];
var port = chrome.runtime.connect({name:"mycontentscript"});
port.onMessage.addListener(function tabIDListener (message,sender){
	port.onMessage.removeListener(tabIDListener);
	tabID = message.vgTabId;
});

async.series([
	function(callback){
		chrome.storage.local.get("wordKeys", function (result) {
			wordKeys = result["wordKeys"];
		});
		callback(null);
	},
	function(callback){
		async.each(elements, function(element, callback) {
			async.each(element.childNodes, function(n, callback){
				if (n.nodeType === 3) {
					var origText = "";
					var wordArr = [];
					async.series([
						function(callback){
							origText = n.nodeValue;
							wordArr = origText.split(new RegExp("([\\s.,!?;:-]+)"));
							callback(null);
						},
						function(callback){
							async.eachOf(wordArr, function(word, index, callback) {
								lowerWord = word.toLowerCase();
								if (wordKeys.indexOf(lowerWord) != -1) {
									chrome.storage.local.get(lowerWord, function (result) {
										var wordToVG = Object.keys(result)[0];
										var wordVGArr = result[wordToVG];
										var replacementWord = wordVGArr[Math.floor(Math.random() * wordVGArr.length)];
										if (/[A-Z]/.test(word)) {
											wordArr[index] = capitalize(replacementWord);
										} else {
											wordArr[index] = replacementWord;
										}
									});
								}
							});
							callback(null);
						},
						function(callback){
							var newText = wordArr.join("");
							if (newText !== origText) {
								changedElms.push(origText);
								element.replaceChild(document.createTextNode(newText), n);
							} else {
								changedElms.push(null);
							}
							callback(null);
						}
					]);
				}
			});
		});
		callback(null);
	},
	function(callback){
		var storageKey = tabID + "content";
		console.log(changedElms);
		chrome.storage.local.set({storageKey: changedElms});
		callback(null);
	}
]);

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
};
