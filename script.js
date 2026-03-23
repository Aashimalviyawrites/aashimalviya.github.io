// Enable JS class for animations
document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     THEME (persisted)
  ========================= */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    const btn = document.querySelector(".theme-btn");
    if (btn) btn.textContent = "☀";
  }

  /* =========================
     SECTION REVEAL
  ========================= */

  const sections = document.querySelectorAll("main section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  sections.forEach((sec) => observer.observe(sec));

  /* =========================
     NAV DRAWER LINK CLOSE
  ========================= */

  document.querySelectorAll(".nav-drawer a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("navDrawer")?.classList.remove("open");
      document.getElementById("menuOverlay")?.classList.remove("open");
    });
  });

});


/* =========================
   DARK MODE TOGGLE
========================= */

function toggleDark() {
  const btn = document.querySelector(".theme-btn");

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    if (btn) btn.textContent = "☀";
  } else {
    localStorage.setItem("theme", "light");
    if (btn) btn.textContent = "☾";
  }
}


/* =========================
   PUBLICATION TOGGLE
========================= */

function togglePub(btn) {
  const content = btn.nextElementSibling;

  if (content) {
    content.classList.toggle("open");
  }
}


/* =========================
   BOOK QUOTE TOGGLE
========================= */

function toggleQuote(book) {
  const quote = book.querySelector(".book-quote");

  if (quote) {
    quote.classList.toggle("open");
  }
}


/* =========================
   SCROLL EFFECTS
========================= */

window.addEventListener("scroll", () => {

  // Navbar shrink effect
  const nav = document.querySelector("nav");

  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  // Scroll progress bar
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;

  const bar = document.querySelector(".scroll-progress");
  if (bar) {
    bar.style.width = scrolled + "%";
  }

});


/* =========================
   NAV MENU TOGGLE
========================= */

function toggleMenu() {
  const drawer = document.getElementById("navDrawer");
  const overlay = document.getElementById("menuOverlay");

  if (drawer && overlay) {
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
  }
}


/* =========================
   IMAGE VIEWER (PUBLICATIONS)
========================= */

function openImage(el) {
  const viewer = document.getElementById("imageViewer");

  // prevent multiple triggers
  if (viewer.classList.contains("show")) return;

  const img = el.querySelector("img").src;
  const caption = el.querySelector(".pub-caption").innerText;

  document.getElementById("viewerImg").src = img;
  document.getElementById("viewerCaption").innerText = caption;

  viewer.classList.add("show");
}

function closeImage() {
  document.getElementById("imageViewer").classList.remove("show");
}
