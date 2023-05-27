document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var taskItem = document.createElement("li");
      taskItem.innerHTML = taskText + '<button class="delete-button">Delete</button>';
      taskItem.querySelector(".delete-button").addEventListener("click", function () {
        taskItem.remove();
      });
  
      taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        if (taskItem.parentNode.id === "pending-tasks") {
          document.getElementById("completed-tasks").appendChild(taskItem);
        } else {
          document.getElementById("pending-tasks").appendChild(taskItem);
        }
      });
  
      document.getElementById("pending-tasks").appendChild(taskItem);
      taskInput.value = "";
    }
  });
  