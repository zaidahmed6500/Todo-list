const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // '×' symbol
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Mark as checked or delete on click
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load saved tasks
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showTasks();
