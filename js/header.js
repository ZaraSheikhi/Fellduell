(() => {
  const header = document.querySelector(".site-header");
  const content = header?.querySelector(".header-content");
  const nav = header?.querySelector("nav");
  if (!header || !content || !nav) return;

  if (content.querySelector(".menu-toggle")) return;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.setAttribute("aria-label", "Menü öffnen");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";

  content.insertBefore(toggle, nav);

  const setState = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  };

  toggle.addEventListener("click", () => setState(!document.body.classList.contains("nav-open")));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setState(false));
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") setState(false);
  });
})();
