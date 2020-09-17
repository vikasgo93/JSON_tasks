var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]

var ques = "What was your first pet's name?";
var ans  =  "FlufferNutter";


function chksecurityQuestions(securityQuestions,ques, ans) {
	const arr = securityQuestions.filter((question) => {
		if (question.question == ques && question.expectedAnswer == ans) {
			return true;
		}
	})
	if(arr.length!=0){
		return true;
	} else {
		return false;
	}
}
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true