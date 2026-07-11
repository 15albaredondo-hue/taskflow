// ==========================
// LOGIN
// ==========================

function initLogin() {

    // ==========================
    // MOSTRAR / OCULTAR CONTRASEÑA
    // ==========================

    const togglePassword = document.querySelector(".toggle-password");
    const password = document.querySelector("#password");

    if (togglePassword && password) {

        togglePassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                password.type = "password";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    }

    // ==========================
    // FORMULARIO LOGIN
    // ==========================

    const loginForm = document.querySelector("#loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (email === "" || password === "") {

            showToast(
                "Introduce el correo y la contraseña.",
                "error"
            );

            return;

        }

        // Simular sesión iniciada

        localStorage.setItem("isLogged", "true");
        localStorage.setItem("userEmail", email);

        showToast(
            "Bienvenido a TaskFlow.",
            "success"
        );

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 800);

    });

}