// Creating complete Icon.
var completeIcon = function (status) {

    var iconsBox = document.createElement('div');
    iconsBox.className = status;

    var doneIcon = document.createElement('i');
    doneIcon.className = 'fas fa-check';

    iconsBox.appendChild(doneIcon);

    return iconsBox;
}

// Creating Remove Icon.
var removeIcon = function () {
    var iconsBox = document.createElement('div');

    var doneIcon = document.createElement('i');
    doneIcon.className = 'far fa-trash-alt';

    iconsBox.appendChild(doneIcon);

    return iconsBox;
}

function addTask() {

    var addButton = document.getElementById('add');
    add.addEventListener('click', function () {

        var ToDoList = document.getElementById('todo');
        var value = document.getElementById('item').value;

        if (value) {

            var item = document.createElement('li');
            item.className = 'task';

            var taskField = document.createElement('div');
            taskField.className = 'task-field';
            item.appendChild(taskField);

            var itemName = document.createElement('p');
            itemName.innerText = value;
            taskField.appendChild(itemName);

            ToDoList.appendChild(item);

            var iconsBox = document.createElement('div');
            iconsBox.className = 'icons';

            item.appendChild(iconsBox);

            iconsBox.appendChild(completeIcon('undone'));
            iconsBox.appendChild(removeIcon());

            document.getElementById('item').value = '';
        }

    })

}
addTask();
