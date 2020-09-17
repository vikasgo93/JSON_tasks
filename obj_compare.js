var obj1 = {"name":"GUVI","class":"FS"};
var obj2 = {"class":"FS","name":"GUVI"};

if(Object.keys(obj1).length != Object.keys(obj2).length){
	console.log("No Match in length so quitting")
	return;
}

var keys = Object.keys(obj1);

for(i=0;i<keys.length;i++){
	if(obj1[keys[i]] == obj2[keys[i]]){
		console.log(true);
	} else {
		console.log(false);
	}
}