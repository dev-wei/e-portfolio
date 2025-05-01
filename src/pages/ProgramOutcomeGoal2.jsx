import '../App.css';
import { useRef } from 'react';

function ProgramOutcomeGoal2() {
  const certificateRef = useRef(null);
  const certificateRef2 = useRef(null);
  const certificateRef3 = useRef(null);
  
  // Certificate sections with refined styling

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 2</h2>
      <p>As a healthcare professional, I have completed several essential certifications to ensure I meet the highest standards for patient care and safety. Below are the certifications I've earned as part of my professional development.</p>
      
      <h3>Bloodborne Pathogens Training</h3>
      <p>I have successfully completed the Bloodborne Pathogens Training through Pima Medical Institute. This training is critical for healthcare professionals to understand how to prevent the transmission of bloodborne diseases in clinical settings.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef} style={{ padding: '2rem 2.5rem' }}>
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '0' }}>Bloodborne Pathogens Training Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification verifies my completion of comprehensive training in bloodborne pathogen safety protocols and infection control procedures.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: Pima Medical Institute</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Completed on October 23, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of infection control protocols and safety measures essential for protecting both patients and healthcare providers from bloodborne diseases in clinical environments.</p>
      
      <h3>Basic Life Support Certification</h3>
      <p>As part of my professional development in the medical field, I have successfully completed the Basic Life Support (BLS) certification program through the American Heart Association. This certification validates my skills in providing CPR and using an AED in emergency situations.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef2} style={{ padding: '2rem 2.5rem' }}>
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '0' }}>Basic Life Support (BLS) Provider Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification confirms my proficiency in CPR techniques and emergency response procedures for both adult and pediatric patients.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: American Heart Association</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Valid until March 2027</p>
      </div>
      
      <p>This certification is essential for healthcare providers and demonstrates my commitment to patient safety and emergency preparedness in clinical settings.</p>
      
      <h3>HIPAA Clinical Privacy Training</h3>
      <p>As part of my professional development in healthcare, I have successfully completed the HIPAA Clinical Privacy Training through Pima Medical Institute. This training is essential for understanding and maintaining patient confidentiality and privacy in healthcare settings.</p>
      
      <div className="certificate-reveal animated-border dental-pattern" ref={certificateRef3} style={{ padding: '2rem 2.5rem' }}>
        <h4 style={{ color: 'var(--dental-blue)', marginTop: '0' }}>HIPAA Clinical Privacy Training Certification</h4>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>This certification validates my knowledge of healthcare privacy laws and protocols for the proper handling of protected health information.</p>
        <p className="certificate-issuer" style={{ fontWeight: '500', color: 'var(--dental-dark)' }}>Issued by: Pima Medical Institute</p>
        <p className="certificate-date" style={{ marginTop: '0.5rem' }}>Completed on October 30, 2024</p>
      </div>
      
      <p>This certification demonstrates my understanding of patient privacy laws and regulations, which is crucial for maintaining confidentiality and security of protected health information (PHI) in all healthcare environments. Compliance with HIPAA regulations ensures that patient data is handled properly and helps prevent breaches of sensitive information.</p>
    </div>
  );
}

export default ProgramOutcomeGoal2;