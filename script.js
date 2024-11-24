document.addEventListener("DOMContentLoaded",()=>{

const addButton=document.getElementById("add-task-btn");
const taskInput=document.getElementById("task-input");
const taskList=document.getElementById("task-list");


function addTask(){
const taskText=taskInput.value.trim();
if(taskText.length===0){
    alert("please enter a task");
}else{
    const list=document.createElement("li");
     list.textContent=taskText;
     const rmvebtn=document.createElement("button");
     rmvebtn.textContent="Remove";
     rmvebtn.className='remove-btn';
     rmvebtn.onclick=function(){ 
        list.remove();
     };
list.append(rmvebtn);
taskList.append(list);
}
taskInput.value="";
}


addButton.addEventListener(onclick,addTask);
taskInput.addEventListener(keypress,()=>{
    if(Event.key=='Enter'){addTask;}
});


addTask();
})