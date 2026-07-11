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