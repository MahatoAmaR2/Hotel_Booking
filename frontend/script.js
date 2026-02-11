const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const icon = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});
