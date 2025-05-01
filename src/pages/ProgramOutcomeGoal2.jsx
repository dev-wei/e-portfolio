import '../App.css';
import { useState, useEffect, useRef } from 'react';

function ProgramOutcomeGoal2() {
  const [imageLoaded, setImageLoaded] = useState(true);

  const certificateRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (certificateRef.current) {
      observer.observe(certificateRef.current);
    }

    return () => {
      if (certificateRef.current) {
        observer.unobserve(certificateRef.current);
      }
    };
  }, []);

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 2</h2>
      <p>As part of my professional development in dental healthcare, I have successfully completed the Bloodborne Pathogens Training through Pima Medical Institute. This training is critical for healthcare professionals to understand how to prevent the transmission of bloodborne diseases in clinical settings.</p>
      
      <div id="certificateContainerStyle" className="certificate-reveal animated-border" ref={certificateRef}>
        <div style={{ width: '100%', maxWidth: '800px', overflow: 'hidden' }}>
          {imageLoaded ? (
            <img 
              src="./images/bloodborne-certificate.svg" 
              alt="Bloodborne Pathogens Training Certificate from Pima Medical Institute" 
              id="certificateStyle"
              className="dental-sparkle"
              onError={() => setImageLoaded(false)}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : (
            <p>Certificate image could not be loaded.</p>
          )}
        </div>
        <p><strong>Bloodborne Pathogens Training Certification</strong></p>
        <p>Completed on October 23, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of infection control protocols and safety measures essential for protecting both patients and healthcare providers from bloodborne diseases in clinical environments.</p>
    </div>
  );
}

export default ProgramOutcomeGoal2;