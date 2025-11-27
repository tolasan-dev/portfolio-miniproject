const htmlEl = document.documentElement;
const iconMobile = document.getElementById("themeIconMobile");
const iconDesktop = document.getElementById("themeIconDesktop");
const btnMobile = document.getElementById("themeToggleBtnMobile");
const btnDesktop = document.getElementById("themeToggleBtnDesktop");

const saved = localStorage.getItem("bsTheme");
if (saved) {
  htmlEl.setAttribute("data-bs-theme", saved);
  const iconClass = saved === "dark" ? "fas fa-sun" : "fas fa-moon";
  iconMobile.className = iconClass;
  iconDesktop.className = iconClass;
}

function toggleTheme() {
  const current = htmlEl.getAttribute("data-bs-theme");
  const next = current === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-bs-theme", next);
  localStorage.setItem("bsTheme", next);
  const iconClass = next === "dark" ? "fas fa-sun" : "fas fa-moon";
  iconMobile.className = iconClass;
  iconDesktop.className = iconClass;
}

btnMobile.addEventListener("click", toggleTheme);
btnDesktop.addEventListener("click", toggleTheme);
