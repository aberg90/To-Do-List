document.addEventListener('DOMContentLoaded', function() {
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
        let span = document.createElement("span");
        let value = document.createTextNode(formInput.value);

        span.appendChild(value);
        li.appendChild(span);

        // Remove button
        let removeButton = document.createElement('button');
        removeButton.textContent = "REMOVE";
        removeButton.className = 'remove-btn';
        
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });

        removeButton.addEventListener('click', function(event) {
            event.stopPropagation();
            li.remove();
        });

        li.appendChild(removeButton);
        formList.appendChild(li);
        formInput.value = ""; 
    }
});