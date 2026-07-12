// ==========================
// EXPORTAR CSV
// ==========================

function initExportCSV() {

    const button = document.querySelector("#exportCSV");

    if (!button) return;

    button.addEventListener("click", exportCSV);

}

function initExportPDF() {

    const button = document.querySelector("#exportPDF");

    if (!button) return;

    button.addEventListener("click", exportPDF);

}

function exportCSV() {

    const tasks = getTasks();

    if (tasks.length === 0) {

        showToast(
            "No hay tareas para exportar.",
            "error"
        );

        return;

    }

 }

    function exportPDF() {


        const tasks = getTasks();

        if (tasks.length === 0) {

            showToast(
                "No hay tareas para exportar.",
                "error"
            );

            return;

        }

        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("TaskFlow - Listado de tareas", 20, 20);

        doc.setFontSize(11);

        let y = 35;

        tasks.forEach((task, index) => {

            doc.text(`${index + 1}. ${task.title}`, 20, y);

            y += 6;

            doc.text(`Estado: ${task.status}`, 25, y);

            y += 6;

            doc.text(`Prioridad: ${task.priority}`, 25, y);

            y += 6;

            doc.text(`Fecha límite: ${task.dueDate}`, 25, y);

            y += 10;

            if (y > 270) {

                doc.addPage();

                y = 20;

            }

        });

        doc.save("taskflow-tareas.pdf");

        showToast(
            "PDF exportado correctamente.",
            "success"
        );

    }

    const headers = [

        "Título",
        "Descripción",
        "Categoría",
        "Prioridad",
        "Estado",
        "Fecha límite"

    ];

    let csv = headers.join(";") + "\n";

    tasks.forEach(task => {

        csv += [

            task.title,
            task.description,
            task.category,
            task.priority,
            task.status,
            task.dueDate

        ].join(";") + "\n";

    });

    const blob = new Blob(

        [csv],

        { type: "text/csv;charset=utf-8;" }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "taskflow-tareas.csv";

    link.click();

    URL.revokeObjectURL(url);

    showToast(
        "CSV exportado correctamente.",
        "success"
    );

