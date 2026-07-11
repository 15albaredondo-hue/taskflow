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

    updateChart();

    showToast("Tarea eliminada correctamente.", "success");

}