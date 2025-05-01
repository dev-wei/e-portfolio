import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import animation effects
import { initializeAllEffects } from './effects/3d-effects.js'
import { initializeAllParallaxEffects } from './effects/parallax-effects.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize effects after render
document.addEventListener('DOMContentLoaded', () => {
  // Initialize 3D card effects
  initializeAllEffects();
  
  // Initialize parallax scrolling effects
  initializeAllParallaxEffects();
});
