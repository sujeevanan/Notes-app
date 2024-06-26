var noteBox = document.querySelector(".noteBox");
var button = document.getElementById("btn");

function creatNotes() {
  var note = document.createElement("p");
  var img = document.createElement("img");
  img.src = "./images/delete.png ";
  note.className = "noteInput";
  note.setAttribute("contenteditable", "true");
  noteBox.appendChild(note).appendChild(img);
}
button.addEventListener("click", function () {
  creatNotes();
  updateStorage();
});

noteBox.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
function updateStorage() {
  localStorage.setItem("notes", noteBox.innerHTML);
}
function showNotes() {
  noteBox.innerHTML = localStorage.getItem("notes");
}
showNotes();
