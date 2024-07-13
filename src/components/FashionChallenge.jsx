import React, { useState, useEffect } from 'react';

const FashionChallenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch challenges data from an API or database
    const fetchChallenges = async () => {
      const response = await fetch('/api/challenges');
      const data = await response.json();
      setChallenges(data);
    };
    fetchChallenges();
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle submission to the server
    fetch('/api/submit', {
      method: 'POST',
      body: formData,
    }).then(response => response.json())
      .then(data => setSubmissions([...submissions, data]));
  };

  return (
    <div className="fashion-challenge-section">
      <h2>Fashion Challenges</h2>
      {challenges.map((challenge, index) => (
        <div key={index} className="challenge">
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
        </div>
      ))}
      <form onSubmit={handleSubmission}>
        <input type="file" name="submission" required />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {submissions.map((submission, index) => (
        <div key={index} className="submission">
          <img src={submission.imageUrl} alt="submission" />
        </div>
      ))}
    </div>
  );
};

export default FashionChallenge;