import React from 'react';
import { motion } from 'framer-motion';
import Ravi from './Ravi.jpg';
import Sneha from './Sneha.jpg';

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animate "Ravi" with image on the left */}
        <div className="hero-name-with-image">
          <motion.img
            src={Ravi} // Replace with Ravi's photo URL
            alt="Ravi"
            className="hero-image"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }} // Delayed start
          >
            Ravi
          </motion.h1>
        </div>

        {/* Animate "Weds" inside love heart */}
        <motion.div
          className="heart-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg
            className="heart-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="800px"
            height="300px"
          >
            <path
              d="M50 90C50 90 20 68 10 50C0 32 10 24 20 24C30 24 50 36 50 36C50 36 70 24 80 24C90 24 100 32 90 50C80 68 50 90 50 90Z"
              fill="none"
              stroke="red"
              strokeWidth="4"
            />
          </svg>
          <motion.h1
            className="hero-title heart-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            style={{ fontSize: '2.5rem' }}
          >
            weds
          </motion.h1>
        </motion.div>

        {/* Animate "Sneha" with image on the right */}
        <div className="hero-name-with-image">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Sneha
          </motion.h1>
          <motion.img
            src={Sneha}// Replace with Sneha's photo URL
            alt="Sneha"
            className="hero-image"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>

        <p className="hero-date">December 07, 2024
        Khammam
        </p>
      
        {/* Button Animation */}
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" }}
          whileTap={{ scale: 0.9 }}
        >
          Save the Date
        </motion.button>
      </motion.div>

      {/* Placeholder for any other animations */}
      <motion.div
        className="confetti-animated"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {/* Place for further animations */}
      </motion.div>
    </div>
  );
};

export default Hero;
