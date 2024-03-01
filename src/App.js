import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from 'react-loading';
import DraggableContainer from './DraggableContainer';
import NewScene from './NewScene';
import SideMenu from './SideMenu';
import NavigationBar from './NavigationBar';
import AccHome from './AccHome';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [isOverflowVisible, setIsOverflowVisible] = useState(true);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOverflowVisible ? 'auto' : 'hidden';
  }, [isOverflowVisible]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOverflowVisible(false); // Set overflow to hidden after the delay
    }, 2000);
    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  return (
    <Router>
    <>
      {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Loading type={'spin'} color={'blue'} height={'100px'} width={'100px'} /> 
            </div>
          ) : (
              <div className="App">
                <NavigationBar toggleSideMenu={toggleSideMenu} />
                  {isSideMenuOpen && <SideMenu isOpen={isSideMenuOpen} toggleMenu={toggleSideMenu} />}
                <Routes>
                  <Route path="/" element={<DraggableContainer />} />
                  <Route path="/new-scene" element={<NewScene />} />
                  <Route path="/accHome" element={<AccHome />} isOverflowVisible={isOverflowVisible} />
                </Routes>
              </div>
           )}
    </>
    </Router>
  );
}

export default App;