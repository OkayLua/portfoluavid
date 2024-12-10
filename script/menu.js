var open = document.getElementById("openmenu");
var close = document.getElementById("closemenu");

open.addEventListener("click", toggleDisplay);
open.addEventListener("click", disableScroll);
close.addEventListener("click", toggleDisplay);
close.addEventListener("click", enableScroll);


function toggleDisplay() {
    var element = document.getElementById("fullmenu");
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

function disableScroll() {
    // Get the current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Disable scroll by setting the scroll position back to the current position
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

// Enable scroll
function enableScroll() {
    // Re-enable scroll by setting the scroll event back to null
    window.onscroll = null;
}