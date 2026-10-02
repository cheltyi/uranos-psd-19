"use strict";

const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__toggle");
const navigation = document.querySelector(".navigation");
header.classList.add("header--enhanced");

function closeMenu() {
  navigation.classList.remove("navigation--open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("navigation--open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest(".navigation__link");
  if (!link) return;
  navigation.querySelectorAll(".navigation__link").forEach((item) => {
    item.classList.toggle("navigation__link--active", item === link);
  });
  closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

document.querySelector("#register-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // This assignment covers the frontend. Never transmit or store credentials.
  document.querySelector("#register-message").textContent = "This is a template preview. Registration is not connected to a server.";
  document.querySelector("#password").value = "";
});
