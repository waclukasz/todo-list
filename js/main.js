// Arrays of List made by user
var loadedTask = (localStorage.getItem('savedList')) ? JSON.parse(localStorage.getItem('savedList')) : {
    todo: [],
    done: []
}

// Render start List made by User
startList();
function startList() {
    var listID;

    for (i = 0; i < loadedTask.todo.length; i++) {
        listID = 'todo';
        addTask(loadedTask.todo[i], listID);

    }

    for (j = 0; j < loadedTask.done.length; j++) {
        listID = 'done';
        addTask(loadedTask.done[j]);
    }

}

// Adding Task by clicking on input button
document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if (value) {
        addTask(value, 'todo');

        loadedTask.todo.push(value);
        savedList()
    }
})

// Saving actual list on localStorage
function savedList() {
    localStorage.setItem('savedList', JSON.stringify(loadedTask));
}

// If user remove Task
function removeItem() {
    var task = this.parentNode.parentNode.parentNode;
    var taskParent = task.parentNode;
    var parentID = taskParent.id;
    var value = task.childNodes[0].childNodes[0].innerText;


    if (parentID === 'todo') {
        loadedTask.todo.splice(loadedTask.todo.indexOf(value), 1);
    } else {
        loadedTask.done.splice(loadedTask.done.indexOf(value), 1);
    }

    taskParent.removeChild(task);
    savedList();


}

// If task is completed
function completeTask() {
    var taskParent = this.parentNode.parentNode.parentNode;
    var task = this.parentNode.parentNode;
    var taskParentID = taskParent.id;
    var value = task.childNodes[0].childNodes[0].innerText;

    if (taskParentID === 'todo') {
        loadedTask.done.push(value);
        loadedTask.todo.splice(loadedTask.todo.indexOf(value), 1);
    } else {
        loadedTask.todo.push(value);
        loadedTask.done.splice(loadedTask.done.indexOf(value), 1);
    }

    //Check where the task is located
    var targetList = (taskParentID === 'todo') ? document.getElementById('done') : document.getElementById('todo');

    targetList.appendChild(task);
    savedList();

}

// Adding new Task to Taks List
function addTask(value, listID) {
    var whichList;

    var todoList = document.getElementById('todo');
    var donelist = document.getElementById('done');

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
    remove.className = "remove"

    var iconComplete = document.createElement('i');
    iconComplete.className = 'fas fa-check';

    var iconRemove = document.createElement('i');
    iconRemove.className = 'far fa-trash-alt';


    if (listID === 'todo') {
        whichList = todoList;
    } else {
        whichList = donelist;
    }

    whichList.appendChild(task);
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
