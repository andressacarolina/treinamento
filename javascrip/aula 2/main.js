function changeBg (obj, color) {
obj.style.background = color;
}


function openModal (){
	document.getElementById('my-modal').style.display = 'flex';
}

function closeModal (){
	document.getElementById('my-modal').style.display = 'none';
}

//document.getElementById('close-modal').onmouseenter = function() {
//	changeBg(this, 'red');
//}

//document.getElementById('close-modal').onmouseleave = function() {
//	changeBg(this, '#4CAF4C');
//}

$('close-modal').mouseenter(function (){
	changeBg(this, 'red');
});

$('close-modal').mouseleave(function (){
	changeBg(this, '#4CAF4C');
});