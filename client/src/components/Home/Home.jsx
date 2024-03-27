import React from 'react';
import './Home.css'; // Assuming you have a Home.css file for styling

export default function Post() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <h1>Arthub</h1>
      </div>

      <div className="feed-container">
        <h2 className="Feed">Your feed</h2>
        {/* Container for posts */}
        <div className="posts-container">
          {/* Add your post information here */}
        </div>
      </div>
    </div>
  );
}