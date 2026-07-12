// ==========================
// TEMA OSCURO
// ==========================

function initTheme() {

    const button =
        document.querySelector("#themeToggle");

    if (!button) return;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        button.textContent = "☀️";

    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        button.textContent =
            dark ? "☀️" : "🌙";

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );

    });

}