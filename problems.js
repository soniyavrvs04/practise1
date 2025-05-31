
let test=[0,1,2,3,4,5,6,7,8,9,10];
// const val='';

// // document.getElementById("demo").innerHTML=test(display);
function display(val){
return val.fiter((num)=>num%2==0);

}
// 1.display current day and time
const months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
const days=["sunday","monday","Tuesday","wednesday","thursday","friday","saturday"];
const mnth=new Date();
// console.log(mnth);
const day=new Date();
let tdy=days[day.getDay()];
let month=months[mnth.getMonth()];
let hours=day.getHours();
let minutes=day.getMinutes();
let seconds=day.getSeconds();
// console.log(months[mnth.getMonth()]);
//document.getElementById("demo").innerHTML="Today is "+month;
// document.getElementById("demo").innerHTML="Today is "+tdy;
// document.getElementById("demo").innerHTML="Today is "+tdy+"<br> "+"Current time is "+hours+": "+minutes+": "+seconds;

// 2.Get Current Date in Various Formats
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const dayfor=new Date();
// document.getElementById("demo").innerHTML=dayfor.getMonth()+"-"+dayfor.getDate()+"-"+dayfor.getFullYear();
// document.getElementById("demo").innerHTML=dayfor.getMonth()+"/"+dayfor.getDate()+"/"+dayfor.getFullYear();
// document.getElementById("demo").innerHTML=dayfor.getDate()+"-"+dayfor.getMonth()+"-"+dayfor.getFullYear();
// document.getElementById("demo").innerHTML=dayfor.getDate()+"/"+dayfor.getMonth()+"/"+dayfor.getFullYear();


// 3.create area of triangle
var a=5,b=6,c=7;
var s=(a+b+c)/2;
// var areatri=Math.sqrt(s*((s-a)*s(s-b)*s(s-c)));
// console.log(areatri);
// document.getElementById("demo").innerHTML=areatri;
 
//4.check given year is a leap year or not
// function checkLeap(year){
// if((year/4)&(year/100)&(year/400)){
// console.log("This is a leap year");
// }
// else{
//     console.log("this is not a leap year");
// }
// }

// let cyear=checkLeap(2014);

  
//5.Find Years When Jan 1 is Sunday (2014–2050)
// for(var Year=2014;Year<=2050;Year++){
//     let findjan=new Date(Year,0,1);
//     if(findjan.getDay()==0){
//         console.log("1st January is being a Sunday"+Year);
//     }
//     else {
//         console.log("no sunday");
//     }
// }


// 6.calculate multiplication,divison by user input 
function displayMul(){
   var num1=document.getElementById("num1").value;
   var  num2=document.getElementById("num2").value;
  
 
//  document.getElementById("result").innerHTML="result is "+num1*num2;
}
function displayDiv(){
     var num1=document.getElementById("num1").value;
   var  num2=document.getElementById("num2").value;

//  document.getElementById("result").innerHTML="result is "+num1/num2;
}

//7.convert temperature to celsius
var celsiucs;
var fahrenheit;

function changeTemp(fahrenheit){
// document.getElementById("demo").innerHTML=celsiucs=((fahrenheit-32)/9)*5;
}
let val=changeTemp(45);


//8.sum 2 numbers
// var num1;
// var num2;
// function sum(num1,num2){
// document.getElementById("demo").innerHTML=num1+num2;
// }
// let sumVal=sum(2,4);

// 9. Check if One Integer is Positive and One is Negative
// var num;
// function checkPosneg(num){
// if(num>=0){
//     console.log("It is a positive number");
// }else{
//     console.log("It is a negative number");
// }
// }
// let numVal=checkPosneg(-4);
//10.check given number is multiply by 3 or 7
var num;
function checkmul(num){
if((num%3==0)||(num%7==0)){
    // console.log("number is multiply of 3 or 7");
}
else {
    // console.log("number is not multiply by 3 or 7");
}
}
let numberval=checkmul(18);


const fruites=new Object();
fruites.firstname="apple";
fruites.color="green";
fruites.price=180;
const fruit={firstname:"orange",color:"coral",price:150};

Object.assign(fruites,fruit);
let fruitData=Object.entries(fruites);
let keyVal=Object.keys(fruites);
let Val=Object.values(fruites);

let text="";
for(let x in fruites){
    text+=fruites[x]+"<br>";
}
// document.getElementById("demo").innerHTML=Val;

const MusicInstruments={violin:12000,guitar:15000,flute:2000,trumpet:12000,keyborad:38000};
let musi="";

Object.defineProperty(MusicInstruments,"Tambourine",{value:"469"});
//  document.getElementById("demo").innerHTML=MusicInstruments.Tambourine;
const device={fullData:function(){
    return this.smarttv+" "+this.mobile;
}}

 const devices={smarttv:25000,mobile:12000};

 const devices1={smarttv:30000,mobile:4000};
 const newDev=device.fullData.bind(devices);
// document.getElementById("demo").innerHTML=newDev();


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    let x=document.getElementById("demo");
    x.innerHTML=this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName1 = person.fullName.bind(member);
setTimeout(fullName1,5000);
// document.getElementById("demo").innerHTML=fullName();
