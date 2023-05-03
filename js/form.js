const date = new Date();


function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}




function submit() {

    const name = document.getElementById("name").value;
    const toDo = document.getElementById("todo").value;
    const check = document.getElementById("important");
    const liElement = document.querySelectorAll("li");

    let result = date + " " + name + ":" + " " + toDo;

    if (name === "" || toDo === "") {
        return alert("Fields cannot be empty!");
    } else {
        const toDoList = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = result;

        if (check.checked) {
            li.style.border = "2px solid red";
        }

        toDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function () {
            li.remove();
            saveData();

        });
    }

    saveData();






    document.getElementById("name").value = "";
    document.getElementById("todo").value = "";
    check.checked = false;



}

function clearAll() {
    localStorage.clear();
    list.innerHTML = "";
    saveData();
}

showData();
