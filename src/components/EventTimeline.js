import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './EventTimeline.css';

const EventTimeline = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('December 7, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    // GSAP Animation for countdown numbers
    gsap.fromTo(
      '.countdown-time',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' }
    );
  }, [timeLeft]);

  return (
    <div className="timeline">
      <h2 className="timeline-title">Event Schedule</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <span className="timeline-icon">🛕</span>
          <div>
            <h3>Vivah (Wedding Ceremony)</h3>
            <p>4:00 PM at Ganesh Gardens</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-icon">🍵</span>
          <div>
            <h3>Reception</h3>
            <p>6:00 PM at Banquet Hall</p>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="countdown-container">
        <h2 className="countdown-title">Countdown to Our Special Day</h2>
        <div className="countdown-timer">
          <div className="countdown-section">
            <div className="countdown-time">{timeLeft.days || '00'}</div>
            <span>Days</span>
          </div>
          <div className="countdown-section">
            <div className="countdown-time">{timeLeft.hours || '00'}</div>
            <span>Hours</span>
          </div>
          <div className="countdown-section">
            <div className="countdown-time">{timeLeft.minutes || '00'}</div>
            <span>Minutes</span>
          </div>
          <div className="countdown-section">
            <div className="countdown-time">{timeLeft.seconds || '00'}</div>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      <div className="presence">
        <h2>Your presence will make our day truly special</h2>
      </div>
    </div>
  );
};

export default EventTimeline;
