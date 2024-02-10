let taskIdCounter = 0;
function handleCheckboxChange(taskId) {
  const task = document.getElementById(taskId);
  const checkbox = task.querySelector('input[type="checkbox"]');
  
  if (checkbox.checked) {
    let completedTask = task.querySelector('.completed-task');
    
    if (!completedTask) {
      completedTask = document.createElement('div');
      completedTask.classList.add('completed-task');
      
      let text = document.createElement('h3');
      text.innerText = 'Completed';
      
      completedTask.appendChild(text);
      task.appendChild(completedTask);
    }
  } else {
    const completedTask = task.querySelector('.completed-task');
    
    if (completedTask) {
      completedTask.remove();
    }
  }
}

function deleteTask(taskId) {
  const task = document.getElementById(taskId);
  
  if (task) {
    task.remove();
  } else {
    console.error('Task not found');
  }
}

function addTask() {
  const taskInput = document.getElementById('taskInput').value;

  if (taskInput !== '') {
    taskIdCounter++;
    const mainContainer = document.getElementById('mainContainer');

    const taskElement = document.createElement('div');
    taskElement.classList.add('taskContainer');
    taskElement.id = 'task'+taskIdCounter;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox_' +taskIdCounter;
    checkbox.addEventListener('change', function () {
      handleCheckboxChange(taskElement.id);  // task1
    });

    const taskTextElement = document.createElement('h3');
    taskTextElement.textContent = taskInput;

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete Task';
    deleteButton.id = 'deleteBtn_' + taskIdCounter;
    deleteButton.onclick = function () {
      deleteTask(taskElement.id);
    };

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteButton);

    mainContainer.insertBefore(taskElement, mainContainer.lastElementChild);

    document.getElementById('taskInput').value = '';
  }
}
