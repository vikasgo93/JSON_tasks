var arr = [
	[
		["firstName", "Vasanth"],
		["lastName", "Raja"],
		["age", 24],
		["role", "JSWizard"]
	],
	[
		["firstName", "Sri"],
		["lastName", "Devi"],
		["age", 28],
		["role", "Coder"]
	]
];
var obj =[];
for(i=0;i<arr.length;i++){
	obj.push(Object.fromEntries(arr[i]));
}
console.log(obj);