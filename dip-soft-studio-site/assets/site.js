(() => {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const file = location.pathname.split("/").filter(Boolean).pop() || "index.html";
  const navLink = (href, label) => '<a href="' + href + '"' + (file === href ? ' class="active" aria-current="page"' : "") + ">" + label + "</a>";
  if (header) {
    header.innerHTML = '<header class="site-header"><div class="header-inner"><a class="brand" href="index.html" aria-label="Dip Soft Studios home"><img src="assets/brand-mark.svg" alt="" width="42" height="42"><span>Dip Soft <b>Studios</b></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="sr-only">Open navigation</span><i></i><i></i></button><nav class="primary-nav" id="primary-nav" aria-label="Main navigation">' + navLink("about.html", "Studio") + navLink("apps.html", "Apps") + navLink("support.html", "Support") + navLink("contact.html", "Contact") + '<a class="nav-cta" href="' + (file === "support.html" ? "https://ko-fi.com/dipsoftstudios" : "apps.html") + '"' + (file === "support.html" ? ' target="_blank" rel="noopener noreferrer"' : "") + '>' + (file === "support.html" ? "Support on Ko-fi" : "Explore apps") + ' <span>↗</span></a></nav></div></header>';
  }
  if (footer) {
    footer.innerHTML = '<footer class="site-footer"><div class="wrap footer-main"><div class="footer-brand"><a class="brand" href="index.html"><img src="assets/brand-mark.svg" alt="" width="38" height="38"><span>Dip Soft <b>Studios</b></span></a><p>Independent software by Sudip Bhattacharjya, India.</p></div><div class="footer-links"><div><b>Explore</b><a href="about.html">Studio</a><a href="apps.html">Apps</a><a href="support.html">Support</a><a href="contact.html">Contact</a></div><div><b>Policies</b><a href="patahive-privacy.html">PataHive privacy</a><a href="privacy.html">Website privacy</a><a href="terms.html">Terms</a><a href="refunds.html">Refunds</a><a href="delivery.html">Digital delivery</a></div></div></div><div class="wrap footer-bottom"><span>© ' + new Date().getFullYear() + ' Dip Soft Studios</span><span>Made with intention <i>✳</i></span></div></footer>';
  }
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
    });
  }
})();
