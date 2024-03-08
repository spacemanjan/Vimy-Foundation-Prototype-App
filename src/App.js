import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from 'react-loading';
import DraggableContainer from './DraggableContainer';
import NewScene from './NewScene';
import SideMenu from './SideMenu';
import NavigationBar from './NavigationBar';
import AccHome from './AccHome';
import AccScene1 from './AccScene1';
import TitleScreen from './TitleScreen';
import FullScreenVideo from './FullScreenVideo';
import InstructionsOverlay from './InstructionsOverlay';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  
  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions); 
  };

  const handleEnterClick = () => {
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };


  return (
    <Router>
      <>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loading type={'spin'} color={'blue'} height={'100px'} width={'100px'} /> 
          </div>
        ) : (
          <div className="App">
            <NavigationBar toggleSideMenu={toggleSideMenu} toggleInstructions={toggleInstructions} />
              {isSideMenuOpen && <SideMenu isOpen={isSideMenuOpen} toggleMenu={toggleSideMenu}/>}
            <Routes>
              <Route path="/" element={<TitleScreen onEnter={handleEnterClick} />} />
              {showVideo && <Route path="/video" element={<FullScreenVideo onVideoEnd={handleVideoEnd} />} />}
              <Route path="/map" element={<DraggableContainer />} />
              <Route path="/new-scene" element={<NewScene />} />
              <Route path="/accHome" element={<AccHome/>} />
              <Route path='/photoStudioRead' element={<AccScene1/>} />
            </Routes>
            {showInstructions && <InstructionsOverlay onClose={toggleInstructions} />}
          </div>
        )}
      </>
    </Router>
  );
}

export default App;