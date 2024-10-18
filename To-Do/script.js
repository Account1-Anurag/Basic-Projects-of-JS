const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask() {
    let input = inputbox.value.trim(); // Trim the value to remove extra spaces
    if (input === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input; // Use the trimmed value for the task
        listcontainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = ''; // Clear the input field
    saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

/* To save in the local directory */

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();