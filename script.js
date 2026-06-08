const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    const popup = bubble.parentElement.querySelector(".popup-text");
    popup.classList.toggle("show");
  });
});