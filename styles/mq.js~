/* JavaScript Media Queries */
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 500px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	var msg = (mq.matches ? "more" : "less") + " than 500 pixels";
	document.getElementById("current").firstChild.nodeValue = msg;

}