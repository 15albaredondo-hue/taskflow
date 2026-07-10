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

<div class="task-status">

    <label>Estado</label>

    <select
        class="status-select"
        data-id="${task.id}">

        <option value="TO_DO"
            ${task.status === "TO_DO" ? "selected" : ""}>
            🟡 Pendiente
        </option>

        <option value="IN_PROGRESS"
            ${task.status === "IN_PROGRESS" ? "selected" : ""}>
            🔵 En progreso
        </option>

        <option value="DONE"
            ${task.status === "DONE" ? "selected" : ""}>
            🟢 Completada
        </option>

    </select>

</div>

            <p class="task-date">
                📅 ${task.dueDate}
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

        const statusSelect = card.querySelector(".status-select");

statusSelect.addEventListener("change", (event) => {

    updateTaskStatus(
        task.id,
        event.target.value
    );

});

    });

}

// ==========================
// ESTADÍSTICAS
// ==========================

function updateStats() {

    const tasks = getTasks();

    const total = tasks.length;

    const pending = tasks.filter(task =>
        task.status === "TO_DO"
    ).length;

    const progress = tasks.filter(task =>
        task.status === "IN_PROGRESS"
    ).length;

    const completed = tasks.filter(task =>
        task.status === "DONE"
    ).length;

    document.querySelector("#totalCount").textContent = total;
    document.querySelector("#pendingCount").textContent = pending;
    document.querySelector("#progressCount").textContent = progress;
    document.querySelector("#completedCount").textContent = completed;

}

