let allNames = [];
let allToDo = [];

const date = new Date();


function submit(){

    const name = document.getElementById("name").value;
    const toDo = document.getElementById("todo").value;
    let result =  date + " " + name+ ":" + " " + toDo;

    if(name === "" || toDo === "" ){
     return   alert("Fields cannot be empty!");
    }else{
        const toDoList = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = result;
        toDoList.appendChild(li);
        
    }

    console.log(result)
    
    
       

    
   
    document.getElementById("name").value = "";
    document.getElementById("todo").value = "";
}

