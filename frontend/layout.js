(function () {
  "use strict";

  const THEME_STORAGE_KEY = "tokende-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* stockage indisponible (navigation privée) : le thème reste en mémoire */
    }
  }

  function initMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const openButton = document.querySelector("[data-mobile-menu-open]");
    const closeButton = document.querySelector("[data-mobile-menu-close]");
    if (!menu || !openButton) return;

    const open = () => {
      menu.hidden = false;
      openButton.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      menu.hidden = true;
      openButton.setAttribute("aria-expanded", "false");
    };

    openButton.addEventListener("click", open);
    closeButton?.addEventListener("click", close);
    menu.addEventListener("click", (event) => {
      if (event.target === menu) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) close();
    });

    const desktopQuery = window.matchMedia("(min-width: 960px)");
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) close();
    });
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      saved = null;
    }
    applyTheme(saved === "dark" ? "dark" : "light");
  }

  function initThemeToggle() {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  function markActiveNavLinks() {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const hrefPage = href.split("/").pop();
      if (hrefPage === currentPage) link.setAttribute("aria-current", "page");
    });
  }

  function initNavSessionMobile() {
    // #nav-session est rempli par initNavSession() dans main.js, qui
    // s'exécute dans un autre listener DOMContentLoaded enregistré après
    // celui-ci : on observe donc les mutations au lieu de lire une valeur
    // qui n'existerait pas encore au moment où ce listener se déclenche.
    const source = document.getElementById("nav-session");
    const target = document.getElementById("nav-session-mobile");
    if (!source || !target) return;

    const sync = () => {
      target.innerHTML = source.innerHTML;
      const btnDeconnexion = target.querySelector("#btn-deconnexion");
      if (btnDeconnexion) {
        btnDeconnexion.removeAttribute("id");
        btnDeconnexion.addEventListener("click", () => {
          clearSession();
          window.location.reload();
        });
      }
    };

    sync();
    new MutationObserver(sync).observe(source, { childList: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initThemeToggle();
    initMobileMenu();
    markActiveNavLinks();
    initNavSessionMobile();
  });
})();
