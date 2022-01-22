function navColor() {
	
	var nav = document.querySelector("nav");
	var y = document.documentElement.scrollTop;
	var t = y/1000;
	var s = 0.19*(y/1000);
	var r = 0.23*(y/1000);
	nav.style.background = "rgba(23, 61, 122, " + t + ")";
	nav.style.boxShadow = "rgba(0, 0, 0, " + s + ") 0px 10px 20px, rgba(0, 0, 0, " + r + ") 0px 6px 6px";
	
}

function titleAnimation() {

	let start = 3000;
	let speed = 150;
	console.log('Algo hace');
	
	let title = document.title + "  ---  ";
	let i = 0;

	setTimeout(function() {
		setInterval(function () {
			document.title = title.substr(i, title.length) + title.substr(0, i);
			i = (i + 1) % title.length;
		}, speed);
	}, start);

}