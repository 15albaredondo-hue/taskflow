// ==========================
// DASHBOARD
// ==========================

function loadTasks() {

    const taskList = document.querySelector("#taskList");

    if (!taskList) return;

    const tasks = getTasks();

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.classList.add("task-item");

        card.innerHTML = `

            <h3>${task.title}</h3>

            <p class="task-description">
                ${task.description}
            </p>

            <div class="task-info">

                <span class="category">
                    📁 ${task.category}
                </span>

                <span class="priority ${task.priority.toLowerCase()}">
                    ${task.priority}
                </span>

            </div>

            <p class="task-date">
                📅 ${task.date}
            </p>

            <div class="task-buttons">

                <button
                    class="edit-btn"
                    data-id="${task.id}">
                    ✏️ Editar
                </button>

                <button
                    class="delete-btn"
                    data-id="${task.id}">
                    🗑️ Eliminar
                </button>

            </div>

        `;

        taskList.appendChild(card);

        // ==========================
        // BOTÓN EDITAR
        // ==========================

        const editButton = card.querySelector(".edit-btn");

        editButton.addEventListener("click", () => {

            window.location.href = `nueva-tarea.html?id=${task.id}`;

        });

        // ==========================
        // BOTÓN ELIMINAR
        // ==========================

        const deleteButton = card.querySelector(".delete-btn");

        deleteButton.addEventListener("click", () => {

            deleteTask(task.id);

        });

    });

}

// ==========================
// ESTADÍSTICAS
// ==========================

function updateStats() {

    const tasks = getTasks();

    const total = tasks.length;

    const pending = tasks.filter(task => !task.completed).length;

    const completed = tasks.filter(task => task.completed).length;

    const progress = 0;

    const totalCount = document.querySelector("#totalCount");
    const pendingCount = document.querySelector("#pendingCount");
    const completedCount = document.querySelector("#completedCount");
    const progressCount = document.querySelector("#progressCount");

    if (totalCount) totalCount.textContent = total;
    if (pendingCount) pendingCount.textContent = pending;
    if (completedCount) completedCount.textContent = completed;
    if (progressCount) progressCount.textContent = progress;

}