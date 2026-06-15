const bubbles = document.querySelectorAll(".bubble");
const popups = document.querySelectorAll(".popup-text");

bubbles.forEach(bubble => {
  bubble.addEventListener("click", function (e) {
    e.stopPropagation();

    const popup = this.parentElement.querySelector(".popup-text");
    const isAlreadyOpen = popup.classList.contains("show");

    popups.forEach(p => p.classList.remove("show"));

    if (!isAlreadyOpen) {
      popup.classList.add("show");
    }
  });
});

document.addEventListener("click", () => {
  popups.forEach(p => p.classList.remove("show"));
});

popups.forEach(popup => {
  popup.addEventListener("click", e => {
    e.stopPropagation();
  });
});