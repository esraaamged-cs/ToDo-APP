let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

Window.onload = function () {
    theInput.focus();
};


theAddButton.onclick = function () {

    if (theInput.value === ``) {

        console.log("No Value");

    } else {

        noTasksMsg.remove();
        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Delete");
        mainSpan.appendChild(text);
        mainSpan.className = `task-box`;
        deleteElement.appendChild(deleteText);
        deleteElement.className = `delete`;

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);

        theInput.value = ``;
        theInput.focus();
    }
};

document.addEventListener(`click`, function (e) {

    if (e.target.className == `delete`)  {
       e.target.parentNode.remove();

       if (tasksContainer.childElementCount == 0) {
           createNoTasks();
           
       } else {
           
       }
        
    }

    if (e.target.classList.contains (`task-box`))  {
        e.target.classList.toggle("finished");
         
     }
});

function createNoTasks() {
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No Tasks To Show");
    mdgSpan.appendChild(msgText);
    msgSpan.className = `no-tasks-message`;

    tasksContainer.appendChild(msgSpan);
}