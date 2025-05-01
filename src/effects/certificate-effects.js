/**
 * Certificate Animation Effects
 * Adds reveal and interactive effects to certificates
 */

export function initializeCertificateEffects() {
  // Find all certificate elements
  const certificates = document.querySelectorAll(".certificate-reveal");

  console.log(
    `Certificate effects initializing. Found ${certificates.length} certificates.`
  );

  if (certificates.length === 0) return;

  // Set up IntersectionObserver for reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Optionally remove the class when not in view for re-animation
          // entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe all certificate elements
  certificates.forEach((certificate) => {
    observer.observe(certificate);
  });

  // Add 3D effect on hover
  certificates.forEach((certificate) => {
    certificate.addEventListener("mousemove", handleCertificateMove);
    certificate.addEventListener("mouseleave", resetCertificate);
  });

  function handleCertificateMove(e) {
    const certificate = e.currentTarget;
    const rect = certificate.getBoundingClientRect();

    // Calculate mouse position relative to center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation (max 5 degrees)
    const rotateX = (mouseY / (rect.height / 2)) * -5;
    const rotateY = (mouseX / (rect.width / 2)) * 5;

    // Apply transformation
    certificate.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1)`;

    // Add light reflection effect
    const img = certificate.querySelector("img");
    if (img) {
      const percentX = ((e.clientX - rect.left) / rect.width) * 100;
      const percentY = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.boxShadow = `0 15px 35px rgba(52, 152, 219, 0.2), ${
        percentX / 10 - 5
      }px ${percentY / 10 - 5}px 10px rgba(255,255,255,0.3)`;
    }
  }

  function resetCertificate(e) {
    const certificate = e.currentTarget;
    // Reset transformations with a smooth transition
    certificate.style.transform = "";

    const img = certificate.querySelector("img");
    if (img) {
      img.style.boxShadow = "";
    }
  }
}

/**
 * Initialize all certificate effects
 */
export function initializeAllCertificateEffects() {
  // Wait for DOM to be fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCertificateEffects);
  } else {
    initializeCertificateEffects();
  }
}
