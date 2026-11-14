(() => {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const blogRoute = path === "/blog" || path.startsWith("/blog/");
  const navLink = (href, label, isBlog = false) => {
    const active = isBlog ? blogRoute : path === href || (href === "/index.html" && path === "/");
    return '<a href="' + href + '"' + (active ? ' class="active" aria-current="page"' : "") + ">" + label + "</a>";
  };

  if (header) {
    header.innerHTML = '<header class="site-header"><div class="header-inner"><a class="brand" href="/index.html" aria-label="Dip Soft Studios home"><img src="/assets/brand-mark.svg" alt="" width="42" height="42"><span>Dip Soft <b>Studios</b></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="sr-only">Open navigation</span><i></i><i></i></button><nav class="primary-nav" id="primary-nav" aria-label="Main navigation">' + navLink("/about.html", "Studio") + navLink("/story.html", "Our story") + navLink("/apps.html", "Apps") + navLink("/blog/", "Blog", true) + navLink("/support.html", "Support") + navLink("/contact.html", "Contact") + '<a class="nav-cta" href="/apps.html">Explore apps <span>↗</span></a></nav></div></header>';
  }

  if (footer) {
    footer.innerHTML = '<footer class="site-footer"><div class="wrap footer-main"><div class="footer-brand"><a class="brand" href="/index.html"><img src="/assets/brand-mark.svg" alt="" width="38" height="38"><span>Dip Soft <b>Studios</b></span></a><p>Independent software by Sudip Bhattacharjya, India.</p></div><div class="footer-links"><div><b>Explore</b><a href="/about.html">Studio</a><a href="/story.html">Our story</a><a href="/apps.html">Apps</a><a href="/blog/">Blog</a><a href="/support.html">Support</a><a href="/contact.html">Contact</a></div><div><b>Policies</b><a href="/patahive-privacy.html">PataHive privacy</a><a href="/privacy.html">Website privacy</a><a href="/terms.html">Terms</a><a href="/refunds.html">Refunds</a><a href="/delivery.html">Digital delivery</a></div></div></div><div class="wrap footer-bottom"><span>© ' + new Date().getFullYear() + ' Dip Soft Studios</span><span>Made with intention <i>✳</i></span></div></footer>';
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

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    const status = document.querySelector("#contact-form-status");
    const topic = contactForm.querySelector("[name=topic]");
    const params = new URLSearchParams(location.search);
    const requestedTopic = params.get("topic");
    if (topic && requestedTopic && [...topic.options].some((option) => option.value === requestedTopic)) topic.value = requestedTopic;
    if (status && params.get("sent") === "1") {
      status.textContent = "Thanks — your message has been sent to the studio.";
      status.classList.add("success");
      params.delete("sent");
      const query = params.toString();
      history.replaceState(null, "", location.pathname + (query ? "?" + query : "") + location.hash);
    }
  }
})();
