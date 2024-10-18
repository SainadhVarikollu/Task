import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Picture1 from './Picture1.PNG';
import Picture2 from './Picture2.jpg';
import Picture3 from './Picture3.JPG';
import Picture4 from './Picture4.jpg';
import './AboutCouple.css';

const AboutCouple = () => {
  return (
    <Parallax
      bgImage="Flower\ Banner.jpg" /* Romantic background image */
      strength={500}
      blur={{ min: -5, max: 10 }} /* Subtle blur for dreamy effect */
    >
      <div className="about-couple">
        {/* Title Animation */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="about-title">Our Story</h2>
        </motion.div>

        {/* Story Animation */}
        <div className="story-container">
          {/* Childhood */}
          <motion.div
            className="story-section"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }} /* Bouncy ease for playful effect */
          >
            <motion.img
              src={Picture1} /* Replace with childhood image */
              alt="Childhood"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="story-image"
            />
            <p className="story-text">
              It all started as childhood friends, running through school hallways, sharing dreams, and imagining a life full of possibilities.
            </p>
            <motion.div
              className="emoji-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <motion.div
                className="emoji-animation"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                  backgroundColor: ['#ffdf00', '#ff9a00', '#ffcc00', '#ffdf00'], // Color pulsing
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                🏃‍♂️🏃‍♀️
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Teenage */}
          <motion.div
            className="story-section"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }} /* Smooth circular ease */
          >
            <motion.img
              src={Picture2} /* Replace with teenage image */
              alt="Teenage"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="story-image"
            />
            <p className="story-text">
              As teenagers, our bond grew stronger, from heartfelt conversations to supporting each other's wildest dreams.
            </p>
            <motion.div
              className="emoji-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <motion.div
                className="emoji-animation"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 10, 0],
                  backgroundColor: ['#ff99cc', '#ff6699', '#ff99cc'], // Heart-related colors
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                💬❤️
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Adulthood */}
          <motion.div
            className="story-section"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "anticipate", delay: 0.4 }} /* Anticipation ease for depth */
          >
            <motion.img
              src={Picture3} /* Replace with adulthood image */
              alt="Adulthood"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 130 }}
              className="story-image"
            />
            <p className="story-text">
              Adulthood brought new adventures and challenges, but through it all, we remained each other's greatest source of strength.
            </p>
            <motion.div
              className="emoji-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <motion.div
                className="emoji-animation"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                  backgroundColor: ['#ccffcc', '#66ff66', '#99ff99'], // Earth/strength colors
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                💪🌍
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Marriage */}
          <motion.div
            className="story-section"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }} /* Smooth, longer transition */
          >
            <motion.img
              src={Picture4} /* Replace with wedding image */
              alt="Wedding"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 140 }}
              className="story-image"
            />
            <p className="story-text">
              Now, we are ready to turn our beautiful journey into a lifetime of togetherness as we prepare to write the next chapter-"MARRIAGE".
            </p>
            <motion.div
              className="emoji-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <motion.div
                className="emoji-animation"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 10, 0],
                  backgroundColor: ['#ffcccc', '#ff6666', '#ff9999'], // Romantic marriage colors
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                💍💑
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutCouple;
