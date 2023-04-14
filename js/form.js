let allNames = [];
let allToDo = [];

function submit(){

    const name = document.getElementById("name").value;
    name.innerHTML = "";
    const toDo = document.getElementById("todo").value;
    toDo.innerHTML = "";
    let result = name + " " + toDo;

    

    console.log(result)
   

}

