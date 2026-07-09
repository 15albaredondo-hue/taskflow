// ==========================
// TASKS
// Gestión de tareas
// ==========================

// ==========================
// FORMULARIO NUEVA TAREA
// ==========================

function initTaskForm() {

    const taskForm = document.querySelector("#taskForm");

    if (!taskForm) return;

    taskForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const title = document.querySelector("#title").value.trim();
        const description = document.querySelector("#description").value.trim();
        const priority = document.querySelector("#priority").value;
        const date = document.querySelector("#date").value;
        const category = document.querySelector("#category").value;

        // Validación

        if (
            title === "" ||
            description === "" ||
            priority === "" ||
            date === "" ||
            category === ""
        ) {

            showToast("Todos los campos son obligatorios.", "error");
            return;

        }

        // Crear objeto tarea

        const task = {

            id: Date.now(),
            title,
            description,
            priority,
            date,
            category,
            completed: false

        };

        // Obtener tareas existentes

        const tasks = getTasks();

        // Añadir nueva tarea

        tasks.push(task);

        // Guardar en LocalStorage

        saveTasks(tasks);

        console.log("Tareas guardadas:", tasks);

        showToast("Tarea creada correctamente.", "success");

        taskForm.reset();

        // Redireccionar al Dashboard

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 800);

    });

}

// ==========================
// CONTADOR DE CARACTERES
// ==========================

function initCharacterCounter() {

    const description = document.querySelector("#description");
    const counter = document.querySelector("#descriptionCounter");

    if (!description || !counter) return;

    description.addEventListener("input", () => {

        counter.textContent =
            `${description.value.length} / 250 caracteres`;

    });

}

// ==========================
// ELIMINAR TAREA
// ==========================

function deleteTask(id) {

    let tasks = getTasks();

    tasks = tasks.filter(task => task.id !== id);

    saveTasks(tasks);

    loadTasks();

    updateStats();

    showToast("Tarea eliminada correctamente.", "success");

}