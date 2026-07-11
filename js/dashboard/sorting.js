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