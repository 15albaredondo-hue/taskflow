// ==========================
// FILTRAR TAREAS
// ==========================

let currentFilter = "ALL";

function initFilters() {

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            currentFilter = button.dataset.filter;

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            loadTasks();

        });

    });

}