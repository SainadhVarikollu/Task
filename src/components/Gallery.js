import React, { useState } from 'react';
import ReactPlayer from 'react-player'; // Import react-player
import './Gallery.css';

const Gallery = () => {
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const liveStreamUrl = 'https://your-live-stream-url.com'; // Replace with your actual live stream URL

  return (
    <div className="gallery">
      <h2 className="gallery-title">Memorable Moments</h2>
      
      {isLiveStreaming ? (
        <div className="live-stream">
          <h3 className="live-stream-message">Live Streaming is Happening Here!</h3>
          <ReactPlayer
            url={liveStreamUrl}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            onEnded={() => setIsLiveStreaming(false)} // Optional: handle when the stream ends
          />
        </div>
      ) : (
        <div className="gallery-grid">
          {/* Placeholder for images */}
          <p>No images to display at the moment. Please check back later!</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
