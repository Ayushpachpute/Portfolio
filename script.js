let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Close menu when clicking on a link
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menu.classList.remove("bx-x");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("open");
    menu.classList.remove("bx-x");
  }
});

const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});
sr.revel('.logo',{delay:200, origin: 'left'});