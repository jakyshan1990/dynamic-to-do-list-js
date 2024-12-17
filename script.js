document.addEventListener("DOMContentLoaded",()=>{

const addButton=document.getElementById("add-task-btn");
const taskInput=document.getElementById("task-input");
const taskList=document.getElementById("task-list");
const tasks=[];

//const localtasks='strings';

function loadTasks(){
const storedTasks=JSON.parse(localStorage.getItem('tasks')||'[]');
storedTasks.forEach(taskText => addTask(taskText,false));
}

function addTask(taskText="",save=true){
//const taskText=taskInput.value;

if(!taskText){taskText=taskInput.value;
    if (!taskText) {
  alert ('please enter a task');return;
}

}



    const list=document.createElement("li");
     list.textContent=taskText;
     const rmvebtn=document.createElement("button");
     rmvebtn.textContent="Remove";
     rmvebtn.classList.add('remove-btn');
                rmvebtn.onclick=()=>list.remove();
                
     list.appendChild (rmvebtn);
     taskList.appendChild (list);
     tasks.push(list);
     //localtasks=JSON.stringify(tasks);
     //localStorage.setItem(localtasks);

taskInput.value="";
if (save) {
  const storedTasks = JSON.parse (localStorage.getItem ('tasks') || '[]');
  storedTasks.push (taskText);
  localStorage.setItem ('tasks', JSON.stringify (storedTasks));
}

}



addButton.addEventListener("click",addTask);
taskInput.addEventListener("keypress",(event)=>{let key1 =event.key;
    if(key1=="Enter"){addTask();}
});
addTask();
loadTasks ();



//tasks=JSON.parse( localStorage.getItem(localtasks) );
//console.log(tasks);

});