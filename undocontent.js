var elements = document.getElementsByTagName('*');
console.log("HIIIIIIIIII")

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var n = element.childNodes[j];

		if (n.nodeType === 3) {
			console.log(n.nodeValue)
			element.replaceChild(document.createTextNode(n.nodeValue), n);
		}
	}
}
