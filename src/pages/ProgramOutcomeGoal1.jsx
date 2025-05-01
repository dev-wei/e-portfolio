import '../App.css';
import { useState, useEffect, useRef } from 'react';

function ProgramOutcomeGoal1() {
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
      <h2>Program Outcome Goal 1</h2>
      <p>As part of my professional development in the medical field, I have successfully completed the Basic Life Support (BLS) certification program through the American Heart Association. This certification validates my skills in providing CPR and using an AED in emergency situations.</p>
      
      <div id="certificateContainerStyle" className="certificate-reveal animated-border dental-pattern" ref={certificateRef}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded ? (
            <img 
              src="./images/bls-certificate.svg" 
              alt="BLS Certificate from American Heart Association" 
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
        <p className="certificate-title"><strong>Basic Life Support (BLS) Provider Certification</strong></p>
        <p className="certificate-date">Valid until March 2027</p>
      </div>
      
      <p>This certification is essential for healthcare providers and demonstrates my commitment to patient safety and emergency preparedness in clinical settings.</p>
    </div>
  );
}

export default ProgramOutcomeGoal1;