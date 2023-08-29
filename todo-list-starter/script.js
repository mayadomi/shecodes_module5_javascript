let todoTasks = [["Walk Chilli", false, "10/05/2023"], ["Make Dinner", false, "10/05/2023"]];
let todoTasksStatus = [false, true];

updateTodoList();

//const todoList = document.getElementById("todo-list");

//for (const task of todoTasks) {
// for (const [index, task] of todoTasks.entries()){

//     const newTodoTaskElement = createNewTodoItemElement(task, index);

//     // Create text element and set inner text to item in todo tasks
//     // const newTodoTaskTextElement = document.createElement("p");
//     // newTodoTaskTextElement.innerText = task;

//     // if (todoTasksStatus[index]==true){
//     //     newTodoTaskTextElement.classList.add("complete");
//     // }

//     // // Create list item element, append the text to it from previous and
//     // // add the list item element to the ul item.
//     // const newTodoTaskElement = document.createElement("li");
//     // newTodoTaskElement.appendChild(newTodoTaskTextElement);

//     // const completeButtonElement = document.createElement("input");
//     // completeButtonElement.type = "button";
//     // completeButtonElement.value = "Completed";
//     // completeButtonElement.onclick = function() {
//     //     toggleComplete(index);
//     // };
//     // newTodoTaskElement.appendChild(completeButtonElement);

//     todoList.appendChild(newTodoTaskElement);
// }

function addTask() {
    const newTask = document.getElementById("new-task-text");
    const newTaskDate = document.getElementById("new-task-date");
    if (newTask.value) {
        todoTasks.push([newTask.value, false, newTaskDate.value]);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }

}

function updateTodoList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    for (const [index, task] of todoTasks.entries()){       
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }

}

function createNewTodoItemElement(task, index) {
    const newTodoTaskTextElement = document.createElement("p");
    const newTodoTaskDateElement = document.createElement("p");

    const upButton =  document.createElement("input");
    upButton.type="image";
    upButton.src="images/arrow-up.png";
    upButton.classList.add("up");

    const downButton =  document.createElement("input");
    downButton.type="image";
    downButton.src="images/arrow-down.png"
    downButton.classList.add("down");


    newTodoTaskTextElement.innerText = task[0];
    newTodoTaskDateElement.innerText = task[2];


    const newTodoTaskElement = document.createElement("li");

    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    

    if (todoTasksStatus[index]==true){
        newTodoTaskTextElement.classList.add("complete");
        newTodoTaskDateElement.classList.add("complete")
    }

    if (task[1]==true){
        newTodoTaskTextElement.classList.add("important")
        newTodoTaskDateElement.classList.add("important")
    }

    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function(){
        console.log(task)
        toggleImportant(todoTasks.indexOf(task));
    };


    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function() {
        toggleComplete(index);
    };
 
    newTodoTaskElement.appendChild(completeButtonElement);
    newTodoTaskElement.appendChild(importantButtonElement);
    newTodoTaskElement.appendChild(upButton);
    newTodoTaskElement.appendChild(downButton);
    newTodoTaskElement.appendChild(newTodoTaskDateElement);

    
    return newTodoTaskElement;
}

function toggleComplete(index) {
    if (todoTasksStatus[index] == false){
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    console.log(todoTasksStatus);
    updateTodoList();
}

function toggleImportant(task) {

    console.log(task)

    let importance = todoTasks[task][1];
    console.log(importance)

    if (importance == false){
        todoTasks[task][1] = true;
    } else {
        todoTasks[task][1] = false;
    }

    console.log(todoTasks)
    updateTodoList()
}

let todoList = document.querySelector('ul');

todoList.addEventListener('click', (e) => {
    let clicked = e.target;
    let li = clicked.parentNode;
    let next = li.nextElementSibling;
    if (next != null) next = next.nextElementSibling;
    let prev = li.previousElementSibling;

    if (clicked.className === 'down'){
        todoList.insertBefore(li, next);
    } else if (clicked.className === 'up') {
        todoList.insertBefore(li, prev);
    }
});