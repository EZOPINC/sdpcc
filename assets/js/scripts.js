// Custom JS for SDPCC site
// Mobile menu toggle
  document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  });