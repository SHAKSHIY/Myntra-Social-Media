import React, { useState, useEffect } from 'react';
import './Reel.css'; // Create corresponding CSS file for styling

const Reel = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // Mock fetching reel data
    const fetchReels = async () => {
      const data = [
        {
          id: 1,
          videoUrl: 'https://example.com/video1.mp4',
          productLink: 'https://example.com/product1',
        },
        {
          id: 2,
          videoUrl: 'https://example.com/video2.mp4',
          productLink: 'https://example.com/product2',
        },
        // Add more reels as needed
      ];
      setReels(data);
    };

    fetchReels();
  }, []);

  return (
    <div className="reel-container">
      <h2>Reels</h2>
      {reels.map((reel) => (
        <div key={reel.id} className="reel">
          <video className="reel-video" controls>
            <source src={reel.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href={reel.productLink} className="shop-button">
            Shop Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Reel;