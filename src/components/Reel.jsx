import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa'; 
import './Reel.css'; 
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
          title: 'Summer Fashion Trends',
          likes: 1200,
          comments: 325,
          priceMoney: '$500',
        },
        {
          id: 2,
          videoUrl: 'https://example.com/video2.mp4',
          productLink: 'https://example.com/product2',
          title: 'Streetwear Vibes',
          likes: 980,
          comments: 210,
          priceMoney: '$300',
        },
        {
          id: 3,
          videoUrl: 'https://example.com/video3.mp4',
          productLink: 'https://example.com/product3',
          title: 'Autumn Collection',
          likes: 850,
          comments: 190,
          priceMoney: '$400',
        },
        {
          id: 4,
          videoUrl: 'https://example.com/video4.mp4',
          productLink: 'https://example.com/product4',
          title: 'Winter Wonderland',
          likes: 1050,
          comments: 250,
          priceMoney: '$600',
        },
      ];
      setReels(data);
    };

    fetchReels();
  }, []);

  return (
    <div className="reel-container">
      <h2 className="section-title">Explore Fashion Reels</h2>
      <div className="scrollable-container">
        <h3 className='k'>Welcome to Myntra TreadSpot's Reels Section</h3>
        
        <div className="reels-list">
          {reels.map((reel) => (
            <div key={reel.id} className="reel">
              <div className="reel-video-container">
                <video className="reel-video" controls>
                  <source src={reel.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="reel-details">
                <h3 className="reel-title">{reel.title}</h3>
                <div className="reel-stats">
                  <span className="stat-item"><FaHeart /> {reel.likes}</span>
                  <span className="stat-item"><FaComment /> {reel.comments}</span>
                  <span className="stat-item">Price: {reel.priceMoney}</span>
                </div>
                <a href={reel.productLink} className="shop-button">
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reel;
