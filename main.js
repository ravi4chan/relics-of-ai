const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  menu.hidden = open;
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

const form = document.querySelector(".book");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const email = String(data.get("email") || "");
  if (!form.reportValidity()) return;
  if (!email.includes("@")) return;
  form.classList.add("is-done");
  form.querySelector(".book__note").textContent =
    "You’re on the list. We’ll write when a place is ready.";
});
