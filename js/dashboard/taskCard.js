// ==========================
// CREAR TARJETA DE TAREA
// ==========================

function createTaskCard(task) {

    const card = document.createElement("div");

    card.classList.add("task-item");

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);

    const isOverdue =
        task.status !== "DONE" &&
        dueDate < today;

    if (isOverdue) {

        card.classList.add("overdue");

    }

    card.innerHTML = `

        <h3>${task.title}</h3>

        <p class="task-description">
            ${task.description}
        </p>

        ${isOverdue
            ? `
            <p class="overdue-label">
                🔴 Tarea vencida
            </p>
            `
            : ""}

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

    return card;

}