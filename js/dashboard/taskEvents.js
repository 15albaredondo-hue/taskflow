// ==========================
// EVENTOS DE LAS TARJETAS
// ==========================

function addTaskEvents(card, task) {

    // ==========================
    // BOTÓN EDITAR
    // ==========================

    const editButton = card.querySelector(".edit-btn");

    editButton.addEventListener("click", () => {

        window.location.href =
            `nueva-tarea.html?id=${task.id}`;

    });

    // ==========================
    // BOTÓN ELIMINAR
    // ==========================

    const deleteButton = card.querySelector(".delete-btn");

    deleteButton.addEventListener("click", () => {

        deleteTask(task.id);

    });

    // ==========================
    // CAMBIAR ESTADO
    // ==========================

    const statusSelect = card.querySelector(".status-select");

    statusSelect.addEventListener("change", (event) => {

        updateTaskStatus(
            task.id,
            event.target.value
        );

    });

}