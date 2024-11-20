/* JavaScript Media Queries */
/* https://www.sitepoint.com/javascript-media-queries/ */

/* matchMedia Javascript object says Media Queries supported */
/* So if this exists...we proceed */

if (matchMedia) {
    /* seed with the media query we are looking for */
    /* this matches the css @media query */
    /* e.g @media only screen and (min-width: 600px) {...} */
    var mq = window.matchMedia("(min-width: 600px)");

    /* Now add a simple listener to determine when the screen width changes to match our media query */
    mq.addListener(WidthChange);

    /* Now set the listener to monitor the media query */
    WidthChange(mq);
}

// media query change Listner
function WidthChange(MediaQuery) {


    var msg; /* Variable that we use to set the text to display when the media query match is made */

    /* If we have a matched media query i.e. screen is larger than 600px */
    if (MediaQuery.matches) {msg = "View port is more than 600 pixels"}
    else {msg = "Viewport is now less than 600 pixels"}

    /* And now we find the element/Node in the document identified by id=currentMQ and set the message appropriately */
    document.getElementById("currentMQ").firstChild.nodeValue = msg;
}
