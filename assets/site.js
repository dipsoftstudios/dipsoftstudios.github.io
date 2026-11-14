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
    const isSupport = path === "/support.html";
    const ctaHref = isSupport ? "https://ko-fi.com/dipsoftstudios" : "/apps.html";
    const ctaLabel = isSupport ? "International support" : "Explore apps";
    const ctaTarget = isSupport ? ' target="_blank" rel="noopener noreferrer"' : "";
    header.innerHTML = '<header class="site-header"><div class="header-inner"><a class="brand" href="/index.html" aria-label="Dip Soft Studios home"><img src="/assets/brand-mark.svg" alt="" width="42" height="42"><span>Dip Soft <b>Studios</b></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="sr-only">Open navigation</span><i></i><i></i></button><nav class="primary-nav" id="primary-nav" aria-label="Main navigation">' + navLink("/about.html", "Studio") + navLink("/story.html", "Our story") + navLink("/apps.html", "Apps") + navLink("/blog/", "Blog", true) + navLink("/support.html", "Support") + navLink("/contact.html", "Contact") + '<a class="nav-cta" href="' + ctaHref + '"' + ctaTarget + '>' + ctaLabel + ' <span>↗</span></a></nav></div></header>';
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
    const requestedTopic = new URLSearchParams(location.search).get("topic");
    if (topic && requestedTopic && [...topic.options].some((option) => option.value === requestedTopic)) topic.value = requestedTopic;
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const submitButton = contactForm.querySelector("[type=submit]");
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";
      try {
        const response = await fetch("https://formsubmit.co/ajax/dipsoftstudios@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
        });
        let result;
        try {
          result = await response.json();
        } catch (_parseError) {
          throw new Error("The form service returned an unreadable response. Please try again later.");
        }
        if (!response.ok || String(result.success) !== "true") {
          throw new Error(typeof result.message === "string" && result.message.trim() ? result.message : "The form service did not accept the message.");
        }
        contactForm.reset();
        status.textContent = "Thanks — your message has been sent to the studio.";
        status.classList.add("success");
      } catch (error) {
        status.textContent = error instanceof Error && error.message ? "We couldn’t send that just now. " + error.message : "We couldn’t send that just now. Check your connection and try again.";
        status.classList.add("error");
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || "Send message";
      }
    });
  }
})();
