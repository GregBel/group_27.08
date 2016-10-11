var display = document.getElementById('display');
display.onmousemove = handler;
var segments = [];

function handler(event){
	var x = event.offsetX;
	var y = event.offsetY;
	var newSegment = createElement(x, y);
	segments.unshift(newSegment)
	if (segments.length > 15){
		removeSegment(segments.pop());
	}
	registerDie(newSegment);
}
//
function createSegment(x, y){
	var displayObject = document.getElementById("display");
	var segment = document.createElement("div");
	segment.classList.add("segment");
	segment.style.left = x + "px";
	segment.style.top = y + "px";
	displayObject.appendChild(segment);
	return segment;
}
