let hello = 2;
let a = [1, 2, 3, 4, 5];
let arr = ["apple", "mango", "orange"];
const b = "hello world";
let carName = "audi",
  flowerName = "rose",
  fruitName = "apple";
arr[0] = "grapes";
arr.push("apple");

//arithmetic operations
// a = a += b;
//c=(hello)**3;
// let c = hello >> 1;
//c=++hello;
//c=Math.pow(hello,3);
//document.getElementById("demo").innerHTML=arr;
console.log(typeof(a));
//functions
// function mathOper(d){
//     d=d+"";
//  return d.split("").reverse().join("");
// }

// var x=20;
// function foo(){

// var x=10;
// //console.log("x:"+x);
// }
// foo();

//console.log('start');
// setTimeout(()=>{
//     console.log('running');
// },0);
// console.log('end');
//document.getElementById("demo").innerHTML=mathOper(32243);
//console.log(arr);
// console.log([1,2]==[1,2]);
// const str="hi i am soniya";

// let str1=str.split(" ");
// const newArr=str1.map((val)=>{
//     return val.replace(val[0],val[0].toUpperCase());
// })
// console.log(newArr);
// console.log(name);
// const name='soni';

// const newObj = { fruitName: "apple",
//      season: "winter",
//       color: "green",
//     detail:function(){
//         return this.fruitName+" "+this.color}};
//        console.log(typeof(newObj));
    // let user="john";
    // let user1="john";
    // console.log(user==user1);

  //   const person={
  //     firstName:"john",
  //     lastName:"doe",
  //     display:function(){
  //       let x=document.getElementById("demo").innerHTML=this.firstName+" "+this.lastName;

  //     }
  //   }
  //  const display=person.display.bind(person);
  // setTimeout(display,3000);

//   function myCounter(){
//     let counter=0;
//     return function(){
//       counter++;
// return counter;
//     }
//   }

//   const add=myCounter();

// function myDisplay(some){
//   document.getElementById("demo").innerHTML=some;
// }

// function myCalculator(num1,num2){
//  let result=num1+num2;
//  myDisplay(result);
// }

// myCalculator(5,4);

// callBack function
// function displayer(result){
//   document.getElementById("demo").innerHTML=result;
// }
// function myCalculator(num1,num2,myCallBack){
//   let sum=num1+num2;
//   myCallBack(sum);
// }
  
// myCalculator(5,4,displayer);

// function greeting(myName,callBack){
//   let greetingMsg=`Hello, ${myName}!`;
//   callBack(greetingMsg);
// }
// function greetingMessage(message){
//  document.getElementById("demo").innerHTML=message;
// }
// greeting("Vasu",greetingMessage);


// const myArray=[5,-3,-5,9,2,-1];

// const positiveNum=returnArr(myArray, (x)=> x >= 0);

// document.getElementById("demo").innerHTML=positiveNum;


// function returnArr(numbers,callBack){
// const newarray=[];
// for(const x  of numbers){
//   if(callBack(x)){
//     newarray.push(x);
//   }
// }
//  return newarray;

// }

// digital time
// setInterval(myFunction,1000);

// function myFunction(){
// const date=new Date();
// document.getElementById("demo").innerHTML="Digital watch "+
// date.getHours()+":" +
// date.getMinutes()+":" +
// date.getSeconds();
// }
