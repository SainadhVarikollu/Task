import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Removed FaChurch and FaGlassCheers imports
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
  });

  return (
    <div className="timeline">
      <h2 className="timeline-title">Event Schedule</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <span className="timeline-icon">🛕</span> {/* Hindu Temple Icon */}
          <div>
            <h3>Vivah (Wedding Ceremony)</h3>
            <p>4:00 PM at Ganesh Gardens</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-icon">🍵</span> {/* Kalash or Reception Symbol */}
          <div>
            <h3>Reception</h3>
            <p>6:00 PM at Banquet Hall</p>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <motion.div
        className="countdown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h2 className="countdown-title">Countdown to Our Special Day</h2>
        <div className="countdown-timer">
          <div className="countdown-section">
            <motion.div
              className="countdown-time"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              {timeLeft.days || '0'}
            </motion.div>
            <span>Days</span>
          </div>
          <div className="countdown-section">
            <motion.div
              className="countdown-time"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              {timeLeft.hours || '0'}
            </motion.div>
            <span>Hours</span>
          </div>
          <div className="countdown-section">
            <motion.div
              className="countdown-time"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              {timeLeft.minutes || '0'}
            </motion.div>
            <span>Minutes</span>
          </div>
          <div className="countdown-section">
            <motion.div
              className="countdown-time"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              {timeLeft.seconds || '0'}
            </motion.div>
            <span>Seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventTimeline;
