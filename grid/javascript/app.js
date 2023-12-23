 console.log("hello world");
 for(let i=0;i<=5;i++){
     console.log("tanuj");
 }
//for off loop
 let str="g20submit";
 for(let val of str){
     console.log(val);
 }
//for in loop 
//for in loop is used to print key in objects
 let student={
     name:"tanuj",
     course:"btech",
     branch:"cs",
 year:"3rd year"
 }
 for(let keys in student){
     console.log("keys",keys,"values",student[keys]);
 }
//guessing game
 let gamenumber=25;
 let usernum=prompt("enter the number");
 while(usernum!=gamenumber){
 usernum=prompt("you entered wrong number guess again");
 }
 console.log("congratulation,you entered right number")
//solve string problem
let fullname=prompt("enter the name");
let updatedname="@" + fullname + fullname.length;
console.log(updatedname);
