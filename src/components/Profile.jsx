import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profile/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    profile ? (
      <div>
        <h1>{profile.username}</h1>
        <p>{profile.bio}</p>
        <h2>Posts</h2>
        <ul>
          {profile.posts.map(post => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
        <h2>Followers</h2>
        <ul>
          {profile.followers.map(follower => (
            <li key={follower.id}>{follower.username}</li>
          ))}
        </ul>
        <h2>Following</h2>
        <ul>
          {profile.following.map(following => (
            <li key={following.id}>{following.username}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default Profile;