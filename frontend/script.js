document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     NAVBAR TOGGLE
  ========================== */

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const icon = navToggle.querySelector("i");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-line");
  });

  /* =========================
     SEARCH FILTER
  ========================== */

  const loc = document.getElementById("location");
  const cin = document.getElementById("checkin");
  const cout = document.getElementById("checkout");
  const gst = document.getElementById("guests");
  const searchBtn = document.getElementById("searchBtn");
  const cards = document.querySelectorAll(".popular__card");

  cin.min = new Date().toISOString().split("T")[0];

  cin.addEventListener("change", () => {
    cout.value = "";
    cout.min = cin.value;
  });

  searchBtn.addEventListener("click", () => {
    if (!loc.value || !cin.value || !cout.value || !gst.value) {
      alert("Please fill all fields.");
      return;
    }

    if (cout.value <= cin.value) {
      alert("Checkout must be after checkin.");
      return;
    }

    let found = false;

    cards.forEach((card) => {
      const match =
        card.dataset.location.toLowerCase().includes(loc.value.toLowerCase()) &&
        +card.dataset.capacity >= +gst.value;

      if (match) {
        card.style.display = "";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      alert("No hotels available for selected criteria.");
    }

    document
      .querySelector(".popular__container")
      .scrollIntoView({ behavior: "smooth" });
  });
});
