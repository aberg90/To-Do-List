// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("taskInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("taskInput").value = "";
//     }
//     return 
// }


//Create a "close" button and append it to each list item
const formTask = document.getElementById('taskForm');
const formInput = document.getElementById('taskInput');
const formList = document.getElementById('taskList');

formTask.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    newElement();
});


// To add things to the list
document.addEventListener('DOMContentLoaded', () => {
    const formTask = document.getElementById('taskForm');
    const formInput = document.getElementById('taskInput');
    const formList = document.getElementById('taskList');

    formTask.addEventListener('submit', function(event) {
        event.preventDefault(); 
        newElement();
    });

    function newElement() {
        if (formInput.value.trim() === '') {
            return;
        }

        let li = document.createElement("li");
        let value = document.createTextNode(formInput.value);
        
        li.appendChild(value);
        formList.appendChild(li);
        formInput.value = ""; 
    }
})
    


// taskInput, taskList, taskForm




// document.addEventListener('DOMContentLoaded', () => {
//     const formTask = document.getElementById('taskForm');
//     const formInput = document.getElementById('taskInput');
//     const formList = document.getElementById('taskList');

//     formTask.addEventListener('submit', function(event) {
//         event.preventDefault(); 
//         newElement();
//     });

//     function newElement() {
//         if (formInput.value.trim() === '') {
//             return;
//         }

//         let li = document.createElement("li");
//         let value = document.createTextNode(formInput.value);
        
//         li.appendChild(value);
//         formList.appendChild(li);
//         formInput.value = ""; 
//     }
// });