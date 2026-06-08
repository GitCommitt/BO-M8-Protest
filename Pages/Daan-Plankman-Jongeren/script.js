const photos = [
  "images/Jongeren_dam.png",
  "images/Jongeren_dam2.png",
  "images/Jongeren_dam3.jpg",
  "images/Jongeren_dam4.jpg",
  "images/Jongeren_dam5.webp"
];

const descriptions = [
  "Vrouw heft haar vuist tijdens Black Lives Matter-protest.",
  "Demonstratie op de Dam met jongeren die protesteren tegen racisme en politiegeweld.",
  "Borden met 'Stop politiegeweld' en 'Act now' op de dam tijdens het Black Lives Matter protest.",
  "Mensen met mondmaskers en opgestoken vuisten op de Dam.",
  "Een groep vrouwen met prostestborden klaar om te prosteren met Black Lives Matter op de Dam."
];

let current = 0;
const slide = document.getElementById("slide");
const desc = document.getElementById("description");
const counter = document.getElementById("counter");
const dotsContainer = document.getElementById("dots");


for (let i = 0; i < photos.length; i++) {
  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => {
    current = i;
    showSlide(current);
  });
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slide.classList.remove("slideTransition");
  void slide.offsetWidth; 
  slide.src = photos[index];
  desc.textContent = descriptions[index];
  counter.textContent = (index + 1) + " / " + photos.length;
  
  
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  
  slide.classList.add("slideTransition");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % photos.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + photos.length) % photos.length;
  showSlide(current);
});


document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % photos.length;
    showSlide(current);
  } else if (e.key === "ArrowLeft") {
    current = (current - 1 + photos.length) % photos.length;
    showSlide(current);
  }
});

showSlide(current);
