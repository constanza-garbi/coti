let tareas = [];


const form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
    event.preventDefault();

    const inputText= document.querySelector("#text").value;
    tareas.push({
        id: Date.now(),
        text: inputText.value,
        complete: false,
});

localStorage.setItem("tareas", JSON.stringify(tareas));

inputText.value="";
console.log(tareas);

});

const renderTareas = ()=>{
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const table = document.querySelector("table");
    table.innerHTML= "";
    
}

