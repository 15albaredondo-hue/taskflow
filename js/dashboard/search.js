// ==========================
// BUSCADOR
// ==========================

let searchText = "";

function initSearch() {

    const searchInput = document.querySelector("#searchTask");

    if (!searchInput) return;

    searchInput.addEventListener("input", (event) => {

        searchText = event.target.value.toLowerCase();

        loadTasks();

    });

}