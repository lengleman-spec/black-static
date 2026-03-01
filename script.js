const sectionHeader = document.querySelector(".section-header");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".line-wrapper");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

observer.observe(sectionHeader);
