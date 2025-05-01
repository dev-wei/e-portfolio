import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Yiyi Huang's portfolio</h1>
      </header>
      
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