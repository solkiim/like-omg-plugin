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
														.replace(new RegExp("coffee", "ig"), "venti Starbucks caramel frappuccino")
														.replace(new RegExp("good", "g"), "#selfieready")
														.replace(new RegExp("best friend", "g"), "#bffl")
														.replace(new RegExp("friend", "g"), "#bffl")
														.replace(new RegExp("is me", "g"), "is, like, sooooo me")
														.replace(new RegExp("I understand.", "g"), "I, like, totally get it.")
														.replace(new RegExp("I'm done", "g"), "I'm soooo done")
														.replace(new RegExp("don't like", "g"), "am sooooo over")
														.replace(new RegExp("doesn't like", "g"), "is sooooo over")
														.replace(new RegExp(" great", "g"), ", like, sooooo fetch")
														.replace(new RegExp("shoes", "g"), "uggs")
														.replace(new RegExp("pants", "g"), "leggings");


														// randomly add "literally" and "sooo" and "freakin"

			// randomly replaced values
			newText = newText.replace(new RegExp(",", "g"), [",", ",", ",", ", like,"][Math.floor(Math.random() * 4)])
												.replace(new RegExp("totally", "g"), ["tooootally", "totes"][Math.floor(Math.random() * 2)])
												.replace(new RegExp("stop", "g"), ["stop, just stop", "get. out."][Math.floor(Math.random() * 2)])
												.replace(new RegExp("no way", "g"), ["nooooo freakin way", "no. way. get. out."][Math.floor(Math.random() * 2)])
												.replace(new RegExp("funny", "g"), ["sooooo funny - I'm literally dying -", "sooooo funny - I'm literally crying -", "sooooo funny - I'm literally screaming -", "sooooo funny - what is air??!!??!? -"][Math.floor(Math.random() * 4)]);
												// .replace(new RegExp("\\."), [".", ".", ".", ", dude.", ", man.", ", fer shure.", ", like, seriously."][Math.floor(Math.random() * 7)])

			if (newText !== origText) {
				element.replaceChild(document.createTextNode(newText), n);
			}
		}
	}
}
