(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  let current = 0;
  let locked = false;

  const progressFill = document.getElementById("progressFill");
  const slideCounter = document.getElementById("slideCounter");
  const navHint = document.getElementById("navHint");
  const clickLayer = document.getElementById("clickLayer");

  const currentEl = slideCounter.querySelector(".current");
  const totalEl = slideCounter.querySelector(".total");
  totalEl.textContent = String(total).padStart(2, "0");

  function updateUI() {
    progressFill.style.width = `${((current + 1) / total) * 100}%`;
    currentEl.textContent = String(current + 1).padStart(2, "0");

    // Hide hint after first advance
    if (current > 0) {
      navHint.classList.add("hidden");
    }
  }

  function goTo(index) {
    if (locked) return;
    if (index < 0 || index >= total || index === current) return;

    locked = true;
    const prev = current;
    current = index;

    slides[prev].classList.remove("active");
    slides[current].classList.add("active");

    updateUI();

    // Shift ambient orbs slightly for parallax feel
    document.body.style.setProperty("--slide-progress", current / (total - 1));

    setTimeout(() => {
      locked = false;
    }, 650);
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  // Click anywhere (except interactive elements) advances
  clickLayer.addEventListener("click", (e) => {
    // Allow left half to go back if desired — keep simple: always next
    // Or: right side next, left side prev
    const x = e.clientX / window.innerWidth;
    if (x < 0.25 && current > 0) {
      prev();
    } else {
      next();
    }
  });

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(total - 1);
    }
  });

  // Touch swipe
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      const dy = e.changedTouches[0].screenY - touchStartY;
      if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
      if (dx < 0) next();
      else prev();
    },
    { passive: true }
  );

  // Init
  updateUI();
})();
