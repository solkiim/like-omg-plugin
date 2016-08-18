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
							async.eachOf(wordArr, function(wordArrElm, index, callback) {
								if (wordKeys.indexOf(wordArrElm) != -1) {
									chrome.storage.sync.get(wordArrElm, function (result) {
										var word = Object.keys(result)[0];
										var wordVGified = result[word];
										wordArr[index] = wordVGified[Math.floor(Math.random() * wordVGified.length)];
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
