import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCar, FaUserFriends, FaUser, FaRegBell, FaSearch } from 'react-icons/fa';

const MyRides = () => {
  const [activeTab, setActiveTab] = React.useState('offered');
  const [rides, setRides] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchRides = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/rides/my-rides', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch rides');
        }
        
        const data = await response.json();
        console.log('Fetched rides:', data);
        setRides(data);
      } catch (err) {
        console.error('Error fetching rides:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <nav className="sidebar-nav">
            <NavLink to="/dashboard" end className="nav-item">
              <FaSearch /> Overview
            </NavLink>
            <NavLink to="/dashboard/my-rides" className="nav-item">
              <FaCar /> My Rides
            </NavLink>
            <NavLink to="/dashboard/requests" className="nav-item">
              <FaUserFriends /> Requests
            </NavLink>
            <NavLink to="/dashboard/profile" className="nav-item">
              <FaUser /> Profile
            </NavLink>
            <NavLink to="/dashboard/notifications" className="nav-item">
              <FaRegBell /> Notifications
            </NavLink>
          </nav>
        </aside>
        <main className="dashboard-main">
          <div className="loading-message">Loading your rides...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <nav className="sidebar-nav">
            <NavLink to="/dashboard" end className="nav-item">
              <FaSearch /> Overview
            </NavLink>
            <NavLink to="/dashboard/my-rides" className="nav-item">
              <FaCar /> My Rides
            </NavLink>
            <NavLink to="/dashboard/requests" className="nav-item">
              <FaUserFriends /> Requests
            </NavLink>
            <NavLink to="/dashboard/profile" className="nav-item">
              <FaUser /> Profile
            </NavLink>
            <NavLink to="/dashboard/notifications" className="nav-item">
              <FaRegBell /> Notifications
            </NavLink>
          </nav>
        </aside>
        <main className="dashboard-main">
          <div className="error-message">{error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" end className="nav-item">
            <FaSearch /> Overview
          </NavLink>
          <NavLink to="/dashboard/my-rides" className="nav-item">
            <FaCar /> My Rides
          </NavLink>
          <NavLink to="/dashboard/requests" className="nav-item">
            <FaUserFriends /> Requests
          </NavLink>
          <NavLink to="/dashboard/profile" className="nav-item">
            <FaUser /> Profile
          </NavLink>
          <NavLink to="/dashboard/notifications" className="nav-item">
            <FaRegBell /> Notifications
          </NavLink>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <h1>My Rides</h1>
          </div>
          <div className="header-right">
            <Link to="/offer-ride" className="offer-ride-btn">
              + Offer a Ride
            </Link>
          </div>
        </div>

        <div className="rides-tabs">
          <button 
            className={`tab-button ${activeTab === 'offered' ? 'active' : ''}`}
            onClick={() => setActiveTab('offered')}
          >
            Rides Offered
          </button>
          <button 
            className={`tab-button ${activeTab === 'booked' ? 'active' : ''}`}
            onClick={() => setActiveTab('booked')}
          >
            Rides Booked
          </button>
        </div>

        {activeTab === 'offered' && (
          <div className="rides-section">
            <h2>Rides You've Offered</h2>
            <p className="section-subtitle">Manage the rides you're offering to others</p>
            
            {rides.length === 0 ? (
              <div className="no-rides">
                <p>You haven't offered any rides yet.</p>
                <Link to="/offer-ride" className="offer-ride-link">
                  Offer a Ride
                </Link>
              </div>
            ) : (
              <div className="rides-list">
                {rides.map(ride => (
                  <div key={ride._id} className="ride-item">
                    <div className="ride-info">
                      <h3>{ride.origin} to {ride.destination}</h3>
                      <p className="ride-date">{new Date(ride.date).toLocaleDateString()} - {ride.time}</p>
                      <p className="ride-details">
                        Available Seats: {ride.availableSeats} | Price: ₹{ride.price}
                      </p>
                      <p className="ride-vehicle">Vehicle: {ride.vehicle}</p>
                    </div>
                    <div className="ride-status">
                      <span className={`status-badge ${ride.status}`}>{ride.status}</span>
                      <div className="action-buttons">
                        <button className="edit-btn">Edit</button>
                        <button className="cancel-btn">Cancel</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'booked' && (
          <div className="rides-section">
            <h2>Rides You've Booked</h2>
            <p className="section-subtitle">View and manage your booked rides</p>
            
            <div className="no-rides">
              <p>You haven't booked any rides yet.</p>
              <Link to="/find-ride" className="find-ride-link">
                Find a Ride
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyRides; 