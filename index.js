// Get references to HTML elements
const taskInput = document.getElementById("task");
const addButton = document.querySelector(".section1 button");
const taskList = document.querySelector(".section2");

// Add a click event listener to the "Add" button
addButton.addEventListener("click", function () {
    // Get the text from the input field
    const newTaskText = taskInput.value.trim();

    // Check if the input is not empty
    if (newTaskText !== "") {
        // Create a new task item
        const taskItem = document.createElement("div");
        taskItem.className = "todolist";

        // Create a checkbox, task description, and delete button for the task
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check";

        const taskDescription = document.createElement("p");
        taskDescription.textContent = newTaskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Add an event listener to the delete button
        deleteButton.addEventListener("click", function () {
            // Remove the task item when the delete button is clicked
            taskList.removeChild(taskItem);
        });

        // Append elements to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(deleteButton);
                
        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
});
