$(function (){
	$('body').append('<div id="source">from <input id="startNum" type="text" value="" /> '
		+'to <input id="endNum" type="text" value="" /> '
		+'<button onclick="make()">&nbsp;&nbsp;go!&nbsp;&nbsp;</button></div>'
		+'<div id="result"></div>');
});

function make() {
	var startNumber = parseInt(document.getElementById("startNum").value, 10);
	if (!startNumber) return;
	var endNumber = parseInt(document.getElementById("endNum").value, 10);
	if (!endNumber) return;
	var result = "<table><tr>";
	for (i=startNumber; i<=endNumber; i++) {
		result += "<td>"+ (i.toString()).padStart(5, "0") + "<td>&#"+ i +";";
		if (i % 10 == 0) result += "<tr>";
	} result += "</table>";
	$("#result").html("").append(result);
}