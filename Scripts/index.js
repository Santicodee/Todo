"use strict";

const inputBox = document.getElementById("input-box");
const toDoList = document.querySelector(".to-do-list");

const addTask = document.querySelector(".add");

addTask.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("No task ");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    toDoList.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
});

toDoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
