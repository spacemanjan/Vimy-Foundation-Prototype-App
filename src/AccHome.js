import React, { useEffect, useState } from 'react';
import './basicStyle.css';

const AccHome = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'auto !important'; // Enable scrolling when component is mounted
    } else {
      document.body.style.overflow = 'hidden'; // Disable scrolling when component is unmounted
    }
  }, [isMounted]);

  return (
    <body class='scrollable'>
     <main>
        <div class="banner">
            <div class="banner-content">
                <h2>LIVED: The Homefront</h2>
                <p>A remeberance of the effects of WW1 on Canada's social fabric</p>
            </div>
        </div>
    <section class="intro">
        <p>This is some introductory text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
        <div class="arrow-down"></div>
    </section>

    <section class="experience-section" onclick="redirectToExperience()">
        <div class="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div class="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section class="experience-section">
        <div class="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div class="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section class="experience-section">
        <div class="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div class="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>

    <section class="experience-section">
        <div class="experience-content">
            <img src="https://www.warmuseum.ca/firstworldwar/wp-content/mcme-uploads/2014/07/eo-1467b.jpg" alt="Experience Image"></img>
            <div class="overlay">
                <p>Go to experience</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </div>
    </section>
    
    </main>
    </body>
  );
};

export default AccHome;