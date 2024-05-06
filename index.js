var studentName = "Asma umair";
console.log(studentName);
var subjects = "eng urdu math";
console.log(`Subjects: ${subjects} `);

var totalMarks = 300
var eng = 80;
var urdu = 72;
var math = 88;
var marks = eng + urdu + math;
console.log( `Total marks: ${totalMarks}`);
console.log(`Your marks: ${marks}`);
var result = marks / totalMarks * 100;
console.log( ` ${result} %`)
var grade;
if (result >= 90) {
    grade = "A+";
}
else if (result >= 80) {
    grade = "A";
}
else if (result >= 70) {
    grade = "B"
}
else if (result >= 60) {
    grade = "C"
} else if (result >= 50) {
    grade = "Fail"
}
console.log(`🚀Congratulations, ${studentName} your percentage is,  ${result}%  your Grade is 😍 ${grade}`);



