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