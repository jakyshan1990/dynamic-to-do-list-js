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
     rmvebtn.classList.add('remove-btn');
     rmvebtn.onclick=function(){ 
        list.remove();
     };
list.appendChild(rmvebtn);
taskList.appendChild(list);
}
taskInput.value="";
}



addButton.addEventListener(onclick,addTask);
taskInput.addEventListener(keypress,()=>{let key =Event.key;
    if(key=="Enter"){addTask;}
});


addTask();
})