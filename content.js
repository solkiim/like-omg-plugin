var wordKeys = [];
var elements = document.getElementsByTagName('*');

async.series([
	function(callback){
		chrome.storage.sync.get("wordKeys", function (result) {
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
								if (wordKeys.indexOf(word) != -1) {
									chrome.storage.sync.get(word, function (result) {
										var wordToVG = Object.keys(result)[0];
										var wordVGArr = result[wordToVG];
										wordArr[index] = wordVGArr[Math.floor(Math.random() * wordVGArr.length)];
									});
								}
							});
							callback(null);
						},
						function(callback){
							var newText = wordArr.join("");
							if (newText !== origText) {
								element.replaceChild(document.createTextNode(newText), n);
							}
							callback(null);
						}
					]);
				}
			});
		});
		callback(null);
	}
]);
