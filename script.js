document.addEventListener("DOMContentLoaded",()=>{

const addButton=document.getElementById("add-task-btn");
const taskInput=document.getElementById("task-input");
const taskList=document.getElementById("task-list");
let tasks=[];
//const localtasks='strings';

function addTask(){
const taskText=taskInput.value;
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
     list.appendChild (rmvebtn);
     taskList.appendChild (list);
     tasks.push(list);
     //localtasks=JSON.stringify(tasks);
     //localStorage.setItem(localtasks);
}
taskInput.value="";
}



addButton.addEventListener("click",addTask);
taskInput.addEventListener("keypress",(event)=>{let key1 =event.key;
    if(key1=="Enter"){addTask();}
});
addTask();

//tasks=JSON.parse( localStorage.getItem(localtasks) );
console.log(tasks);

})