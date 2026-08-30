/* ==========================================================================
   WORKSHOP DE LOUVOR & ADORAÇÃO — script.js
   JavaScript moderno (ES6+), sem dependências externas.
   ========================================================================== */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     1. HEADER — muda de aparência ao rolar a página
     ---------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* ------------------------------------------------------------------------
     2. VÍDEO DE FUNDO DO HERO
     Respeita prefers-reduced-motion (não autoplay) e pausa quando a seção
     sai da viewport, para economizar performance/bateria.
     ---------------------------------------------------------------------- */
  const heroVideo = document.getElementById("heroVideo");

  if (heroVideo) {
    if (prefersReducedMotion) {
      heroVideo.pause();
      heroVideo.removeAttribute("autoplay");
    } else if ("IntersectionObserver" in window) {
      const heroVideoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              heroVideo.play().catch(() => {});
            } else {
              heroVideo.pause();
            }
          });
        },
        { threshold: 0.1 }
      );
      heroVideoObserver.observe(heroVideo);
    }
  }

  /* ------------------------------------------------------------------------
     3. BARRA DE PROGRESSO DE LEITURA (elemento de assinatura)
     ---------------------------------------------------------------------- */
  const progressFill = document.getElementById("progressFill");

  const updateProgressBar = () => {
    if (!progressFill) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = `${percent}%`;
  };

  updateProgressBar();
  window.addEventListener("scroll", updateProgressBar, { passive: true });
  window.addEventListener("resize", updateProgressBar);

  /* ------------------------------------------------------------------------
     4. MENU MOBILE
     ---------------------------------------------------------------------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.dataset.state = "closed";
    document.body.style.overflow = "";
  };

  const openMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.dataset.state = "open";
    document.body.style.overflow = "hidden";
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.dataset.state === "open") {
        closeMobileMenu();
        menuToggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. FAQ — ACORDEÃO ACESSÍVEL VIA TECLADO
     ---------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.dataset.open === "true";

      // Fecha os demais itens para manter apenas uma resposta visível por vez
      faqItems.forEach((otherItem) => {
        otherItem.dataset.open = "false";
        const otherButton = otherItem.querySelector(".faq__question");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.dataset.open = "true";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. ANIMAÇÕES DE ENTRADA (IntersectionObserver)
     ---------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------------
     7. FECHA O MENU MOBILE AO REDIMENSIONAR PARA DESKTOP
     ---------------------------------------------------------------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMobileMenu();
  });
})();
