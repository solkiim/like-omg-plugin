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
							for (var k = 0; k < wordArr.length; k++) {
								if (wordKeys.indexOf(wordArr[k]) != -1) {
									chrome.storage.sync.get(wordArr[k], function (result) {
										var word = Object.keys(result)[0];
										var wordVGified = result[word];
										wordArr[k] = wordVGified[Math.floor(Math.random() * wordVGified.length)];
									});
								}
							}
							callback(null);
						},
						function(callback){
							var newText = wordArr.join("");
							// console.log(newText);
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

// var origText = n.nodeValue;
// var wordArr = origText.split(new RegExp("([\\s.,!?;:-]+)"));
//
// for (var k = 0; k < wordArr.length; k++) {
// 	if (wordKeys.indexOf(wordArr[k]) != -1) {
// 		chrome.storage.sync.get(wordArr[k], function (result) {
// 			var word = Object.keys(result)[0];
// 			var wordVGified = result[word];
// 			wordArr[k] = wordVGified[Math.floor(Math.random() * wordVGified.length)];
// 			console.log(wordArr[k]);
// 		});
//
// 	}
// }
//
// var newText = wordArr.join("");
// // console.log(newText);
//
// if (newText !== origText) {
// 	element.replaceChild(document.createTextNode(newText), n);
// }
