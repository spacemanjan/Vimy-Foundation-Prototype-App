import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './DraggableContainer.css';

const DraggableContainer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // Set the draggable container's initial position
    setPosition({ x: 0, y: 0 });
}, []); // Run only once on component mount

  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [elementPositions, setElementPositions] = useState([
    { x: 1200, y: 1200, image: 'office_1.png'}, // Office position
    { x: 200, y: 500, image: 'home_2.png'},  // Home initial positions
    { x: 1500, y: 500, image: 'photo_studio.png'},  // photo studio initial positions
    { x: -200, y: -500, image: 'windsor.png'}, // windsor station initial positions
    { x: 1000, y: 100, image: 'grocery.png'}  // Grocery initial positions

  ]);

  const [dustPositions, setDustPositions] = useState([]);

  const [activeElementIndex, setActiveElementIndex] = useState(0);
  
  const containerRef = useRef(null);

// Navigating from element to scene
  const navigate = useNavigate();

  const handleNavigateToNewScene = () => {
    navigate("/new-scene");
  };

  // Function to generate random positions for dust particles
  const generateRandomPositions = () => {
    const positions = [];
    for (let i = 0; i < 1000; i++) { // Adjust the number of dust particles as needed
      positions.push({
        x: Math.random() * 2000, // Adjust the maximum x-coordinate as needed
        y: Math.random() * 2000 // Adjust the maximum y-coordinate as needed
      });
    }
    setDustPositions(positions);
  };

  useEffect(() => {
    generateRandomPositions();
  }, []); // Run only once on component mount

// OUT OF BOUNDS FEATURE FOR FUTURE IMPLEMENTATION
  
//   const minX = -2000;
//   const minY = -2000;
//   const maxX = 2000;
//   const maxY = 2000;

//   const checkOutOfBounds = (e) => {
//     let lockIn = false; // Initialize lockIn variable
//     if (position.x <= minX){
//       lockIn = true; // Assign true to lockIn variable
//     } else if (position.x >= maxX){
//       lockIn = true; // Assign true to lockIn variable
//     } else if (position.y <= minY){
//       lockIn = true; // Assign true to lockIn variable
//     } else if (position.y >= maxY){
//       lockIn = true; // Assign true to lockIn variable
//     }
//     return lockIn; // Return lockIn variable
//   }

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
  
    // const lockIn = checkOutOfBounds(); // Check if out of bounds
    
    // if (lockIn) {
    //     // Shift the window back by 300 pixels
    //     setPosition(prevPosition => ({
    //       x: Math.max(Math.min(prevPosition.x, maxX), minX) - 300, // Ensure the new position stays within bounds
    //       y: Math.max(Math.min(prevPosition.y, maxY), minY)
    //     }));
        
    //     // Update element positions accordingly
    //     const updatedElementPositions = elementPositions.map(pos => ({
    //       x: Math.max(Math.min(pos.x, maxX), minX) - 300, // Ensure the new position stays within bounds
    //       y: Math.max(Math.min(pos.y, maxY), minY)
    //     }));
    //     setElementPositions(updatedElementPositions);
        
    //     const lockIn = checkOutOfBounds(); // Re-check if out of bounds after shifting
    //   }
    
    //   if (lockIn) return; // Stop movement if still out of bounds
    
    const newPosition = {
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    };


    setPosition(newPosition);
    // Update element positions
    const updatedElementPositions = elementPositions.map(pos => ({
      x: pos.x + newPosition.x - position.x,
      y: pos.y + newPosition.y - position.y,
      image: pos.image
    }));
    setElementPositions(updatedElementPositions);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

const handleDotClick = (index,x,y) => {
   // Update the active element index
   setActiveElementIndex(index);
    // Calculate the new positions of the elements relative to the new container position
    const updatedElementPositions = elementPositions.map(pos => ({
        x: pos.x - position.x + x,
        y: pos.y - position.y + y,
        image: pos.image
    }));

    // Update the container's position and element positions
    setPosition({ x, y });
    setElementPositions(updatedElementPositions);
};

const getTextForIndex = (index) => {
    // Define your text values here based on the index
    const textValues = [
        'Office',
        'Home',
        'Photo Studio',
        'Windsor Station',
        'Grocery'
        // Add more text values as needed
    ];

    return textValues[index];
};

const getSubTextForIndex = (index) => {
    // Define your subtext values here based on the index
    const subTextValues = [
        'Enter the recruitment office',
        'Discover the home of a soldier returning from the front',
        // Add more subtext values as needed
    ];

    return subTextValues[index];
};

  return (
    <div
      className="draggable-container"
      ref={containerRef}
      style={{
        backgroundPosition: `${position.x}px ${position.y}px`
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
        
      {/* DEBUGGING POSITION INFORMATION */}
      {/* <div className="position-text">
        Dragged Image Position: {position.x}, {position.y}
      </div> */}
      <div className='group-dust'>
        {/* Render dust particles */}
        {dustPositions.map((pos, index) => (
          <div
            key={index}
            className="dust-particle"
            style={{
              left: pos.x - position.x * 0.2, // Adjust the speed of dust particles as needed
              top: pos.y - position.y * 0.2 // Adjust the speed of dust particles as needed
            }}
          />
        ))}
      </div>

      {/* Render draggable elements */}
      {elementPositions.map((pos, index) => (
        <div
          key={index}
          className="draggable-element"
          onClick={handleNavigateToNewScene}
          style={{ left: pos.x, top: pos.y }}
        >
          <img src={pos.image} alt={`Element ${index + 1}`} />
          <div className="hover-text">{getTextForIndex(index)}</div> {/* Access text dynamically */}
          <div className="sub-text">{getSubTextForIndex(index)}</div> {/* Access subtext dynamically */}
        </div>
      ))}

      {/* Row of dots */}
        <div className="dot-row">
            <div className={`dot ${0 === activeElementIndex ? 'active' : ''}`} onClick={() => handleDotClick(0, 139, -355)} />
            <div className='dash'></div>
            <div className={`dot ${1 === activeElementIndex ? 'active' : ''}`} onClick={() => handleDotClick(1, -828, -1037)} />
            <div className='dash'></div>
            <div className={`dot ${2 === activeElementIndex ? 'active' : ''}`} onClick={() => handleDotClick(2, -636, 60)} />
            <div className='dash'></div>
            <div className={`dot ${3 === activeElementIndex ? 'active' : ''}`} onClick={() => handleDotClick(3, 498, 645)} />
            <div className='dash'></div>
            <div className={`dot ${4 === activeElementIndex ? 'active' : ''}`} onClick={() => handleDotClick(4, -1150, -344)} />
            {/* Add more dots as needed */}
        </div>
    </div>
  );
};

export default DraggableContainer;




