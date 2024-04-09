const input = document.querySelector("#text-input");
const addButton = document.querySelector("button i");
const taskList = document.querySelector("#taskList");

addButton.addEventListener('click', () => {
    let inputText = input.value;
    
    if(inputText.trim() !== '') {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.addEventListener('change', () => {
            if(checkbox.checked) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = inputText;
        span.classList.add('task-text');

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('task-removeBtn');
        removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);

        taskList.appendChild(li);

        input.value = '';
    }else {
        alert("Please enter a task");
    }
    
});