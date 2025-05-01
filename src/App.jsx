import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import './portfolio.css';
import './animations.css'; // Import enhanced animations

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faTooth, faGraduationCap, faFileAlt, faStar, faClipboardCheck, faUserMd } from '@fortawesome/free-solid-svg-icons';

// Import pages
import MissionVision from './pages/MissionVision';
import OralHealthPhilosophy from './pages/OralHealthPhilosophy';
import ProfessionalGoals from './pages/ProfessionalGoals';
import Resume from './pages/Resume';
import ProgramOutcomeGoal1 from './pages/ProgramOutcomeGoal1';
import ProgramOutcomeGoal2 from './pages/ProgramOutcomeGoal2';
import ProgramOutcomeGoal3 from './pages/ProgramOutcomeGoal3';
import ProgramOutcomeGoal4 from './pages/ProgramOutcomeGoal4';
import ProgramOutcomeGoal5 from './pages/ProgramOutcomeGoal5';
import ProgramOutcomeGoal6 from './pages/ProgramOutcomeGoal6';
import ProgramOutcomeGoal7 from './pages/ProgramOutcomeGoal7';

function App() {
  const [selectedItem, setSelectedItem] = useState('home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts for entrance animations
    setLoaded(true);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render content based on selected item
  const renderContent = () => {
    switch(selectedItem) {
      case 'mission-vision':
        return <MissionVision />;
      case 'oral-health-philosophy':
        return <OralHealthPhilosophy />;
      case 'professional-goals':
        return <ProfessionalGoals />;
      case 'resume':
        return <Resume />;
      case 'program-outcome-1':
        return <ProgramOutcomeGoal1 />;
      case 'program-outcome-2':
        return <ProgramOutcomeGoal2 />;
      case 'program-outcome-3':
        return <ProgramOutcomeGoal3 />;
      case 'program-outcome-4':
        return <ProgramOutcomeGoal4 />;
      case 'program-outcome-5':
        return <ProgramOutcomeGoal5 />;
      case 'program-outcome-6':
        return <ProgramOutcomeGoal6 />;
      case 'program-outcome-7':
        return <ProgramOutcomeGoal7 />;
      default:
        return (
          <div className="welcome-content parallax-container dental-pattern">
            <h2 className="transform-3d"><FontAwesomeIcon icon={faTooth} className="welcome-icon pulse" /> Welcome to my Portfolio</h2>
            <p>Welcome to my Dental Hygienist Portfolio. This professional collection showcases my skills, philosophy, and journey in dental hygiene. Please explore the sections from the navigation menu to learn more about my qualifications and approach to patient care.</p>
            <div className="welcome-cards">
              <div className="welcome-card welcome-card-enhanced card-3d">
                <div className="card-content">
                  <FontAwesomeIcon icon={faBullseye} className="card-icon icon-hover" />
                  <h3>My Mission</h3>
                  <p>Dedicated to providing exceptional dental care with compassion and expertise</p>
                </div>
              </div>
              <div className="welcome-card welcome-card-enhanced card-3d">
                <div className="card-content">
                  <FontAwesomeIcon icon={faGraduationCap} className="card-icon icon-hover" />
                  <h3>Qualifications</h3>
                  <p>Trained in advanced hygiene techniques with ongoing professional development</p>
                </div>
              </div>
              <div className="welcome-card welcome-card-enhanced card-3d">
                <div className="card-content">
                  <FontAwesomeIcon icon={faUserMd} className="card-icon icon-hover" />
                  <h3>Patient Care</h3>
                  <p>Dedicated to providing comfortable, personalized treatment experiences</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Router>
      <div className={`portfolio-container ${loaded ? 'loaded' : ''}`}>
        <header className="portfolio-header parallax-container">
          <h1 className="shine-effect">Yiyi Huang</h1>
          <div className="profile-icon transform-3d">
            <img src="/images/profile-photo.jpg" alt="Yiyi Huang profile photo" />
          </div>
        </header>
        
        <div className="content-wrapper">
          <section className="content-section">
            <nav className="portfolio-nav minimalist-nav glass-effect">
              <ul>
                <li className={`${selectedItem === 'mission-vision' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Mission and Vision" onClick={(e) => { e.preventDefault(); handleItemClick('mission-vision'); }}>
                    <FontAwesomeIcon icon={faBullseye} className="nav-icon icon-hover" /> Mission and Vision
                  </a>
                </li>
                <li className={`${selectedItem === 'oral-health-philosophy' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Oral Health Philosophy" onClick={(e) => { e.preventDefault(); handleItemClick('oral-health-philosophy'); }}>
                    <FontAwesomeIcon icon={faTooth} className="nav-icon icon-hover" /> Oral Health Philosophy
                  </a>
                </li>
                <li className={`${selectedItem === 'professional-goals' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Professional Goals" onClick={(e) => { e.preventDefault(); handleItemClick('professional-goals'); }}>
                    <FontAwesomeIcon icon={faGraduationCap} className="nav-icon icon-hover" /> Professional Goals
                  </a>
                </li>
                <li className={`${selectedItem === 'resume' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Resume" onClick={(e) => { e.preventDefault(); handleItemClick('resume'); }}>
                    <FontAwesomeIcon icon={faFileAlt} className="nav-icon icon-hover" /> Resume
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-1' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome Goal 1" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-1'); }}>
                    <FontAwesomeIcon icon={faStar} className="nav-icon icon-hover" /> Program Outcome Goal 1
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-2' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome Goal 2" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-2'); }}>
                    <FontAwesomeIcon icon={faClipboardCheck} className="nav-icon icon-hover" /> Program Outcome Goal 2
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-3' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome Goal 3" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-3'); }}>
                    <FontAwesomeIcon icon={faUserMd} className="nav-icon icon-hover" /> Program Outcome Goal 3
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-4' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome 4" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-4'); }}>
                    <FontAwesomeIcon icon={faStar} className="nav-icon icon-hover" /> Program Outcome Goal 4
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-5' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome 5" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-5'); }}>
                    <FontAwesomeIcon icon={faClipboardCheck} className="nav-icon icon-hover" /> Program Outcome Goal 5
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-6' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome 6" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-6'); }}>
                    <FontAwesomeIcon icon={faUserMd} className="nav-icon icon-hover" /> Program Outcome Goal 6
                  </a>
                </li>
                <li className={`${selectedItem === 'program-outcome-7' ? 'active' : ''} nav-item-enhanced`}>
                  <a href="#" tabIndex="0" aria-label="Program Outcome 7" onClick={(e) => { e.preventDefault(); handleItemClick('program-outcome-7'); }}>
                    <FontAwesomeIcon icon={faStar} className="nav-icon icon-hover" /> Program Outcome Goal 7
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          
          <section className="profile-section">
            <div className="content-display">
              {renderContent()}
            </div>
          </section>
        </div>
      </div>
    </Router>
  )
}

export default App
