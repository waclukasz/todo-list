document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if (value) {
        addTask(value);
    }
})

function removeItem() {
    var taskParent = this.parentNode.parentNode.parentNode.parentNode;
    var task = this.parentNode.parentNode.parentNode;

    taskParent.removeChild(task);
}

function completeTask() {
    var taskParent = this.parentNode.parentNode.parentNode;
    var task = this.parentNode.parentNode;
    var taskParentID = taskParent.id;

    var targetList = (taskParentID === 'todo') ? document.getElementById('done'): document.getElementById('todo');
    
    console.log(targetList);
    console.log(task);
    
    targetList.appendChild(task);
}

// Adding new Task to Taks List
function addTask(value) {

    var todoList = document.getElementById('todo');

    var task = document.createElement('li');
    task.className = 'task';

    var taskField = document.createElement('div');
    taskField.className = 'task-field';

    var taskPar = document.createElement('p');
    taskPar.innerText = value;

    var icons = document.createElement('div');
    icons.className = 'icons';

    var complete = document.createElement('div');
    complete.className = "complete"

    var remove = document.createElement('div');
    complete.className = "remove"

    var iconComplete = document.createElement('i');
    iconComplete.className = 'fas fa-check';

    var iconRemove = document.createElement('i');
    iconRemove.className = 'far fa-trash-alt';

    todoList.appendChild(task);
    task.appendChild(taskField);
    task.appendChild(icons);
    taskField.appendChild(taskPar);
    icons.appendChild(complete);
    complete.appendChild(iconComplete);
    icons.appendChild(remove);
    remove.appendChild(iconRemove);

    // Clear input fild after adding element
    document.getElementById('item').value = '';

    // Click Event to remove Task
    iconRemove.addEventListener('click', removeItem);

    // Click Event to Complete or Undone Task 
    complete.addEventListener('click', completeTask)

}
