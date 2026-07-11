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

        const params = new URLSearchParams(window.location.search);
        const editId = Number(params.get("id"));

        const task = {

            id: Date.now(),

            title,

            description,

            priority,

            dueDate: date,

            category,

            status: "TO_DO",

            createdAt: new Date().toISOString(),

            updatedAt: null

        };

        const tasks = getTasks();

        if (editId) {

            const index = tasks.findIndex(task => task.id === editId);

            if (index !== -1) {

                task.id = editId;

                task.status = tasks[index].status;

                task.createdAt = tasks[index].createdAt;

                task.updatedAt = new Date().toISOString();

                tasks[index] = task;

            }

        } else {

            tasks.push(task);

        }

        saveTasks(tasks);

        showToast("Tarea guardada correctamente.", "success");

        taskForm.reset();

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

    updateProjectSummary();

    showToast("Tarea eliminada correctamente.", "success");

}

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
    



    // ==========================
// ACTUALIZAR ESTADO
// ==========================

function updateTaskStatus(id, status) {

    console.log("Cambio de estado:", id, status);

    const tasks = getTasks();

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    task.status = status;

    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);

    loadTasks();

    updateStats();

    showToast("Estado actualizado.", "success");

}


   

