// ==========================
// DASHBOARD
// ==========================

function loadTasks() {

    const taskList = document.querySelector("#taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    const tasks = getFilteredTasks();

    tasks.forEach(task => {

        const card = createTaskCard(task);

        taskList.appendChild(card);

        addTaskEvents(card, task);

    });

}