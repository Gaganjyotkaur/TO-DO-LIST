const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
