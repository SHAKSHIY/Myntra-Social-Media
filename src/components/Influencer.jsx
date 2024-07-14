import React, { useState, useEffect } from 'react';
import './Influencer.css';

const Influencer = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    // Mock fetching influencer data
    const fetchInfluencers = async () => {
      const data = [
        {
          id: 1,
          name: 'Maya',
          imageUrl: 'Images/maya2.jpg',
          bio: 'Maya is a virtual Fashion Influencer of Myntra. Mayas incorporation into the Studio section of the Myntra app marks a significant enhancement for the new Myntra TrendSpot initiative. Maya, a dynamic and influential figure in the fashion community, brings a wealth of expertise and innovation to the platform. Her expected key contributions: Fashion Authority, Live Interactions, Content Diversity, Platform Integration. Her insights and live interactions are poised to captivate and inspire users, setting new standards for fashion engagement on the platform.',
          socialLink: 'https://www.instagram.com/p/Cq6EKA1IZ16/'
        },
        {
          id: 2,
          name: 'Divyanshi Tripathi',
          imageUrl: 'Images/divyanshi.jpg',
          bio: 'Meet Divyanshi Tripathi, a prominent fashion designer and influencer. Known for her love of edgy, unique designs and a penchant for pushing boundaries, Divyanshi brings a refreshing perspective to Myntra TrendSpot. Her innovative approach to fashion inspires and resonates with those seeking bold, trend-setting styles. Stay tuned for Divyanshis curated insights and exclusive content, designed to elevate your fashion journey on Myntra.',
          socialLink: 'https://example.com/follow2'
        },
        {
          id: 3,
          name: 'Sidhi Doshi',
          imageUrl: 'Images/sidhi.jpg',
          bio: 'Introducing Sidhi Doshi, a distinguished Myntra influencer celebrated for her exquisite taste and passion for fashion. With a keen eye for detail and a knack for blending contemporary trends with timeless elegance, Sidhi brings a unique flair to Myntra TrendSpot. Discover Sidhis exclusive insights and fashion picks, tailored to redefine your fashion journey on Myntra. Explore Sidhis curated collections and personalized style tips, designed to empower your wardrobe with creativity and confidence.',
          socialLink: 'https://example.com/follow2'
        },
        {
          id: 4,
          name: 'Arti Chauhan',
          imageUrl: 'Images/arti.jpg',
          bio: 'Meet Divyanshi Tripathi, a prominent fashion designer and influencer. Known for her love of edgy, unique designs and a penchant for pushing boundaries, Divyanshi brings a refreshing perspective to Myntra TrendSpot. Her innovative approach to fashion inspires and resonates with those seeking bold, trend-setting styles. Stay tuned for Divyanshis curated insights and exclusive content, designed to elevate your fashion journey on Myntra.',
          socialLink: 'https://example.com/follow2'
        },
        // Add more influencers as needed
      ];
      setInfluencers(data);
    };

    fetchInfluencers();
  }, []);

  return (
    <div className="influencer-section">
      <h2>Influencer Collaborations</h2>
      <p className="influencer-tagline">Know our influencers and follow up their styles</p>
      <div className="influencer-grid">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="influencer-card">
            <img src={influencer.imageUrl} alt={influencer.name} className="influencer-image" />
            <h3>{influencer.name}</h3>
            <p>{influencer.bio}</p>
            <a href={influencer.socialLink} className="follow-button" target="_blank" rel="noopener noreferrer">
              Follow
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Influencer;
