var arr = ["GUVI", "I", "am", "geek"];
function transformFirstAndLast(arr) {
newObject ={};
newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}


const obj = transformFirstAndLast(arr);
console.log(obj);