document.querySelectorAll(".floating-card").forEach((card, i) => {
  card.style.animationDelay = `${i * 0.1}s`;

  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = -(y - r.height / 2) / 25;
    const ry = (x - r.width / 2) / 25;
    card.style.transform = `translateY(-10px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
