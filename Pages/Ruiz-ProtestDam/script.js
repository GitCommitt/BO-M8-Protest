const bubbles = document.querySelectorAll(".bubble");
const popups = document.querySelectorAll(".popup-text");

// Bubbel aanklikken
bubbles.forEach(bubble => {
  bubble.addEventListener("click", function (e) {

    e.stopPropagation();

    const popup = this.parentElement.querySelector(".popup-text");

    // Sluit eerst alle andere popups
    popups.forEach(p => p.classList.remove("show"));

    // Open deze popup
    popup.classList.add("show");
  });
});

// Klik buiten popup => sluit alles
document.addEventListener("click", () => {
  popups.forEach(p => p.classList.remove("show"));
});

// Klik IN popup => popup blijft open
popups.forEach(popup => {
  popup.addEventListener("click", e => {
    e.stopPropagation();
  });
});