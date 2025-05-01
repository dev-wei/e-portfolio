import React, { useEffect, useRef } from 'react';
import '../App.css';
import '../portfolio.css';
import '../animations.css';

function Resume() {
  // Create refs for each section to apply staggered animations
  const sectionRefs = {
    education: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    rewards: useRef(null),
    competencies: useRef(null),
    summary: useRef(null)
  };

  useEffect(() => {
    // Set up reveal animations with IntersectionObserver
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref, index) => {
      if (ref.current) {
        // Add custom index for staggered animation timing
        ref.current.style.setProperty('--resume-section-index', index);
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up observer
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="content-display">
      <h3 className="section-title">Resume</h3>
      
      {/* Profile intro with simple motivation statement */}
      <div className="profile-intro">
        <p>I am a self-motivated professional who enjoys learning and growing through challenges.</p>
      </div>
      
      {/* Profile Summary */}
      <section className="resume-section summary-section" ref={sectionRefs.summary}>
          <h2>Highlights</h2>
          <ul className="highlight-list">
            <li>Almost 10 years of working experiences in journalism and event</li>
            <li>Experience in journalize, public relation, event, customer services</li>
            <li>Technical skills: Audio/Visual; Photoshop; Adobe Premiere Pro; Figma; Adobe XD</li>
            <li>Bilingual (English and Chinese)</li>
          </ul>
        </section>

        {/* Rewards Section */}
        <section className="resume-section rewards-section" ref={sectionRefs.rewards}>
          <h2>Rewards</h2>
          <div className="resume-item">
            <div className="reward-entry">
              <h3>Exemplary Service</h3>
              <p className="institution">New York State Senate Office</p>
              <p className="date">December 29th, 2018</p>
            </div>
            
            <div className="reward-entry">
              <h3>Distinguished Woman of the Year</h3>
              <p className="institution">New York State Assembly Office</p>
              <p className="date">March 12th, 2016</p>
            </div>
          </div>
        </section>

        {/* Core Competencies Section */}
        <section className="resume-section competencies-section" ref={sectionRefs.competencies}>
          <h2>Core Competencies</h2>
          <div className="resume-item">
            <p className="core-skills">Communication skills | Program planning</p>
            <p className="competency-description">Organizing and planning skills with efficiency, reliability, and teamwork</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="resume-section" ref={sectionRefs.experience}>
          <h2>Work Experience</h2>
          
          <div className="resume-item experience-item">
            <div className="experience-header">
              <h3>Journalist</h3>
              <p className="institution">World Journal</p>
              <p className="date">2013 - 2021 | NY</p>
            </div>
            <ul className="experience-details">
              <li>Conduct in-depth research and interviews to produce compelling news stories for daily publishing newspaper and online platforms.</li>
              <li>Functioned as lead reporter for NewYork local daily (e.g., Crime news, Legislation, Government, Business, Education, Healthcare).</li>
              <li>Singled out as one of the most prolific writers and productive story contributors among reporting staff. Never failed to meet a deadline.</li>
              <li>Familiar with the new immigrant and minority community.</li>
            </ul>
          </div>

          <div className="resume-item experience-item">
            <div className="experience-header">
              <h3>Event Coordinator/Customer Services (Internship)</h3>
              <p className="institution">SoHo Fashion, Inc</p>
              <p className="date">2011 | Providence, RI</p>
            </div>
            <ul className="experience-details">
              <li>Directed the planning, budgeting, onsite supervision, and execution of promotional and special events.</li>
              <li>Managed social media marketing linked to promotional campaigns.</li>
              <li>Wrote marketing reports.</li>
            </ul>
          </div>

          <div className="resume-item experience-item">
            <div className="experience-header">
              <h3>Editorial Production Assistant</h3>
              <p className="institution">Hunan TV</p>
              <p className="date">2009 | China</p>
            </div>
            <ul className="experience-details">
              <li>Participated in producing flow and design of television programs.</li>
              <li>Participated in editing and rearranging the television programs.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="resume-section education-section" ref={sectionRefs.education}>
          <h2>Education</h2>
          <div className="resume-item education-item">
            <h3>Master's Degree of Business Administration – MBA</h3>
            <p className="concentration">Concentration: Hospitality Event Leadership</p>
            <p className="institution">Johnson & Wales University</p>
            <p className="location">Providence, RI</p>
            <p className="date">02/2013</p>
          </div>

          <div className="resume-item education-item">
            <h3>Bachelor of Arts Degree – Journalism</h3>
            <p className="institution">University of XianTan</p>
            <p className="location">HN, China</p>
            <p className="date">05/2009</p>
          </div>
        </section>
      </div>
  );
}

export default Resume;