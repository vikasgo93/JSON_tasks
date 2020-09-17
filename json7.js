var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
//console.log(array.flat());
var obj = {};
for(i=0;i<array.length;i++){
	for(j=0;j<array[i].length-1;j++){
		obj[array[i][j]] = array[i][j+1];
	}
}
console.log(obj);