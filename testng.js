var square = function(number) { 
	console.log(number * number)
	return number * number 
}

function newf(a){
 a(2);
}

newf(square);
