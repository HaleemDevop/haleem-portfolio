// Simple scroll reveal
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "none";
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});
