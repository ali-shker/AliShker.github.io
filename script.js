const body = document.body;
const cursorGlow = document.querySelector(".cursor-glow");
const scrollBar = document.querySelector(".scroll-line span");

window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
  cursorGlow.style.opacity = "1";
});

window.addEventListener("pointerleave", () => {
  cursorGlow.style.opacity = "0";
});

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleMenu(force) {
  const open = typeof force === "boolean" ? force : !mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", open);
  body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuButton.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => toggleMenu());
document.querySelectorAll(".mobile-menu a").forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const bounds = button.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});

// Keep the hero visual gently alive without making the motion compete with the content.
const portrait = document.querySelector(".portrait-frame");
if (portrait && window.matchMedia("(pointer:fine)").matches) {
  portrait.addEventListener("pointermove", (event) => {
    const bounds = portrait.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portrait.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
  });
  portrait.addEventListener("pointerleave", () => {
    portrait.style.transform = "";
  });
}