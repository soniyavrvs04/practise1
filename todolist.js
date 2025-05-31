// function display(){

// let displayBack=document.getElementById("displaybox");
// let colorPal=document.getElementById("colorPal");
// console.log(colorPal.value);
// displayBack.style.backgroundColor=colorPal.value;
// // console.log(displayBack.style.backgroundColor);
// }
// function counterFn(){
//     document.getElementById("counterVal").innerText = 0;
//     document.getElementById("counter-btn").addEventListener("click", function() {
//      document.getElementById("counterVal").innerText = Number(document.getElementById("counterVal").innerText) + Number(1);

//     });




let text = document.getElementById("todolist");
let addtask = document.getElementById("addtask-btn");
let del = document.getElementById("delete-btn");
let todoList = document.getElementById("todo");
let completedTask=document.getElementById("completed");
let taskList=new Array;
let completed=new Array;


addtask.addEventListener("click", (event) => {
  if((text.value)!==""){
    taskList.push(text.value);
  todoList.innerHTML += '<li id="'+(taskList.length-1)+'">'+text.value+'<button onclick="deleteTodo(taskList.length-1)">delete</button>'+'</li>';
  text.value = " ";
  console.log(todoList);
  }
  
  
});
function deleteTodo(id) {
  completedTask+='<li>'+text+taskList[id]+'</li>';
  document.getElementById(id).style.display="none";
 
}
