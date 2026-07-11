// ==========================
// CARGAR TAREA PARA EDITAR
// ==========================

function loadTaskToEdit() {

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    if (!id) return;

    const tasks = getTasks();

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    document.querySelector("#title").value = task.title;
    document.querySelector("#description").value = task.description;
    document.querySelector("#priority").value = task.priority;
    document.querySelector("#date").value = task.dueDate;
    document.querySelector("#category").value = task.category;

    const submitButton = document.querySelector("button[type='submit']");

    if (submitButton) {

        submitButton.textContent = "Guardar cambios";

    }

}