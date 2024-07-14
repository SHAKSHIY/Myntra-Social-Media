import React, { useState, useEffect } from 'react';
import './FashionChallenge.css';

const FashionChallenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [submissions, setSubmissions] = useState({});
  const [loadingChallenges, setLoadingChallenges] = useState(true);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [featuredSubmissions, setFeaturedSubmissions] = useState([]);

  useEffect(() => {
    const mockChallenges = [
      { id: 1, title: "Best Outfit", description: "Display your best outfit.", imageUrl: 'Images/outfit.jpg' },
      { id: 2, title: "Street Style Challenge", description: "Showcase your best streetwear looks.", imageUrl: 'Images/street.jpg' },
      { id: 3, title: "Festival Fashion", description: "Submit your looks for various festivals.", imageUrl: 'Images/festive.jpg' },
      { id: 4, title: "Workwear Wonders", description: "Share your best professional and office-appropriate outfits.", imageUrl: 'Images/work.webp' },
      { id: 5, title: "Date Night Delight", description: "Share your favorite date night outfits.", imageUrl: 'Images/date2.jpg' },
    ];

    setChallenges(mockChallenges);
    setLoadingChallenges(false);
  }, []);

  useEffect(() => {
    const mockFeaturedSubmissions = [
      { id: 1, imageUrl: 'Images/feature1.jpg' },
      { id: 2, imageUrl: 'Images/feature2.jpg' },
      { id: 3, imageUrl: 'Images/feature3.jpg' },
    ];

    setFeaturedSubmissions(mockFeaturedSubmissions);
  }, []);

  const handleSubmission = async (event, challengeId) => {
    event.preventDefault();
    setLoadingSubmissions(true);
    setError(null);
    setSuccessMessage(null);
    const formData = new FormData(event.target);
    formData.append('challengeId', challengeId);

    // Mock submission handling
    setTimeout(() => {
      const newSubmission = { imageUrl: 'https://via.placeholder.com/150' };
      setSubmissions({
        ...submissions,
        [challengeId]: [...(submissions[challengeId] || []), newSubmission],
      });
      setSuccessMessage('Submission successful!');
      event.target.reset();
      setLoadingSubmissions(false);
    }, 1000);
  };

  return (
    <div className="fashion-challenge-section">
      <h2 className='header'>Fashion Challenges</h2>
      {loadingChallenges ? (
        <p>Loading challenges...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="challenges-list">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge">
              <img src={challenge.imageUrl} alt={challenge.title} className="challenge-image" />
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <form onSubmit={(event) => handleSubmission(event, challenge.id)} className="submission-form">
                <input type="file" name="submission" required />
                <button type="submit" disabled={loadingSubmissions}>
                  {loadingSubmissions ? 'Submitting...' : 'Submit'}
                </button>
                {successMessage && <p className="success">{successMessage}</p>}
                {error && <p className="error">{error}</p>}
              </form>
              <div className="submissions-list">
                {(submissions[challenge.id] || []).map((submission, subIndex) => (
                  <div key={subIndex} className="submission">
                    <img src={submission.imageUrl} alt="submission" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="featured-submissions">
        <h3 className='header1'>Featured Submissions</h3>
        {featuredSubmissions.length > 0 ? (
          featuredSubmissions.map((submission, index) => (
            <div key={index} className="submission">
              <img src={submission.imageUrl} alt="Featured submission" />
            </div>
          ))
        ) : (
          <p>Failed to load featured submissions</p>
        )}
      </div>
    </div>
  );
};

export default FashionChallenge;
