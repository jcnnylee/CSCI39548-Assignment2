//Get the list container element using document.getElementById
let listContainer = document.getElementById("list-container");

//Create a new div element that will be the task item container
let taskItem = document.createElement("div");

//Create a new input element of type checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";

//Create a new span element for the task description and set the textContent to some text
let taskDescription = document.createElement("span");
taskDescription.textContent = "My first task";

//Add the checkbox and task description to the task item container
taskItem.appendChild(checkbox);
taskItem.appendChild(taskDescription);

//Add the entire task item container to the list container
listContainer.appendChild(taskItem);

//Define a function that will execute only when we click on the checkbox -- crosses out the task description
function crossOffTask() {
    console.log(checkbox.checked);
    if (checkbox.checked) {
        taskDescription.style.textDecoration = "line-through";
    } else {
        taskDescription.style.textDecoration = "none"; //does nothing if the checkbox is unchecked
    }
}
checkbox.addEventListener("click", crossOffTask);

//Task 3: Delete a task -- add a button to the task

let deleteButton = document.createElement("button");
taskItem.appendChild(deleteButton);
deleteButton.textContent = "X"; //delete button text (X)
deleteButton.style.marginLeft = "5px"; 

deleteButton.addEventListener("click", () => {
    taskItem.remove();

});

//get form element by its id
let form = document.getElementById("task")
form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents the page from reloading

    //create a div container for new task item
    let taskItem = document.createElement("div");

    //create checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let taskDescription = document.createElement("span");
    let taskText = document.getElementById("new-task").value;
    taskDescription.textContent = taskText;

    //add event listener to the checkbox that when clicked, crosses and uncrosses off the task description of the current task item
    checkbox.addEventListener("click", () => {
    
        if (checkbox.checked) {
            taskDescription.style.textDecoration = "line-through";
        } else {
            taskDescription.style.textDecoration = "none"; //does nothing if the checkbox is unchecked
        }
  });

  //delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.addEventListener("click", () => taskItem.remove());

  //append checkbox, description, and button to div container
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(deleteBtn);

  //append task item container to the list container
  listContainer.appendChild(taskItem);

  form.reset(); //resets the form
});
