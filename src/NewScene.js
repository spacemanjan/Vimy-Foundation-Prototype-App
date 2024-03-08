import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Scene.css';
import Lightbox from './Lightbox'
import Loading from 'react-loading';

const LoadingScreen = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Loading type={'spin'} color={'blue'} height={'100px'} width={'100px'} /> 
    </div>
  );

const NewScene = () => {

    const navigate = useNavigate(); // Get the navigate function from React Router

    const handleBackButtonClick = () => {
        navigate('/map'); // Navigate back to the home page
    };

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState(null);

    const handleHotspotClick = (hotspotId) => {
        setActiveHotspot(hotspotId); // Set active hotspot
        setIsLightboxOpen(true); // Open the lightbox
    };
    
    const handleCloseLightbox = () => {
        setActiveHotspot(null);
        setIsLightboxOpen(false); // Close the lightbox when close button is clicked
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state
        const loadingTimeout = setTimeout(() => {
          setIsLoading(false); // Set isLoading to false after 2000ms to simulate loading completion
        }, 2000);
    
        return () => {
          clearTimeout(loadingTimeout);
        };
    }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen /> // Display loading screen if isLoading is true
      ) : (

    <div className="scene">

        {/* Back button */}
        <button className="back-button" onClick={handleBackButtonClick}>
            <img src="left-arrow.svg" alt="Back" />
        </button>

        {/* Background image */}
        <img src="PhotographyScene.png" alt='background'/>

        {/* Hotspots */}
        <div className="hotspot" style={{ left: '680px', top: '320px' }} onClick={() => handleHotspotClick('camera')}>
        Camera
        </div>

        <div className="hotspot" style={{ left: '120px', top: '250px' }} onClick={() => handleHotspotClick('wardrobe')}>
        Wardrobe
        </div>

        <div className="hotspot" style={{ right: '200px', top: '250px' }} onClick={() => handleHotspotClick('portraits')}>
        Portraits
        </div>

        {/* Lightbox (rendered conditionally) */}
        <Lightbox isOpen={isLightboxOpen} onClose={handleCloseLightbox} hotspotId={activeHotspot} />

    </div>

    )}
    </>
  );
};

export default NewScene;