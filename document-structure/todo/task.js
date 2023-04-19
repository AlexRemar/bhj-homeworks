const tasks = document.getElementsByClassName('tasks__list');
const text = document.getElementById('task__input');


text.oninput = () => {
    if(text.value[0] === ' '){
        text.value = '';
    }
  }

for (const task of tasks) {
    const button = document.getElementById('tasks__add');
    const form = document.querySelector('input');

    button.addEventListener('click', function(e){
        e.preventDefault();
        if(form.value != ''){
        const createTask = document.createElement('div'); 
        createTask.className = 'task';
        task.insertAdjacentElement('afterEnd', createTask);

        const taskDiv = createTask.appendChild(document.createElement('div'));  
        taskDiv.className = 'task__title'
        createTask.insertAdjacentElement('beforeEnd', taskDiv);
        taskDiv.insertAdjacentText('beforeend', form.value)

        const taskRemove = createTask.appendChild(document.createElement('a'));    
        taskRemove.setAttribute('href', '#');
        taskRemove.className = 'task__remove';
        createTask.insertAdjacentElement('beforeEnd', taskRemove);
        taskRemove.innerHTML = '&times;'

        text.value = "";
        }

        const x = document.querySelector('.task__remove');
        const activeTask = document.querySelector('.task');
        x.addEventListener('click', function(e){
            activeTask.remove(e.target)         
        })
    })
}

