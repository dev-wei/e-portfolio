import React, { useState, useEffect } from 'react';
import '../App.css';
import '../animations.css'; // Ensure animations are imported

function ProfessionalGoals() {
  const [activeStep, setActiveStep] = useState(null);

  const handleMouseEnter = (stepId) => {
    setActiveStep(stepId);
  };

  const handleMouseLeave = () => {
    setActiveStep(null);
  };

  useEffect(() => {
    // Get the object element
    const svgObject = document.getElementById('career-svg-object');
    if (!svgObject) return;

    // Access the SVG document's contentWindow
    const svgDoc = svgObject.contentDocument;
    if (!svgDoc) {
      // SVG might not be loaded yet, listen for load event
      const handleLoad = () => {
        const loadedSvgDoc = svgObject.contentDocument;
        if (loadedSvgDoc && loadedSvgDoc.defaultView && typeof loadedSvgDoc.defaultView.setActiveSVGPOS === 'function') {
          loadedSvgDoc.defaultView.setActiveSVGPOS(activeStep);
        }
        svgObject.removeEventListener('load', handleLoad); // Clean up listener
      };
      svgObject.addEventListener('load', handleLoad);
      return; // Exit effect until SVG is loaded
    }

    // Check if the function exists in the SVG's script context (window)
    if (svgDoc.defaultView && typeof svgDoc.defaultView.setActiveSVGPOS === 'function') {
      svgDoc.defaultView.setActiveSVGPOS(activeStep);
    } else {
      console.warn('setActiveSVGPOS function not found in SVG.');
      // Fallback or alternative logic if needed
    }

  }, [activeStep]);

  return (
    <div className="page-content">
      <h2>Professional Goal Statement</h2>
      <div className="goal-statement">
        <p>
          My professional goal is to become a highly skilled dental hygienist who combines excellent clinical technique with compassionate patient care.
          I aim to continuously expand my knowledge and skills in preventive dental care while advocating for optimal oral health.
        </p>
        <p>
          Within the next five years, I aspire to specialize in periodontal therapy and patient education, contributing to improved oral health outcomes
          in underserved communities. I am committed to implementing innovative approaches that make dental hygiene visits both educational and comfortable.
        </p>
        <p>
          Throughout my career, I plan to pursue advanced certifications, contribute to the field through local community outreach, and eventually move into
          dental hygiene education to shape the next generation of compassionate and skilled dental hygiene professionals.
        </p>
      </div>

      <h2 className="timeline-header">Dental Hygienist Career Ladder</h2>
      <div className="career-timeline">
        <div className="timeline-container">
          <div className="timeline-figure">
            {/* Use the new SVG animation */}
            <object
              id="career-svg-object" // Changed ID to avoid conflict with SVG internal ID
              type="image/svg+xml"
              data="./career-figure-animated.svg" // Point to the new SVG file
              aria-labelledby="careerTitle careerDesc"
              className="timeline-image animated-career"
              style={{ width: '800px', height: '650px' }} // Set explicit size to match SVG viewbox
            >
              Your browser does not support SVGs.
            </object>
          </div>
          <div className="timeline-steps">
            {/* Add mouse event handlers to each step */}
            <div
              className="timeline-step"
              id="step1"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-content">
                <h3 className="step-number">#01</h3>
                <div className="step-info">
                  <h4>Entry-Level\nHygienist</h4>
                  <p>(0-2 Years)</p>
                  <ul className="milestone-list">
                    <li>Complete Associate Degree in Dental Hygiene</li>
                    <li>Pass National Board Dental Hygiene Examination</li>
                    <li>Obtain state licensure</li>
                    <li>Develop basic clinical skills and patient rapport</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="timeline-step"
              id="step2"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-content">
                <h3 className="step-number">#02</h3>
                <div className="step-info">
                  <h4>Clinical\nHygienist</h4>
                  <p>(2-5 Years)</p>
                  <ul className="milestone-list">
                    <li>Expand clinical efficiency and expertise</li>
                    <li>Complete continuing education in specialized areas</li>
                    <li>Develop patient education skills</li>
                    <li>Obtain local anesthesia certification</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="timeline-step"
              id="step3"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-content">
                <h3 className="step-number">#03</h3>
                <div className="step-info">
                  <h4>Specialized\nHygienist</h4>
                  <p>(4-6 Years)</p>
                  <span className="date-marker">01 January 2024</span>
                  <ul className="milestone-list">
                    <li>Obtain periodontal therapy certification</li>
                    <li>Develop expertise in special needs patients</li>
                    <li>Complete Bachelor's Degree in Dental Hygiene</li>
                    <li>Begin working with complex periodontal cases</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="timeline-step"
              id="step4"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-content">
                <h3 className="step-number">#04</h3>
                <div className="step-info">
                  <h4>Lead\nHygienist</h4>
                  <p>(6-10 Years)</p>
                  <span className="date-marker">10 February 2025</span>
                  <ul className="milestone-list">
                    <li>Supervise and mentor junior hygienists</li>
                    <li>Participate in practice management</li>
                    <li>Develop protocols and clinical standards</li>
                    <li>Start community outreach programs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="timeline-step"
              id="step5"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-content">
                <h3 className="step-number">#05</h3>
                <div className="step-info">
                  <h4>Educator /\nResearcher</h4>
                  <p>(10-15 Years)</p>
                  <ul className="milestone-list">
                    <li>Complete Master's Degree in Dental Hygiene or Education</li>
                    <li>Teach part-time at dental hygiene programs</li>
                    <li>Participate in clinical research</li>
                    <li>Present at dental hygiene conferences</li>
                  </ul>
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