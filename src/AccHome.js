import React, { useEffect, useState } from 'react';
import './basicStyle.css';
import { useLocation, useNavigate } from 'react-router-dom';

const AccHome = () => {
    const [isMounted, setIsMounted] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the navigate function
    
    useEffect(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, []);
  
    useEffect(() => {
        if (isMounted) {
          document.body.className = location.pathname === '/accHome' ? 'acc-home-body' : ''; // Apply the class based on the current path
        }
      }, [isMounted, location.pathname]);

    const handleCloseButtonClick = () => {
    // Navigate to the '/container' route when the X button is clicked
    navigate('/photoStudioRead');
    };

  return (
     <main>
        <div className="banner">
            <div className="banner-content">
                <h2>LIVED: The Homefront</h2>
                <p>A remeberance of the effects of WW1 on Canada's social fabric</p>
            </div>
        </div>
    <section className="intro">
        <p>This is some introductory text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
        <div className="arrow-down"></div>
    </section>

    <section className="experience-section" onClick={handleCloseButtonClick}>
        <div className="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div className="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section className="experience-section">
        <div className="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div className="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section className="experience-section">
        <div className="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div className="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section className="experience-section">
        <div className="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div className="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>
    
    </main>
  );
};

export default AccHome;