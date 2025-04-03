import React from "react";
import { Link } from "react-router-dom";

function FindRide() {
  return (
    <div className="page-container">
      <h1>Find a Ride</h1>
      <div className="search-section">
        <p>Search for available rides and connect with fellow travelers</p>
        {/* We'll add the search functionality later */}
      </div>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default FindRide; 