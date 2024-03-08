import React from 'react';
import './FullScreenVideo.css';
import { useNavigate } from 'react-router-dom';

const FullScreenVideo = ({ onClose }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleVideoEnd = () => {
    onClose();

    navigate('/map');
    console.log(onClose);
  };

  return (
    <div className="fullscreen-video">
      <video
        ref={null}
        className="video"
        autoPlay
        onEnded={handleVideoEnd}
      >
        <source src="introvideo.mp4" type="video/mp4" />
        {/* Add more video sources as needed */}
      </video>
      <button className="exit-button" onClick={handleVideoEnd}>X</button>
    </div>
  );
};

export default FullScreenVideo;