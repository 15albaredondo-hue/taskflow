// ==========================
// DASHBOARD
// ==========================
// ==========================
// FILTRO ACTUAL
// ==========================

let currentFilter = "ALL";
let searchText = "";

function loadTasks() {

    const taskList = document.querySelector("#taskList");

    if (!taskList) return;

    let tasks = getTasks();

    const sortSelect = document.querySelector("#sortTasks");

    const sortBy = sortSelect ? sortSelect.value : "date";

    taskList.innerHTML = "";

    // Filtrar por titulo

    if (sortBy === "title") {

        tasks.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    // Filtrar por fecha

    if (sortBy === "date") {

        tasks.sort((a, b) =>
            new Date(a.dueDate) - new Date(b.dueDate)
        );

    }
    // Filtrar por estado

    if (currentFilter !== "ALL") {

        tasks = tasks.filter(task =>
            task.status === currentFilter
        );

    }

    // Filtrar por texto

    if (searchText !== "") {

        tasks = tasks.filter(task =>

            task.title
                .toLowerCase()
                .includes(searchText)

            ||

            task.description
                .toLowerCase()
                .includes(searchText)

        );

    }

    // Filtrar por prioridad

    if (sortBy === "priority") {

        const priorities = {

            Alta: 1,
            Media: 2,
            Baja: 3

        };

        tasks.sort((a, b) =>
            priorities[a.priority] -
            priorities[b.priority]
        );

    }
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

// ==========================
// FILTRAR TAREAS
// ==========================

function initFilters() {

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            currentFilter = button.dataset.filter;

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            loadTasks();

        });

    });

}

// ==========================
// BUSCADOR
// ==========================

function initSearch() {

    const searchInput = document.querySelector("#searchTask");

    if (!searchInput) return;

    searchInput.addEventListener("input", (event) => {

        searchText = event.target.value.toLowerCase();

        loadTasks();

    });


}

// ==========================
// ORDENAR TAREAS
// ==========================

function initTaskSorting() {

    const sortSelect = document.querySelector("#sortTasks");

    if (!sortSelect) return;

    sortSelect.addEventListener("change", () => {

        loadTasks();

    });

}

// ==========================
// RESUMEN DEL PROYECTO
// ==========================

function updateProjectSummary() {

    const tasks = getTasks();

    // Total de tareas

    const total = tasks.length;

    // Completadas

    const completed = tasks.filter(task =>
        task.status === "DONE"
    ).length;

    // Porcentaje completado

    const progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.querySelector("#projectProgress").textContent =
        `${progress}%`;

    // Prioridad alta

    const highPriority = tasks.filter(task =>
        task.priority === "Alta"
    ).length;

    document.querySelector("#highPriorityCount").textContent =
        highPriority;

    // Próxima entrega

    const pendingTasks = tasks
        .filter(task => task.status !== "DONE")
        .sort((a, b) =>
            new Date(a.dueDate) - new Date(b.dueDate)
        );

    const nextDeadline = document.querySelector("#nextDeadline");

    if (pendingTasks.length > 0) {

        nextDeadline.textContent =
            pendingTasks[0].dueDate;

    } else {

        nextDeadline.textContent = "Sin tareas";

    }

}