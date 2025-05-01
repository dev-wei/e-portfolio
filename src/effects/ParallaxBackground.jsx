import React, { useEffect } from 'react';

/**
 * ParallaxBackground Component
 * Creates a multi-layered background with parallax scrolling effect
 */
const ParallaxBackground = ({ containerClass = 'parallax-bg-container', layers = 3 }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Select all parallax layers
      const parallaxLayers = document.querySelectorAll('.parallax-bg-layer');
      
      // Apply parallax effect to each layer with different speeds
      parallaxLayers.forEach((layer, index) => {
        const speed = 0.03 * (index + 1);
        const yPos = scrollY * speed;
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Generate parallax layers
  const renderLayers = () => {
    const layerElements = [];
    
    for (let i = 1; i <= layers; i++) {
      layerElements.push(
        <div 
          key={`parallax-layer-${i}`}
          className={`parallax-bg-layer layer-${i}`}
          style={{
            opacity: 1 - ((i - 1) * 0.2),
            zIndex: -i
          }}
          data-parallax={0.02 * i}
        />
      );
    }
    
    return layerElements;
  };
  
  return (
    <div className={containerClass}>
      {renderLayers()}
    </div>
  );
};

export default ParallaxBackground;