//  console.log("hello world");
//  for(let i=0;i<=5;i++){
//      console.log("tanuj");
//  }
// //for off loop
//  let str="g20submit";
//  for(let val of str){
//      console.log(val);
//  }
// //for in loop 
// //for in loop is used to print key in objects
//  let student={
//      name:"tanuj",
//      course:"btech",
//      branch:"cs",
//  year:"3rd year"
//  }
//  for(let keys in student){
//      console.log("keys",keys,"values",student[keys]);
//  } 
// //guessing game
//  let gamenumber=25;
//  let usernum=prompt("enter the number");
//  while(usernum!=gamenumber){
//  usernum=prompt("you entered wrong number guess again");
//  }
//  console.log("congratulation,you entered right number")
// //solve string problem
// let fullname=prompt("enter the name");
// let updatedname="@" + fullname + fullname.length;
// console.log(updatedname);
  

let arr=["amazon","flipcart","bloomberg","adobe","amazon","microsoft"];
//delete the first company from array
// arr.splice(0,1);
//remove adobe and add uber in its place
arr.splice(3,1,"ola");
  
//function
function sum(a,b){
    console.log("sum is",a+b);
}
sum(2,4);

//function with return keyword
function add(x,y){
   
     sum=x+y;
     console.log("before return");
     console.log(x); //underscope
     return sum;
   //  console.log("after  return"); =>cant execute this

}
let val=add(2,3);
console.log(x); //cant print it is out of Scope   (function parameter are local they have only function scope out of scope they will die)
console.log(val);

//arrow function 
const multiarrow=(a,b)=>{
    return a*b;
}
multiarrow(2,4);

//callback function
//calculate the square of an array elements
 let nums=[1,2,3,4 ,5,6,7,8];
nums.forEach(
    (nums)=>{
        console.log( "square of ",nums,"is",nums*nums);
    }
)
let calcsquare=(nums)=>{
    console.log( "square of ",nums,"is",nums*nums);
};
nums.forEach(calcsquare);



//map Method
let newarr=nums.map(
    (val)=>{
//filter Method
  
let newarr=nums.filter(
    (val)=>{
    return val%2==0;
    }
)
console.log(newarr);

//Reduce method
return val+val*val;
    }
)
console.log(newarr);


let array1=[1,2,3,4];
let output=array1.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);
