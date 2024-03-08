import React, { useState } from 'react';
import './InstructionsOverlay.css'; // Import CSS file for styling

const InstructionsOverlay = ({ onClose }) => {
  const [step, setStep] = useState(1); // State to track the current step of instructions

  const handleNextStep = () => {
    // Increment the step when the next button is clicked
    setStep(step + 1);
  };

  const handleClose = () => {
    // Call the onClose function passed from the parent component to close the overlay
    onClose();
  };

  return (
    <div className="instructions-overlay">
      <div className="blur-overlay" />
      <div className="instructions-box">
        {/* Render different instructions based on the current step */}
        {step === 1 && (
          <div className="instructions-center">
            <h2>How to Explore the Map</h2>
            <p>Click and drag the mouse to navigate the map.</p>
            <img className='drag-icon' src="drag.png" alt="Mouse Drag Icon" />
          </div>
        )}
        {step === 2 && (
          <div className="instructions-center">
            <h2>Navigate to Different Scenes</h2>
            <p>Click on the locations to dive into them.</p>
            <img src="click.png" alt="Navigate Icon" />
          </div>
        )}
        {/* Add more steps as needed */}

        {/* Render next button if there are more steps */}
        {step < 2 && (
          <button onClick={handleNextStep}>Next</button>
        )}

        {/* Render close button if all steps are completed */}
        {step === 2 && (
          <button onClick={handleClose}>Close</button>
        )}
      </div>
    </div>
  );
};

export default InstructionsOverlay;