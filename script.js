const clickTarget = document.getElementById("click-target");

function myEvent(e) {
   var evtType = e.type
   alert(evtType)
   // displays click, or whatever the event type was
}

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});