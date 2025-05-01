import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="dental-icon-container">
          <svg className="tooth-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M224 0c70.7 0 128 57.3 128 128c0 23.4-6.5 48.8-18.8 76.2-12.3 27.1-30.1 57.6-54.8 89.7-53.1 69-114.7 125.4-115.2 125.8-3 3-7.8 3-10.8 0-.5-.4-62.1-56.8-115.2-125.8-24.7-32.1-42.5-62.6-54.8-89.7C-6.5 176.8 0 151.4 0 128 0 57.3 57.3 0 128 0h96z"/>
          </svg>
        </div>
        <h1>Yiyi Huang's Dental Hygiene Portfolio</h1>
        <p className="header-subtitle">Professional Oral Health Care Specialist</p>
      </header>
      
      <div className="welcome-cards">
        <div className="welcome-card">
          <div className="card-icon">🦷</div>
          <h3>Professional Philosophy</h3>
          <p>Dedicated to providing exceptional oral healthcare with compassion and clinical excellence.</p>
        </div>
        <div className="welcome-card">
          <div className="card-icon">🔍</div>
          <h3>Clinical Expertise</h3>
          <p>Specialized training in preventive care, patient education, and the latest dental hygiene techniques.</p>
        </div>
        <div className="welcome-card">
          <div className="card-icon">📚</div>
          <h3>Continuous Learning</h3>
          <p>Committed to ongoing education to provide the best possible patient care.</p>
        </div>
      </div>
      
      <div className="table-of-contents">
        <h2>Table of Content</h2>
        <ul>
          <li>
            <Link to="/mission-vision">Mission and Vision Statement</Link>
          </li>
          <li>
            <Link to="/oral-health-philosophy">Oral Health Philosophy Statement</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;