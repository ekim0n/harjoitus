const date = new Date();

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

function myFunction() {
    const list = document.getElementById("list").classList;
    list.add("myStyle");
}


function submit(){

    const name = document.getElementById("name").value;
    const toDo = document.getElementById("todo").value;
    const check = document.getElementById("important");
    let result =  date + " " + name+ ":" + " " + toDo;

    if(name === "" || toDo === "" ){
     return   alert("Fields cannot be empty!");
    }else{
        const toDoList = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = result;
        toDoList.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        } 

        if (check.checked == true) {
            document.getElementById("list").classList.add("border");
          }
        
        saveData();
    

   
    document.getElementById("name").value = "";
    document.getElementById("todo").value = "";

}
showData();
