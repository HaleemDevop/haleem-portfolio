const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform += " scale(1.08)";
  });

  card.addEventListener("mouseleave", () => {
    const index = card.style.getPropertyValue("--index");
    card.style.transform =
      `rotateY(calc((360deg / var(--quantity)) * ${index})) translateZ(var(--translateZ))`;
  });
});
