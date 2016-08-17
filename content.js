function changeWords() {
	var elements = document.getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var n = element.childNodes[j];

			if (n.nodeType === 3) {
				var origText = n.nodeValue;

				// always replaced values
				var newText = origText.replace(new RegExp("really", "g"), "hella")
															.replace(new RegExp("can’t even", "g"), "#canteven")
															.replace(new RegExp("can’t", "g"), "#canteven")
															.replace(new RegExp("can't even", "g"), "#canteven")
															.replace(new RegExp("can't", "g"), "#canteven")
															.replace(new RegExp("coffee", "ig"), "venti Starbucks caramel frappuccino");

				// randomly replaced values
				newText = newText.replace(new RegExp(",", "g"), [",", ",", ",", ", like,"][Math.floor(Math.random() * 4)]);
													// .replace(new RegExp("\\."), [".", ".", ".", ", dude.", ", man.", ", fer shure.", ", like, seriously."][Math.floor(Math.random() * 7)]);

				if (newText !== origText) {
					element.replaceChild(document.createTextNode(newText), n);
				}
			}
		}
	}
}
changeWords();
