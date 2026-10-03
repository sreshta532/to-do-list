const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');

function updateEmptyState() {
    emptyState.style.display = taskList.children.length ? 'none' : 'block';
}

function addTask() {
    const text = taskInput.value.trim();

    if (!text) return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.setAttribute('aria-label', 'Mark task as completed');
    completeBtn.innerHTML = `
        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"/>
        </svg>
    `;

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    deleteBtn.innerHTML = `
        <svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3h6l1 2h3v2H3V5h3l1-2Zm0 5h2v7H7V8Zm4 0h2v7h-2V8ZM5 17V7h10v10H5Z"/>
        </svg>
    `;

    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskText.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
        updateEmptyState();
    });

    taskItem.append(completeBtn, taskText, deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
    updateEmptyState();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') addTask();
});

updateEmptyState();