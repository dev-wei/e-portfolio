import '../App.css';
import { useState, useEffect, useRef } from 'react';

function ProgramOutcomeGoal2() {
  const [imageLoaded1, setImageLoaded1] = useState(true);
  const [imageLoaded2, setImageLoaded2] = useState(true);
  const [imageLoaded3, setImageLoaded3] = useState(true);
  
  const certificateRef = useRef(null);
  const certificateRef2 = useRef(null);
  const certificateRef3 = useRef(null);
  const ethicsRef = useRef(null);
  const adhaRef = useRef(null);
  
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

    const refs = [certificateRef, certificateRef2, certificateRef3, ethicsRef, adhaRef];
    
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 2</h2>
      <p>As a healthcare professional, I have completed several essential certifications to ensure I meet the highest standards for patient care and safety. Below are the certifications I've earned as part of my professional development.</p>
      
      <h3>Bloodborne Pathogens Training</h3>
      <p>I have successfully completed the Bloodborne Pathogens Training through Pima Medical Institute. This training is critical for healthcare professionals to understand how to prevent the transmission of bloodborne diseases in clinical settings.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded1 ? (
            <img 
              src="./images/bloodborne-certificate.svg" 
              alt="Bloodborne Pathogens Training Certificate from Pima Medical Institute" 
              className="dental-sparkle"
              onError={() => setImageLoaded1(false)}
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
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '1.5rem' }}>Bloodborne Pathogens Training Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification verifies my completion of comprehensive training in bloodborne pathogen safety protocols and infection control procedures.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: Pima Medical Institute</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Completed on October 23, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of infection control protocols and safety measures essential for protecting both patients and healthcare providers from bloodborne diseases in clinical environments.</p>
      
      <h3>Basic Life Support Certification</h3>
      <p>As part of my professional development in the medical field, I have successfully completed the Basic Life Support (BLS) certification program through the American Heart Association. This certification validates my skills in providing CPR and using an AED in emergency situations.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef2} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded2 ? (
            <img 
              src="./images/bls-certificate.svg" 
              alt="Basic Life Support (BLS) Provider Certificate from American Heart Association" 
              className="dental-sparkle"
              onError={() => setImageLoaded2(false)}
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
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '1.5rem' }}>Basic Life Support (BLS) Provider Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification confirms my proficiency in CPR techniques and emergency response procedures for both adult and pediatric patients.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: American Heart Association</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Valid until March 2027</p>
      </div>
      
      <p>This certification is essential for healthcare providers and demonstrates my commitment to patient safety and emergency preparedness in clinical settings.</p>
      
      <h3>HIPAA Clinical Privacy Training</h3>
      <p>As part of my professional development in healthcare, I have successfully completed the HIPAA Clinical Privacy Training through Pima Medical Institute. This training is essential for understanding and maintaining patient confidentiality and privacy in healthcare settings.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef3} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          {imageLoaded3 ? (
            <img 
              src="./images/hipaa-certificate.svg" 
              alt="HIPAA Clinical Privacy Training Certificate from Pima Medical Institute" 
              className="dental-sparkle"
              onError={() => setImageLoaded3(false)}
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
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '1.5rem' }}>HIPAA Clinical Privacy Training Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification validates my knowledge of healthcare privacy laws and protocols for the proper handling of protected health information.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: Pima Medical Institute</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Completed on October 30, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of patient privacy laws and regulations, which is crucial for maintaining confidentiality and security of protected health information (PHI) in all healthcare environments. Compliance with HIPAA regulations ensures that patient data is handled properly and helps prevent breaches of sensitive information.</p>
      
      <h3>ADHA Code of Ethics Assignment</h3>
      <p>As part of my dental hygiene education, I completed an in-depth assignment analyzing the American Dental Hygienists' Association (ADHA) Code of Ethics. This assignment demonstrates my understanding of the ethical principles that guide dental hygiene practice and my commitment to upholding professional standards.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={ethicsRef} style={{ padding: '2rem 2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe 
             src="./images/adha-code-of-ethics-assigment.pdf"
             width="100%" 
             height="600px"
             style={{ 
               border: 'none',
               borderRadius: '8px',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
             }}
             title="ADHA Code of Ethics Assignment"
           >
             <p>Your browser does not support iframes. <a href="./images/adha-code-of-ethics-assigment.pdf" target="_blank" rel="noopener noreferrer">Download the ADHA Code of Ethics Assignment</a></p>
           </iframe>
        </div>
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '1.5rem' }}>ADHA Code of Ethics Analysis</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This comprehensive assignment explores the ethical foundations of dental hygiene practice and demonstrates my commitment to professional integrity.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Assignment for: Pima Medical Institute</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Completed: Fall 2024</p>
      </div>
      
      <h4>Reflection on Professional Ethics</h4>
      <p>Studying the ADHA Code of Ethics has been instrumental in shaping my understanding of what it means to be a professional dental hygienist. The code emphasizes several key principles that I am committed to upholding throughout my career:</p>
      
      <p><strong>Patient-Centered Care:</strong> The code reinforces that the primary obligation of dental hygienists is to serve the public and promote optimal oral health. This means always putting patient welfare first, providing care without discrimination, and ensuring that all patients receive respectful, compassionate treatment regardless of their background or circumstances.</p>
      
      <p><strong>Professional Competence:</strong> The ethical standards require continuous learning and maintaining competency in all aspects of dental hygiene practice. This commitment to lifelong learning ensures that I will always provide the most current, evidence-based care to my patients while staying updated with the latest developments in oral healthcare.</p>
      
      <p><strong>Integrity and Honesty:</strong> The code emphasizes the importance of truthfulness in all professional relationships - with patients, colleagues, and the public. This includes honest communication about treatment options, costs, and prognosis, as well as maintaining accurate records and being transparent about any limitations in my knowledge or skills.</p>
      
      <p><strong>Confidentiality and Privacy:</strong> Respecting patient confidentiality is a cornerstone of ethical practice. This principle aligns closely with HIPAA requirements and ensures that patient information is protected and only shared when appropriate and with proper consent.</p>
      
      <p>This assignment has reinforced my commitment to practicing dental hygiene with the highest ethical standards. I understand that being a healthcare professional carries significant responsibility, and I am prepared to uphold these ethical principles throughout my career to ensure the best possible outcomes for my patients and the profession as a whole.</p>
        
        <h3>American Dental Hygienists' Association (ADHA)</h3>
        <p>The American Dental Hygienists' Association represents the voice of dental hygienists nationwide and serves as the primary advocate for advancing the profession of dental hygiene.</p>
        
        <div ref={adhaRef} className="certificate-reveal animated-border dental-pattern" style={{ padding: '2rem 2.5rem', textAlign: 'center' }}>
          <img 
            src="./images/adha.png" 
            alt="American Dental Hygienists' Association Logo" 
            style={{ 
              maxWidth: '300px', 
              width: '100%', 
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              margin: '1rem 0'
            }}
          />
          <h4 style={{ color: 'var(--dental-blue)', marginTop: '1.5rem' }}>Professional Association Membership</h4>
          <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>Commitment to the standards and values of the dental hygiene profession</p>
        </div>
        
        <h4>Reflection on Professional Association</h4>
        <p>The American Dental Hygienists' Association (ADHA) plays a crucial role in shaping the future of dental hygiene practice. As I prepare to enter this profession, I recognize the importance of being part of an organization that advocates for dental hygienists' rights, promotes continuing education, and works to advance the scope of practice.</p>
        
        <p><strong>Professional Advocacy:</strong> The ADHA serves as a powerful voice in legislative matters, working to expand practice opportunities for dental hygienists and ensure that patients have greater access to preventive oral healthcare services. This advocacy directly impacts my future ability to serve patients effectively and practice to the full extent of my education and training.</p>
        
        <p><strong>Continuing Education and Standards:</strong> Through the ADHA, dental hygienists have access to the latest research, continuing education opportunities, and evidence-based practice guidelines. This commitment to lifelong learning ensures that I will always provide the most current and effective care to my patients.</p>
        
        <p><strong>Professional Community:</strong> Being part of the ADHA means joining a community of dedicated professionals who share the same commitment to oral health promotion and disease prevention. This network provides support, mentorship, and opportunities for professional growth throughout my career.</p>
        
        <p>My commitment to the ADHA represents my dedication to not only being a skilled dental hygienist but also being an active participant in advancing the profession for future generations of practitioners and the patients we serve.</p>
      </div>
    );
  }

export default ProgramOutcomeGoal2;