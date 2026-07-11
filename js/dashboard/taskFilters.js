// ==========================
// FILTRO ACTUAL
// ==========================

function getFilteredTasks() {

    let tasks = getTasks();

    const sortSelect = document.querySelector("#sortTasks");

    const sortBy = sortSelect
        ? sortSelect.value
        : "date";

    // ordenar por título

    if (sortBy === "title") {

        tasks.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    // ordenar por fecha

    if (sortBy === "date") {

        tasks.sort((a, b) =>
            new Date(a.dueDate) -
            new Date(b.dueDate)
        );

    }

    // filtrar vencidas

    if (currentFilter === "OVERDUE") {

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        tasks = tasks.filter(task => {

            const dueDate = new Date(task.dueDate);

            return (
                task.status !== "DONE" &&
                dueDate < today
            );

        });

    }

    // resto de estados

    else if (currentFilter !== "ALL") {

        tasks = tasks.filter(task =>
            task.status === currentFilter
        );

    }

    // búsqueda

    if (searchText !== "") {

        tasks = tasks.filter(task =>

            task.title
                .toLowerCase()
                .includes(searchText)

            ||

            task.description
                .toLowerCase()
                .includes(searchText)

        );

    }

    // ordenar prioridad

    if (sortBy === "priority") {

        const priorities = {

            Alta: 1,
            Media: 2,
            Baja: 3

        };

        tasks.sort((a, b) =>
            priorities[a.priority] -
            priorities[b.priority]
        );

    }

    return tasks;

}