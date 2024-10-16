import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutCouple from './components/AboutCouple';
import Gallery from './components/Gallery';
import EventTimeline from './components/EventTimeline';
import Wishes from './components/Wishes';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti for 3 seconds when the page loads
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showConfetti && <Confetti />}
      <Hero />
      <AboutCouple />
      <EventTimeline />
      <Wishes />
      <Gallery />
    </div>
  );
}

export default App;
