let btnAdd = document.querySelector(".btn-success");
let input = document.getElementById("user-input");
let reset = document.querySelector(".btn-danger");
let container = document.querySelector(".container");
let ul = document.getElementById("todo-list");
let error = document.getElementById("error");
const btnClear = document.querySelector(".btn-primary");
let index = 0;

const addTask = (value) => {
  if (value) {
    const div = document.createElement("div");
    div.id = `task-${index}`;
    div.innerHTML = `<li ><div>${value}</div><button class="btn-danger delete" onClick=removeFromList(${index})>x</button></li>`;
    ul.appendChild(div);
    input.value = "";
    index++;
    error.innerHTML = "";
  } else {
    error.innerHTML = "Please enter task..";
  }
};

const removeFromList = (index) => {
  const taskId = document.getElementById(`task-${index}`);

  ul.removeChild(taskId);
};

// Button ADD
btnAdd.addEventListener("click", function () {
  addTask(input.value);
});

// On ENTER Click task should get added
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask(input.value);
  }
});

// RESET button:
reset.addEventListener("click", function () {
  input.value = "";
  console.log("red");
});

// Button ClearAll
// btnClear.addEventListener("click", function () {
//   ul.removeChild(li);
//   console.log("clear");
// });

// line through the task (cut mark on sentence)
// li.addEventListener("click", function () {
//   li.style.textDecoration = "line-through";
// });
// li.addEventListener("dblclick", function () {
//   div.removeChild(taskId);
// });
