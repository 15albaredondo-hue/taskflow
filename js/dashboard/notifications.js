// ==========================
// NOTIFICACIONES
// ==========================

function showTaskNotifications() {

    const tasks = getTasks();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let overdue = 0;
    let todayTasks = 0;

    tasks.forEach(task => {

        if (task.status === "DONE") return;

        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);

        if (dueDate < today) {

            overdue++;

        }
        else if (dueDate.getTime() === today.getTime()) {

            todayTasks++;

        }

    });

    if (overdue > 0) {

        showToast(
            `🚨 Tienes ${overdue} tarea${overdue > 1 ? "s" : ""} vencida${overdue > 1 ? "s" : ""}.`,
            "error"
        );

    }
    else if (todayTasks > 0) {

        showToast(
            `⚠️ Hoy vence${todayTasks > 1 ? "n" : ""} ${todayTasks} tarea${todayTasks > 1 ? "s" : ""}.`,
            "warning"
        );

    }
    else {

        showToast(
            "✅ No tienes tareas urgentes.",
            "success"
        );

    }

}