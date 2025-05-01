import '../App.css';
import { useState } from 'react';

function ProgramOutcomeGoal6() {
  const [imageLoaded, setImageLoaded] = useState(true);

  const certificateContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  };

  const certificateStyle = {
    maxWidth: '100%',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  return (
    <div className="page-content">
      <h2>Program Outcome Goal 6</h2>
      <p>Content for Program Outcome Goal 6 will be added here.</p>
    </div>
  );
}

export default ProgramOutcomeGoal6;