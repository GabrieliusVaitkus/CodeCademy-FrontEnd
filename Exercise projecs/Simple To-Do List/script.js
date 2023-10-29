document.addEventListener("DOMContentLoaded", function() {
    //References for the input field, button and task list
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    //Event listener for the button
    addTaskButton.addEventListener('click', function() {
        //Value from the input field
        const taskValue = taskInput.value.trim();
        //Check if input is not empty
        if (taskValue) {
            //Creating new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;
            //Append the new list item to the list
            taskList.appendChild(listItem);
            //Clear the input field
            taskInput.value = "";
        } else {
            alert('Please enter a task');
        }
    })

    //Event listtener to the task list for event delegation
    taskList.addEventListener('click', function(event) {
        //Check if the element is a list item
        if (event.target.tagName === 'li') {
            //Toggle completed on the list item
            event.target.classList.toggle('completed');
        }
    })
})