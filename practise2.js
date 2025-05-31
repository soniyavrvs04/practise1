// hoistvar=3;
// console.log(hoistvar);
// var hoistvar;


// display();
// function display(){
//     console.log("hello world");
//     x=3;
//     console.log(x);
//     var x;
//     var x=0;
//     console.log(x+"x:");
// }

// display();

// let a=1;
// let b="1";
// let c=a===b;
// console.log(c);

// function higherOrder(fn) {
//     fn(console.log("hello"));
//   }
     
//   higherOrder(function() { console.log("Hello world") });  
//   function higherOrder2() {
//     return function() {
//       return "Do something";
//     }
//   }      
//   var x = higherOrder2();
//   x();  
// var obj={
//     name:"john",
//     getName:function(){
//         console.log(this);
//     }
// }
// var getName=obj.getName();

//call()->alllows the object to use the method of another object. or invoke a method by specifing the owner object
// function sayHello(){
//     return "hello"+console.log(this.name);
// }
// var obj={name:"john"};
// sayHello.call(obj);

// var person={
//     name:"john",
//     getAge:function(){
//         console.log(this.age);
//     }
// }
// var person1={age:23};
// person.getAge.call(person1);

// function displayMsg(message){
// console.log(this.name+"is"+message);
// }
// var nameOfUser={name:"vasu "};
// displayMsg.call(nameOfUser," user");

// function displayMsg1(message){
//     console.log(this.name+" is "+message);
//     }
//     var nameOfUser1={name:" shiva"};
//     displayMsg1.apply(nameOfUser1,[" user1"]);

//     var bikeDetails = {
//         displayDetails: function(registrationNumber,brandName){
//         console.log(this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName);
//       }
//     }
       
//     var person1 = {name:  "Vivek"};
         
//     var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
//     detailsOfPerson1();

//     //curring functions->it transforms a  function with multiple arguments with nested series of functions each taking a single arguments
//     function user(q){
//         return function(b){
//         console.log(q+b);
//         }
//     }
//     user(2)(4);
//     //closure
//     // function counter(){
//     //     counter=0;
//     //     return function(){
//     //         counter++;
//     //         return counter;
//     //     };
//     // }
//     // const add=counter();
//     // add();
//     // add();
//     // add();
//     // console.log(add)

// var obj={
//     name:"john",
//     getName:function(){
//         console.log(this.age);
//     }
// }
// var person={age:55};
// obj.getName.call(person);

// function hello(message){
//    console.log(this.name+" is "+message);
    
// }
// var person={name:"vasu"};
// hello.apply(person,[" a new user"]);

// var bikeDetails={
//     displayBike:function(regNum,brand){
//     console.log("bike details:"+this.name+" "+regNum+" "+brand);
//     }

// }
// var person1={name:"john"};
// var detail=bikeDetails.displayBike.bind(person,"tn343635","yemaha");
// detail();


// var arr=[3,5,-2,4,-8,6];
// var psoNum=remvNeg(arr ,x=> x >= 0 );
// document.getElementById("demo").innerHTML=psoNum;
// function remvNeg(num,callback){
// var myArr=[];
//   for(const x of num){
//     if(callback(x)){
//         myArr.push(x);
//     }
//   }
// return myArr;
// }


// let obj1={x:"mango",y:"orange"};
// let finObj={...obj1};
// console.log(finObj);

// async function myFile(resolve){
//     let myPromise = new Promise(function(resolve,reject) {
//     let req=new XMLHttpRequest();
//     req.open('GET',"car.txt");
//     req.onload=function(){
//         if(req.status==200){
//             resolve(req.response);
//         }
//         else {
//             reject("404,file not found");
//         }
        
//     };
//     req.send();
//     });
// document.getElementById("demo").innerHTML=await myPromise;
// }
// myFile();

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// function bigFunc(element){
//     let newArray = new Array(700).fill('♥');
//     return newArray[element];
//   }
  
//   console.log(bigFunc(599)); // Array is created
//   console.log(bigFunc(670));
// function randomFunc(){
//     for(let i = 0; i < 2; i++){
//       setTimeout(()=> console.log(i),3000);
//     }
//   }
//   randomFunc();

// var hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }
  
//   let getPower = hero.getPower;
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower());
//   console.log(getPower.apply(hero2));

//   var a = 10;
// {
//     var a = -10;
// }
// let b = a;
// {
//     let b = -20;
// }

// console.log(b)


// let obj = {
//     a: 100,
//     fun1() {
//         let a = 20;
//         let fun2 = () => {
//             console.log(this.a);
//         }
//         fun2();
//     }
// }

// obj.fun1();
// function sum(a, b) {
//     return a + b;
// }
// const num1 = 10;
// const num2 = 20;
// const result = sum(num1, num2);
// console.log("The sum of", num1, "and", num2, "is", result);

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// const inputString = "hello world";
// const reversedString = reverseString(inputString);
// console.log("Reversed string:", reversedString); 


function arrUpp(arr){
let x="";
const newStr=arr.split(" ");
const finstr=newStr.map((val)=>{
    return val.replace(val[0],val[0].toUpperCase());
    
})

console.log(finstr);

}
const inputstring="hi this is pooja";
const finArr=arrUpp(inputstring);
