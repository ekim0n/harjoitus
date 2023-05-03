//to get the date
const date = new Date();

//function for the data be saved in local storage
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
//function to bring data from local storage
function showData() {
    list.innerHTML = localStorage.getItem("data");
}



//function after pressing the submit button
function submit() {

    const name = document.getElementById("name").value;
    const toDo = document.getElementById("todo").value;
    const check = document.getElementById("important");
    const liElement = document.querySelectorAll("li");

    let result = date + " " + name + ":" + " " + toDo;
    //check up that field are not empty
    if (name === "" || toDo === "") {
        return alert("Fields cannot be empty!");
    } else {
        const toDoList = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = result;
        //if the checkbox is checked, it makes red border to li element
        if (check.checked) {
            li.style.border = "2px solid red";
        }
        //makes a span for li element, shape of a x, that you can then press and erase the task
        toDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        //clear task from the list
        span.addEventListener("click", function () {
            li.remove();
            saveData();

        });
    }

    saveData();





    //delete input fields and checkbox
    document.getElementById("name").value = "";
    document.getElementById("todo").value = "";
    check.checked = false;



}
//button for clearing all the tasks at once
function clearAll() {
    localStorage.clear();
    list.innerHTML = "";
    saveData();
}

showData();
