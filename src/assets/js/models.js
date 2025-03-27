
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function openModal(modal) {
        modal.style.display = "flex";
        body.classList.add("modal-open");
    }

    function closeModal(modal) {
        modal.style.display = "none";
        body.classList.remove("modal-open");
    }

    // Open User Type Selection
    document.getElementById("open-login").addEventListener("click", () => openModal(document.getElementById("userTypeModal")));
    document.getElementById("open-signup").addEventListener("click", () => openModal(document.getElementById("signupModal")));
    document.getElementById("close-user-type").addEventListener("click", () => closeModal(document.getElementById("userTypeModal")));

    // Select User or Admin Login
    document.getElementById("login-user").addEventListener("click", () => {
        closeModal(document.getElementById("userTypeModal"));
        openModal(document.getElementById("loginModal"));
    });

    document.getElementById("login-admin").addEventListener("click", () => {
        closeModal(document.getElementById("userTypeModal"));
        openModal(document.getElementById("adminLoginModal"));
    });

    // Close Modals
    document.getElementById("close-login").addEventListener("click", () => closeModal(document.getElementById("loginModal")));
    document.getElementById("close-admin").addEventListener("click", () => closeModal(document.getElementById("adminLoginModal")));
    document.getElementById("close-signup").addEventListener("click", () => closeModal(document.getElementById("signupModal")));

    // Forgot & Reset Password Modals
    document.getElementById("open-forgot-password").addEventListener("click", () => openModal(document.getElementById("forgotPasswordModal")));
    document.getElementById("close-forgot-password").addEventListener("click", () => closeModal(document.getElementById("forgotPasswordModal")));
    document.getElementById("close-reset-password").addEventListener("click", () => closeModal(document.getElementById("resetPasswordModal")));

    // Switch between Sign In & Sign Up
    document.getElementById("switch-to-signup").addEventListener("click", () => {
        closeModal(document.getElementById("loginModal"));
        openModal(document.getElementById("signupModal"));
    });

    document.getElementById("switch-to-login").addEventListener("click", () => {
        closeModal(document.getElementById("signupModal"));
        openModal(document.getElementById("loginModal"));
    });

    // Close modal if clicking outside content
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) closeModal(modal);
        });
    });
});


