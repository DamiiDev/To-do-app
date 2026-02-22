const taskInput = document.getElementById('taskInput');

const addBtn = document.getElementById('addTask');

const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        taskInput.value = "";
        taskInput.placeholder = "Please enter a task!";
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);