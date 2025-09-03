import '../App.css';
import { useState, useEffect, useRef } from 'react';

function ProgramOutcomeGoal1() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [recommendationImageLoaded, setRecommendationImageLoaded] = useState(true);

  const certificateRef = useRef(null);
  const recommendationRef = useRef(null);

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
    if (recommendationRef.current) {
      observer.observe(recommendationRef.current);
    }

    return () => {
      if (certificateRef.current) {
        observer.unobserve(certificateRef.current);
      }
      if (recommendationRef.current) {
        observer.unobserve(recommendationRef.current);
      }
    };
  }, []);

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 1</h2>
      <p>An essential part of becoming a dental hygiene professional is gaining acceptance into an accredited program. After a competitive application process, I am proud to have been accepted into the Pima Medical Institute's Dental Hygiene program.</p>
      
      <h3>Acceptance into Pima Medical Institute's Dental Hygiene Program</h3>
      <p>This acceptance letter represents a significant milestone in my journey toward becoming a dental hygiene professional. The Pima Medical Institute is known for its rigorous standards and comprehensive training in the field of dental hygiene.</p>
      
      <div id="certificateContainerStyle" className="certificate-reveal animated-border dental-pattern" ref={certificateRef}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded ? (
            <img 
              src="./images/pima-acceptance-letter.svg" 
              alt="Acceptance Letter from Pima Medical Institute for Dental Hygiene Program" 
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
            <p>Acceptance letter image could not be loaded.</p>
          )}
        </div>
        <p className="certificate-title"><strong>Pima Medical Institute - Dental Hygiene Program Acceptance</strong></p>
        <p className="certificate-date">Received July 26, 2024</p>
      </div>
      
      <p>This acceptance marks the beginning of my formal education in dental hygiene. The program at Pima Medical Institute will provide me with the theoretical knowledge and practical skills needed to excel in dental healthcare. Throughout this program, I will learn about oral anatomy, preventive dental care, clinical procedures, and patient education — all essential components for a successful career as a dental hygienist.</p>
      
      <p>The training will include both classroom instruction and supervised clinical experience, allowing me to develop the expertise necessary to provide quality dental care while adhering to the highest professional standards and ethics.</p>
      
      <h3>Letter of Recommendation</h3>
      <p>In addition to my acceptance into the program, I have received strong support from mentors and professionals who recognize my potential in the dental hygiene field.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={recommendationRef}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {recommendationImageLoaded ? (
            <img 
              src="./images/recommendation-letter.jpg" 
              alt="Letter of Recommendation for Dental Hygiene Program" 
              className="dental-sparkle"
              onError={() => setRecommendationImageLoaded(false)}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
              }}
            />
          ) : (
            <p>Recommendation letter image could not be loaded.</p>
          )}
        </div>
        <p className="certificate-title"><strong>Professional Letter of Recommendation</strong></p>
        <p className="certificate-date">Supporting Documentation</p>
      </div>
      
      <p>This letter of recommendation serves as a testament to my dedication and commitment to pursuing excellence in dental hygiene. The endorsement from respected professionals in the healthcare field validates my readiness to embark on this educational journey and reinforces my potential to succeed as a dental hygiene professional.</p>
      
      <p>Having strong professional references demonstrates not only my academic capabilities but also my character, work ethic, and interpersonal skills that are essential in healthcare settings. This recommendation reflects the confidence that experienced professionals have in my ability to contribute meaningfully to the dental hygiene profession and provide compassionate patient care.</p>
    </div>
  );
}

export default ProgramOutcomeGoal1;