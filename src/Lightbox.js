import React from 'react';
import './Lightbox.css'; // Import CSS for styling

const Lightbox = ({ isOpen, onClose, hotspotId }) => {
  if (!isOpen) return null;

  let content = null;

  // Content based on hotspotId
  if (hotspotId === 'camera') {
    content = (
      <div className="lightbox-content">
        <div className="image-container">
          <img src="portrait.png" alt="Camera" />
        </div>
        <div className="text-container">
          <h2>Camera Header</h2>
          <h3>Camera Subheading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  } else if (hotspotId === 'wardrobe') {
    content = (
      <div className="lightbox-content">
        <div className="image-container">
          <img src="path_to_wardrobe_image.jpg" alt="Wardrobe" />
        </div>
        <div className="text-container">
          <h2>Wardrobe Header</h2>
          <h3>Wardrobe Subheading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="close-button" onClick={onClose}>X</button>
        
        {/* Content based on hotspotId */}
        {content}
      </div>
    </div>
  );
};

export default Lightbox;