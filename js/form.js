let allNames = [];
let allToDo = [];

const date = new Date();

function submit(){

    document.getElementById("name").value = "";
    document.getElementById("todo").value = "";
    const name = document.getElementById("name").value;
    const toDo = document.getElementById("todo").value;
    
    let result =  date + " " + name + " " + toDo;

    

    console.log(result)
   
    
}

