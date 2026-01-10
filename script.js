document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -(y - rect.height / 2) / 18;
    const ry = (x - rect.width / 2) / 18;
    card.querySelector(".floating-card").style.transform =
      `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector(".floating-card").style.transform = "";
  });
});
