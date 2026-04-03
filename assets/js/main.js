document.addEventListener("DOMContentLoaded", () => {

  /* ===== Hover Section (Why BCS) ===== */
  const cards = document.querySelectorAll("section.choose .choose-card");
  const activeCard = document.querySelector("section.choose .choose-card.active");
  if (cards.length) {
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => activeCard?.classList.remove("active"));
      card.addEventListener("mouseleave", () => activeCard?.classList.add("active"));
    });
  }

  /* ===== Active Link Header ===== */
  const navLinks = document.querySelectorAll("#main-header .nav-link");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentFile || (href === "index.html" && (currentFile === "" || currentFile === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /* ===== Language Dropdown Logic ===== */
  const langItems = document.querySelectorAll('.dropdown-item');
  langItems.forEach(item => {
    const text = item.textContent.trim();
    if (currentFile.includes('-en')) {
      if (text === 'العربية') {
        const arabicPage = currentFile.replace('-en', '');
        item.setAttribute('href', arabicPage);
      }
    } else {
      if (text === 'English') {
        const englishPage = currentFile.replace('.html', '-en.html');
        item.setAttribute('href', englishPage);
      }
    }
    if (item.getAttribute('href') === currentFile) {
      item.classList.add('active');
    }
  });

  /* ===== Carousel Dot Control ===== */
  initCarouselDots();

});

// ===================== Carousel Dot Control =====================
function initCarouselDots() {
  const allDots = document.querySelectorAll('.dot');

  allDots.forEach(dot => {
    const targetId = dot.dataset.bsTarget;
    const slideIndex = parseInt(dot.dataset.bsSlideTo);
    const targetCarousel = document.querySelector(targetId);

    if (!targetCarousel) return;

    // تأكد إن الكاروسيل initialized أولاً
    let carouselInstance = bootstrap.Carousel.getInstance(targetCarousel);
    if (!carouselInstance) {
      carouselInstance = new bootstrap.Carousel(targetCarousel, {
        interval: false,
        ride: false
      });
    }

    // Dot click
    dot.addEventListener('click', () => {
      carouselInstance.to(slideIndex);
    });

    // Update active dot on slide
    if (!targetCarousel.dataset.listenerAttached) {
      targetCarousel.addEventListener('slid.bs.carousel', function (e) {
        const relatedDots = document.querySelectorAll(`.dot[data-bs-target="${targetId}"]`);
        relatedDots.forEach(d => d.classList.remove('active'));
        relatedDots[e.to].classList.add('active');
      });
      targetCarousel.dataset.listenerAttached = 'true';
    }
  });
}