function addTask() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  if (title === "" || desc === "") {
    alert("Please fill all fields");
    return;
  }

  let task = createTask(title, desc);
  document.getElementById("pendingList").appendChild(task);

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
}

function createTask(title, desc) {
  let task = document.createElement("div");
  task.className = "task";

  let time = new Date().toLocaleString();

  task.innerHTML = `
    <h4>${title}</h4>
    <p>${desc}</p>
    <div class="time">Added: ${time}</div>

    <div class="actions">
      <button onclick="editTask(this)">✏ Edit</button>
      <button onclick="completeTask(this)">✔ Complete</button>
      <button onclick="this.parentElement.parentElement.remove()">🗑 Delete</button>
    </div>
  `;

  return task;
}

function editTask(btn) {
  let task = btn.parentElement.parentElement;
  let title = task.querySelector("h4");
  let desc = task.querySelector("p");

  let newTitle = prompt("Edit Title", title.innerText);
  let newDesc = prompt("Edit Description", desc.innerText);

  if (newTitle) title.innerText = newTitle;
  if (newDesc) desc.innerText = newDesc;
}

function completeTask(btn) {
  let task = btn.parentElement.parentElement;
  let completedTime = document.createElement("div");

  completedTime.className = "time";
  completedTime.innerText = "Completed: " + new Date().toLocaleString();

  task.appendChild(completedTime);
  btn.remove();

  document.getElementById("completedList").appendChild(task);
}
