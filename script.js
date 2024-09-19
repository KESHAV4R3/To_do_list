const task = document.querySelector('#task');
const add_button = document.querySelector('#add_button');
const task_container = document.querySelector('#task_container');

let data = "";

function addEventHandler(event) {
    task.value = "";

    if (data.length > 0) {

        const newItem = document.createElement('li');
        newItem.classList.add('list-item');
        newItem.style.cssText+="display:flex"

        const text_content = document.createElement('p');
        text_content.classList.add('item');
        text_content.textContent = data;

        const button1 = document.createElement('button');
        button1.classList.add('button_remove');
        button1.textContent = 'Completed';


        const button2 = document.createElement('button');
        button2.classList.add('button_remove');
        button2.textContent = 'Remove';

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        buttons.appendChild(button1);
        buttons.appendChild(button2)

        button1.addEventListener('click', () => { taskCompletedHandler(text_content, button1) });
        button2.addEventListener('click', () => { markDoneHandler(newItem) });

        newItem.appendChild(text_content);
        newItem.appendChild(buttons);
        task_container.insertAdjacentElement('afterbegin', newItem);
    }
    else {
        alert("add some task !! ")
    }
}

function markDoneHandler(newItem) {
    task_container.removeChild(newItem);
    alert("task removed !!")
}

function taskCompletedHandler(data, button) {
    data.style.cssText += 'text-decoration: line-through;text-decoration-thickness: 2px;'
    button.style.cssText += 'text-decoration: line-through;text-decoration-thickness: 2px;'
    button.disabled = true;
}


task.addEventListener('change', (event) => {
    data = event.target.value;
})


add_button.addEventListener('click', addEventHandler);