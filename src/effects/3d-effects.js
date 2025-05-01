/**
 * 3D Card Effect Handler
 * Adds realistic 3D tilt effect to elements with 'card-3d' class
 */

export function initialize3DCardEffects() {
  const cards = document.querySelectorAll(".card-3d");

  cards.forEach((card) => {
    card.addEventListener("mousemove", handleCardMove);
    card.addEventListener("mouseleave", resetCard);
  });

  function handleCardMove(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardContent = card.querySelector(".card-content");

    // Calculate mouse position relative to card center
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation (max 10 degrees)
    const rotateX = (mouseY / (cardRect.height / 2)) * -10;
    const rotateY = (mouseX / (cardRect.width / 2)) * 10;

    // Apply transformation
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

    // Create spotlight effect
    if (cardContent) {
      const percentX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
      const percentY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
      cardContent.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)`;
    }
  }

  function resetCard(e) {
    const card = e.currentTarget;
    const cardContent = card.querySelector(".card-content");

    // Reset transformations with a smooth transition
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";

    if (cardContent) {
      cardContent.style.background = "none";
    }
  }
}

/**
 * Initialize parallax scrolling effect
 * Adds depth through scroll-based movement
 */
export function initializeParallaxEffect() {
  const parallaxContainers = document.querySelectorAll(".parallax-container");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;

    parallaxContainers.forEach((container) => {
      const layers = container.querySelectorAll(".parallax-layer");

      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed") || 0.5;
        const yPos = -(scrollPosition * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    });
  });
}

/**
 * Initialize all 3D and parallax effects
 */
export function initializeAllEffects() {
  // Wait for DOM to be fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initialize3DCardEffects();
      initializeParallaxEffect();
    });
  } else {
    initialize3DCardEffects();
    initializeParallaxEffect();
  }
}
