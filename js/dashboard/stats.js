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
// RESUMEN DEL PROYECTO
// ==========================

function updateProjectSummary() {

    const tasks = getTasks();

    const total = tasks.length;

    const completed = tasks.filter(task =>
        task.status === "DONE"
    ).length;

    const progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.querySelector("#projectProgress").textContent =
        `${progress}%`;

    document.querySelector("#projectProgressBar").style.width =
        `${progress}%`;

    const highPriority = tasks.filter(task =>
        task.priority === "Alta"
    ).length;

    document.querySelector("#highPriorityCount").textContent =
        highPriority;

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