import '../App.css';

function ProfessionalGoals() {
  return (
    <div className="page-content">
      <h2>Professional Goal Statement</h2>
      <div className="goal-statement">
        <p>
          My professional goal is to become a leading dental practitioner who combines clinical excellence with compassionate patient care. 
          I aim to continuously expand my knowledge and skills in modern dental techniques while maintaining a strong focus on preventive care.
        </p>
        <p>
          Within the next decade, I aspire to establish a dental practice that serves as a community hub for oral health education and accessible care. 
          I am committed to implementing innovative approaches that make dental visits less stressful and more comfortable for patients of all ages.
        </p>
        <p>
          Additionally, I plan to contribute to the field through research and mentorship, helping to shape the next generation of dental professionals 
          who share my dedication to ethical practice and patient-centered care.
        </p>
      </div>

      <h2 className="timeline-header">Career Timeline</h2>
      <div className="career-timeline">
        <div className="timeline-container">
          <div className="timeline-figure">
            <img src="/career-figure.svg" alt="Career progression figure" className="timeline-image" />
          </div>
          <div className="timeline-steps">
            <div className="timeline-step" id="step1">
              <div className="step-content">
                <h3 className="step-number">#01</h3>
                <div className="step-info">
                  <h4>Manual Tester</h4>
                  <p>(0-2 Years)</p>
                </div>
              </div>
            </div>
            <div className="timeline-step" id="step2">
              <div className="step-content">
                <h3 className="step-number">#02</h3>
                <div className="step-info">
                  <h4>Automation Tester</h4>
                  <p>(2-5 Years)</p>
                </div>
              </div>
            </div>
            <div className="timeline-step" id="step3">
              <div className="step-content">
                <h3 className="step-number">#03</h3>
                <div className="step-info">
                  <h4>Test Lead</h4>
                  <p>(4-6 Years)</p>
                  <span className="date-marker">01 January 2024</span>
                </div>
              </div>
            </div>
            <div className="timeline-step" id="step4">
              <div className="step-content">
                <h3 className="step-number">#04</h3>
                <div className="step-info">
                  <h4>Test Manager</h4>
                  <p>(6-10 Years)</p>
                  <span className="date-marker">10 February 2025</span>
                </div>
              </div>
            </div>
            <div className="timeline-step" id="step5">
              <div className="step-content">
                <h3 className="step-number">#05</h3>
                <div className="step-info">
                  <h4>Head Of Unit</h4>
                  <p>(10-15 Years)</p>
                </div>
              </div>
            </div>
            <div className="timeline-step" id="step6">
              <div className="step-content">
                <h3 className="step-number">#06</h3>
                <div className="step-info">
                  <h4>Director</h4>
                  <p>15 March 2030</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalGoals;