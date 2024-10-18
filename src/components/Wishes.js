import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import './Wishes.css';

const Wishes = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState([]);
  const [showWishes, setShowWishes] = useState([]);
  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Load wishes from localStorage when component mounts
    const savedWishes = JSON.parse(localStorage.getItem('wishes')) || [];
    setWishes(savedWishes);
    setShowWishes(savedWishes);
  }, []);

  useEffect(() => {
    if (showWishes.length > 0) {
      // Automatically cycle through wishes every 3 seconds
      const interval = setInterval(() => {
        setCurrentWishIndex((prevIndex) =>
          prevIndex === showWishes.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change to 3000ms for 3 seconds
      return () => clearInterval(interval);
    }
  }, [showWishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newWish = { name, message };
      const updatedWishes = [...wishes, newWish];
      setWishes(updatedWishes);
      setShowWishes(updatedWishes);

      // Save wishes to localStorage
      localStorage.setItem('wishes', JSON.stringify(updatedWishes));

      setName('');
      setMessage('');

      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false); // Confetti lasts for 3 seconds
      }, 3000);
    }
  };

  return (
    <div className="wishes-container">
      <h2 className="wishes-title">Spread Your Blessings and Heartfelt Wishes for Ravi & Sneha!</h2>

      {showConfetti && <Confetti />}

      <form className="wish-form" onSubmit={handleSubmit}>
        <motion.input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="wish-input"
          required
          initial={{ scale: 0.9 }}
          animate={{ scale: 1, transition: { type: 'spring', stiffness: 500 } }}
          whileFocus={{ boxShadow: '0 0 15px 5px #b02e0c', scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="wish-textarea"
          required
          initial={{ scale: 0.9 }}
          animate={{ scale: 1, transition: { type: 'spring', stiffness: 500 } }}
          whileFocus={{ boxShadow: '0 0 15px 5px #b02e0c', scale: 1.05 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="wish-submit"
        >
          Submit Wish
        </motion.button>
      </form>

      <div className="wishes-list">
        <AnimatePresence>
          {showWishes.length > 0 && (
            <motion.div
              key={currentWishIndex}
              className="wish-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <p>
                <strong>{showWishes[currentWishIndex].name}:</strong> {showWishes[currentWishIndex].message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Wishes;
