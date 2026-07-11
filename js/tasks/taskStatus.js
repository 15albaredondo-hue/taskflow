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

    updateProjectSummary();
    
    updateChart();

    showToast("Estado actualizado.", "success");

}