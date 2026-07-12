/// ==========================
// INICIALIZAR APLICACIÓN
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    initLogin();

    initTaskForm();

    initCharacterCounter();

    loadTaskToEdit();

    initFilters();

    initSearch();

    initTaskSorting();

    loadTasks();

    updateStats();

    updateProjectSummary();

    updateChart();

    showTaskNotifications();

    initTheme();

    initExportCSV();
    
    initExportPDF();

});