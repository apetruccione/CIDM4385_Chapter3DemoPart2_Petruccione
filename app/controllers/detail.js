
var args = arguments[0] || {};

//close the window when the button is clicked
$.closeBtn.addEventListener("click", function(){
	$.detailWindow.close();
});

// something is wrong, no deail data is getting to detail.js it is undefined at runtime
//alert(args.data);

$.car.set(args.data);


$.detailWindow.addEventListener("close",function(){
	$.destroy();
});