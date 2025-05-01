import '../App.css';
import { useState, useEffect, useRef } from 'react';

function ProgramOutcomeGoal3() {
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
      <h2>Program Outcome Goal 3</h2>
      <p>As part of my professional development in healthcare, I have successfully completed the HIPAA Clinical Privacy Training through Pima Medical Institute. This training is essential for understanding and maintaining patient confidentiality and privacy in healthcare settings.</p>
      
      <div id="certificateContainerStyle" className="certificate-reveal animated-border dental-pattern" ref={certificateRef}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded ? (
            <img 
              src="./images/hipaa-certificate.svg" 
              alt="HIPAA Clinical Privacy Training Certificate from Pima Medical Institute" 
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
        <p className="certificate-title"><strong>HIPAA Clinical Privacy Training Certification</strong></p>
        <p className="certificate-date">Completed on October 30, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of patient privacy laws and regulations, which is crucial for maintaining confidentiality and security of protected health information (PHI) in all healthcare environments. Compliance with HIPAA regulations ensures that patient data is handled properly and helps prevent breaches of sensitive information.</p>
    </div>
  );
}

export default ProgramOutcomeGoal3;