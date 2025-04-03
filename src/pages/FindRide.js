import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCar, FaUserFriends, FaCalendarAlt, FaClock, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

function FindRide() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: ''
  });

  const fetchRides = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to view available rides');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/rides/available', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch rides');
      }

      const data = await response.json();
      setRides(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching rides:', err);
      setError('Failed to load rides. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter rides based on search parameters
    const filteredRides = rides.filter(ride => {
      const matchesFrom = !searchParams.from || 
        ride.from.toLowerCase().includes(searchParams.from.toLowerCase());
      const matchesTo = !searchParams.to || 
        ride.to.toLowerCase().includes(searchParams.to.toLowerCase());
      const matchesDate = !searchParams.date || 
        new Date(ride.date).toISOString().split('T')[0] === searchParams.date;
      
      return matchesFrom && matchesTo && matchesDate;
    });
    setRides(filteredRides);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="page-container">
      <h1>Find a Ride</h1>
      
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <input
              type="text"
              name="from"
              placeholder="From"
              value={searchParams.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="to"
              placeholder="To"
              value={searchParams.to}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={searchParams.date}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {loading ? (
        <div className="loading">Loading available rides...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : rides.length === 0 ? (
        <div className="no-rides">No rides available matching your criteria</div>
      ) : (
        <div className="rides-list">
          {rides.map(ride => (
            <div key={ride._id} className="ride-card">
              <div className="ride-header">
                <h3>{ride.from} <FaArrowRight /> {ride.to}</h3>
                <span className="driver">Driver: {ride.driver.name}</span>
              </div>
              <div className="ride-details">
                <div className="detail">
                  <FaCalendarAlt />
                  <span>{new Date(ride.date).toLocaleDateString()}</span>
                </div>
                <div className="detail">
                  <FaClock />
                  <span>{ride.time}</span>
                </div>
                <div className="detail">
                  <FaUserFriends />
                  <span>{ride.availableSeats} seats available</span>
                </div>
                <div className="detail">
                  <FaMoneyBillWave />
                  <span>₹{ride.price}</span>
                </div>
                <div className="detail">
                  <FaCar />
                  <span>{ride.vehicle}</span>
                </div>
              </div>
              <button className="request-button">Request Ride</button>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default FindRide; 