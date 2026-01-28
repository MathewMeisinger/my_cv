const backToTop = document.getElementById("backToTop");
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const newTheme = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
