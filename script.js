const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {
  // Arrange cards in semi-circle
  let angle = (index - (cards.length - 1) / 2) * 20; // spacing
  card.style.transform = `rotateY(${angle}deg) translateZ(120px)`;

  // Hover effect
  card.addEventListener("mouseenter", () => {
    card.style.transform = `rotateY(${angle}deg) translateZ(150px) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(${angle}deg) translateZ(120px)`;
  });
});
