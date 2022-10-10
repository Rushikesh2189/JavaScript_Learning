var sweety = "Sweety";
var cutie = "Cutie";
console.log("before swap");
console.log(sweety, cutie);

var temp_sweety = "Sweety";
sweety = cutie;
cutie = temp_sweety

console.log("after swap");
console.log(sweety, cutie);

console.log("Question_02");

var num1=100, num2=200, num3=300
console.log("before swap");
console.log(num1,num2,num3);

var temp_num1="100"
var temp_num2="200"
var temp_num3="300"

num1=num2
num2=temp_num1

num2=num3
num3=temp_num2

num3=temp_num1
temp_num1=temp_num3

console.log("after swap");
console.log(num1,num2,num3);

