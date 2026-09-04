/* ==========================================================================
   Workshop de Louvor & Adoração — script.js
   JS puro (sem libs). Cada bloco abaixo cuida de uma parte da página.
   ========================================================================== */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     Header: adiciona um fundo/blur quando o usuário rola a página
     ---------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* ------------------------------------------------------------------------
     Vídeo de fundo do Hero
     O MP4 é carregado apenas quando o Hero está próximo da viewport, tanto
     no desktop quanto no mobile. O poster aparece imediatamente enquanto
     o navegador prepara o vídeo.
     ---------------------------------------------------------------------- */
  const heroVideo = document.getElementById("heroVideo");
  const heroSection = document.getElementById("hero");

  if (heroVideo) {
    let heroVideoLoaded = false;

    const loadHeroVideo = () => {
      if (heroVideoLoaded || prefersReducedMotion) return;
      const src = heroVideo.dataset.src;
      if (!src) return;

      heroVideo.src = src;
      heroVideo.preload = "metadata";
      heroVideo.load();
      heroVideoLoaded = true;
    };

    const playHeroVideo = () => {
      if (!heroVideoLoaded || prefersReducedMotion) return;
      heroVideo.play().catch(() => {});
    };

    if (!prefersReducedMotion) {
      if ("IntersectionObserver" in window && heroSection) {
        const heroVideoObserver = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (!entry) return;

            if (entry.isIntersecting) {
              loadHeroVideo();
              playHeroVideo();
            } else if (heroVideoLoaded) {
              heroVideo.pause();
            }
          },
          { threshold: 0.1, rootMargin: "200px 0px" }
        );

        heroVideoObserver.observe(heroSection);
      } else {
        loadHeroVideo();
        playHeroVideo();
      }
    }
  }

  /* ------------------------------------------------------------------------
     Contagem regressiva até o evento (26/09/2026, 15h, horário de Brasília)
     Atualiza a cada segundo. Se o evento já começou, mostra zerado.
     ---------------------------------------------------------------------- */
  const EVENT_DATE = new Date("2026-09-26T15:00:00-03:00");
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    const cdDays = document.getElementById("cdDays");
    const cdHours = document.getElementById("cdHours");
    const cdMinutes = document.getElementById("cdMinutes");
    const cdSeconds = document.getElementById("cdSeconds");

    const pad = (n) => String(n).padStart(2, "0");

    const updateCountdown = () => {
      const diff = EVENT_DATE.getTime() - Date.now();

      if (diff <= 0) {
        cdDays.textContent = "00";
        cdHours.textContent = "00";
        cdMinutes.textContent = "00";
        cdSeconds.textContent = "00";
        clearInterval(countdownTimer);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      cdDays.textContent = pad(Math.floor(totalSeconds / 86400));
      cdHours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
      cdMinutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
      cdSeconds.textContent = pad(totalSeconds % 60);
    };

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
  }

  /* ------------------------------------------------------------------------
     Menu mobile (abre/fecha, e fecha sozinho com Esc ou ao clicar num link)
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
     FAQ (acordeão): clicou, abre; clica em outra pergunta, a anterior fecha
     ---------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.dataset.open === "true";

      // deixa só uma pergunta aberta por vez — fecha todas as outras antes
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
     Animação de "surgir" quando o elemento entra na tela
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
     Se a tela for redimensionada para o tamanho de desktop, fecha o menu
     mobile (evita ele ficar "preso" aberto ao virar a tela, por exemplo)
     ---------------------------------------------------------------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMobileMenu();
  });
})();
