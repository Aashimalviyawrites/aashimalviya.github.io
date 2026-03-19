document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    const btn = document.querySelector(".theme-btn");
    if (btn) btn.textContent = "☀";
  }

  const sections = document.querySelectorAll("main section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  sections.forEach((sec) => {
    observer.observe(sec);
  });
});

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

function togglePub(btn) {
  let content = btn.nextElementSibling;
  if (content) {
    content.classList.toggle("open");
  }
}

function toggleQuote(book) {
  let quote = book.querySelector(".book-quote");
  if (quote) {
    quote.classList.toggle("open");
  }
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  const bar = document.querySelector(".scroll-progress");
  if (bar) {
    bar.style.width = scrolled + "%";
  }
});

function toggleMenu() {
  const drawer = document.getElementById("navDrawer");
  const overlay = document.getElementById("menuOverlay");

  if (drawer && overlay) {
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
  }
}

document.querySelectorAll(".nav-drawer a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navDrawer")?.classList.remove("open");
    document.getElementById("menuOverlay")?.classList.remove("open");
  });
});
