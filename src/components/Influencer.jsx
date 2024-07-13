import React, { useState, useEffect } from 'react';

const Influencer = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    // Fetch influencer data from an API or database
    const fetchInfluencers = async () => {
      const response = await fetch('/api/influencers');
      const data = await response.json();
      setInfluencers(data);
    };
    fetchInfluencers();
  }, []);

  return (
    <div className="influencer-section">
      <h2>Influencer Collaborations</h2>
      {influencers.map((influencer, index) => (
        <div key={index} className="influencer">
          <img src={influencer.imageUrl} alt={influencer.name} />
          <h3>{influencer.name}</h3>
          <p>{influencer.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Influencer;
