function createTask() {
    const taskList = document.querySelector('.tasksContainer');
    const input = document.querySelector('input');
    
    if (input.value) {
        const newTask = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('deleteButton');

        const taskText = document.createElement('span');
        taskText.innerText = input.value;

        checkbox.addEventListener('change', () => {
            taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
            
        });

        deleteButton.addEventListener('click', () => {
            newTask.remove();
        });

        label.appendChild(checkbox);
        label.appendChild(taskText);
        newTask.appendChild(label);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        input.value = '';
    }
}

const button = document.querySelector('button');
button.addEventListener('click', createTask);

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
})