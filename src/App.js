import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from 'react-loading';
import DraggableContainer from './DraggableContainer';
import NewScene from './NewScene';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
                <Routes>
                  <Route path="/" element={<DraggableContainer />} />
                  <Route path="/new-scene" element={<NewScene />} />
                </Routes>
              </div>
           )}
    </>
    </Router>
  );
}

export default App;