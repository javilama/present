import darkMode from "./dark-mode.js";
import hamburgerMenu from "./hamburger_menu.js";
import scrollTopBtn from "./scroll-to-top.js";


const doc = document;

doc.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn",".panel",".menu a");
  scrollTopBtn(".scroll-top-btn");
})

darkMode(".dark-theme-btn", "dark-mode",".fa-moon")