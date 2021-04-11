let formTask=document.querySelector('#form-item');
formTask.addEventListener('submit',function(event){

	event.preventDefault();//to stop automatic submission
	let inputTask=document.querySelector('#input-task');
	let task=inputTask.value;
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
	taskList.unshift(task);
	console.log(taskList);
	localStorage.setItem('tasks',JSON.stringify(taskList));
	displayList();
});

// display list
let displayList=()=>
{
	let displayTaskList=document.querySelector('#display-task');

	let inputTask=document.querySelector('#input-task');
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

	let eachRow='';
	for (let task of taskList)
	{
		eachRow+=`<li class="list-group-item list-group-item-warning list-group-item-action">
 						<span class="font-weight-bold">${task}</span>
 						<button class="close" id="icon">
 							<i class="fa fa-window-close"></i>
 						</button>
 					</li>`;
	}

	displayTaskList.innerHTML=eachRow;
}

let displayTaskList=document.querySelector('#display-task');
displayTaskList.addEventListener('click',function(event)
{
	console.log(event.target);
	let targetElement=event.target;
	if(targetElement.classList.contains('fa-window-close'))
	{
		let actualElement=targetElement.parentElement.parentElement;
		let textEntered=actualElement.innerText;
		console.log(textEntered);
		let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
		taskList=taskList.filter((task)=>
		{
			return task.trim()!==textEntered.trim();
		});
		console.log(taskList);	
		localStorage.setItem('tasks',JSON.stringify(taskList));
		displayList();
	}
})

