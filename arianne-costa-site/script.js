"use strict";
const config = window.SITE_CONFIG;
const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;
document.querySelectorAll("[data-whatsapp]").forEach(link => { link.href = whatsappUrl; });
document.querySelectorAll("[data-instagram]").forEach(link => { link.href = config.instagram; });
const drawer = document.getElementById("navigation");
const trigger = document.getElementById("open-menu");
trigger.addEventListener("click", () => {
  drawer.showModal();
  trigger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
});
function closeMenu() { drawer.close(); }
document.getElementById("close-menu").addEventListener("click", closeMenu);
drawer.querySelectorAll("nav a").forEach(link => link.addEventListener("click", closeMenu));
drawer.addEventListener("click", event => {
  const bounds = drawer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
});
drawer.addEventListener("close", () => {
  trigger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  trigger.focus({preventScroll: true});
});
