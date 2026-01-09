// Optional: hover zoom effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform += " scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    const index = card.getAttribute("style").match(/--index:(\d+)/)[1];
    card.style.transform = `rotateY(calc((360deg / var(--quantity)) * ${index})) translateZ(var(--translateZ))`;
  });
});
