document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load the saved theme from local storage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save theme preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});
