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
      
      <div id="certificateContainerStyle" className="certificate-reveal animated-border dental-pattern" ref={certificateRef}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded ? (
            <img 
              src="./images/bloodborne-certificate.svg" 
              alt="Bloodborne Pathogens Training Certificate from Pima Medical Institute" 
              id="certificateStyle"
              className="dental-sparkle"
              onError={() => setImageLoaded(false)}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
              }}
            />
          ) : (
            <p>Certificate image could not be loaded.</p>
          )}
        </div>
        <p className="certificate-title"><strong>Bloodborne Pathogens Training Certification</strong></p>
        <p className="certificate-date">Completed on October 23, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of infection control protocols and safety measures essential for protecting both patients and healthcare providers from bloodborne diseases in clinical environments.</p>
    </div>
  );
}

export default ProgramOutcomeGoal2;