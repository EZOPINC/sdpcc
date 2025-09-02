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

// Smooth Lightbox Initialization for gallery Images
// Lightbox for gallery
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src.replace("_thumb", ""); // assumes thumbnails named *_thumb
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

// Events page - Filter events by category
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".event-item");
    const details = document.querySelectorAll(".event-detail");

    items.forEach(item => {
      item.addEventListener("click", () => {
        // hide all details
        details.forEach(d => d.classList.remove("active"));

        // remove highlight from all list items
        items.forEach(i => i.classList.remove("active"));

        // show clicked one
        const eventId = item.getAttribute("data-event-id");
        document.getElementById(eventId).classList.add("active");
        item.classList.add("active");
      });
    });

    // Auto-select first event on page load
    if (items.length > 0) {
      items[0].click();
    }
  });
  
