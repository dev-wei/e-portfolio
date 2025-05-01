/**
 * Parallax Scrolling Effects
 * Adds depth through scroll-based movement of elements
 */

/**
 * Initialize parallax scrolling effect for elements
 * @param {string} containerSelector - Query selector for container elements
 * @param {number} baseDepth - Base depth factor for parallax effect
 */
export function initializeParallaxEffects(
  containerSelector = ".parallax-container",
  baseDepth = 0.15
) {
  const containers = document.querySelectorAll(containerSelector);
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateParallax() {
    containers.forEach((container) => {
      const containerRect = container.getBoundingClientRect();
      const isVisible =
        containerRect.bottom > 0 && containerRect.top < window.innerHeight;

      if (isVisible) {
        const layers = container.querySelectorAll("[data-parallax]");

        layers.forEach((layer) => {
          const depth = parseFloat(
            layer.getAttribute("data-parallax") || baseDepth
          );
          const movement = lastScrollY * depth;

          // Apply transform with a slight delay for a more natural effect
          layer.style.transform = `translate3d(0, ${movement}px, 0)`;
        });
      }
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
  }

  // Add data-parallax attributes to appropriate elements
  function setupParallaxElements() {
    containers.forEach((container) => {
      // Add data attributes to headings for upward movement
      container.querySelectorAll("h1, h2").forEach((heading) => {
        if (!heading.hasAttribute("data-parallax")) {
          heading.setAttribute("data-parallax", "-0.1");
        }
      });

      // Add data attributes to images for downward movement
      container.querySelectorAll("img").forEach((img) => {
        if (!img.hasAttribute("data-parallax")) {
          img.setAttribute("data-parallax", "0.05");
        }
      });

      // Background elements move slower
      const backgroundElements = container.querySelectorAll(
        ".background-element"
      );
      backgroundElements.forEach((element) => {
        if (!element.hasAttribute("data-parallax")) {
          element.setAttribute("data-parallax", "0.02");
        }
      });
    });
  }

  // Setup and start parallax effect
  function init() {
    setupParallaxElements();
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initialize positions
  }

  // Clean up function for component unmounting
  function cleanup() {
    window.removeEventListener("scroll", onScroll);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Return cleanup function for React useEffect
  return cleanup;
}

/**
 * Creates a multi-layer parallax background effect
 * @param {string} containerSelector - The container to apply the effect to
 */
export function createParallaxBackground(
  containerSelector = ".parallax-bg-container"
) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    // Create multiple layers with varying opacity and speed
    for (let i = 1; i <= 3; i++) {
      const layer = document.createElement("div");
      layer.className = `parallax-bg-layer layer-${i}`;
      layer.setAttribute("data-parallax", 0.02 * i);
      container.appendChild(layer);
    }
  });
}

/**
 * Initialize all parallax effects
 */
export function initializeAllParallaxEffects() {
  // Initialize standard parallax
  const cleanup = initializeParallaxEffects();

  // Add parallax backgrounds to containers
  createParallaxBackground();

  return cleanup;
}
