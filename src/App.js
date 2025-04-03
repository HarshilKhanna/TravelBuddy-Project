import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCar, FaBell, FaUser, FaMapMarkerAlt, FaSearch, FaUserFriends, FaCog, FaRegBell, FaEnvelope, FaPhone } from "react-icons/fa";
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import MyRides from './components/MyRides';

// Add ProtectedRoute component at the top
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) return null;
  return children;
};

// Placeholder components
const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token') !== null;

  const handleRideClick = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1>Find Your Travel Companion</h1>
          <p>Connect with fellow VIT Vellore students for shared rides to airports, cities, and more. Save money, make friends, and travel sustainably.</p>
          <div className="cta-buttons">
            <button onClick={() => handleRideClick('/find-ride')} className="primary-button">Find a Ride</button>
            <button onClick={() => handleRideClick('/offer-ride')} className="secondary-button">Offer a Ride</button>
          </div>
        </div>

        <div className="popular-destinations">
          <h2>Popular Destinations</h2>
          <p className="subtitle">Most frequent travel routes from VIT Vellore</p>
          <div className="destinations-list">
            <div className="destination-card">
              <div className="destination-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="destination-info">
                <h3>Chennai Airport</h3>
                <p>3 hours drive</p>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="destination-info">
                <h3>Bangalore City</h3>
                <p>4 hours drive</p>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="destination-info">
                <h3>Chennai City</h3>
                <p>2.5 hours drive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <p className="subtitle">Connect with fellow students for shared rides in just a few simple steps</p>
        
        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon">
              <FaSearch />
            </div>
            <h3>Find a Ride</h3>
            <p>Search for available rides based on your destination and travel date</p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaUserFriends />
            </div>
            <h3>Connect</h3>
            <p>Request to join a ride and connect with the driver through our secure platform</p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaCar />
            </div>
            <h3>Travel Together</h3>
            <p>Share the journey, split the costs, and make new friends along the way</p>
          </div>
        </div>
      </div>
    </>
  );
};

const FindRide = () => (
  <div className="find-ride-page">
    <div className="find-ride-container">
      <div className="find-ride-content">
        <h1>Find Your Perfect Ride</h1>
        <p className="subtitle">Search for rides to your destination or offer a ride to others.</p>

        <div className="search-form-card">
          <h2>Search for Rides</h2>
          
          <div className="search-form">
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <input 
                  type="text" 
                  placeholder="Enter departure city"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>To</label>
                <input 
                  type="text" 
                  placeholder="Enter destination city"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="text" 
                  placeholder="dd-mm-yyyy"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Seats</label>
                <input 
                  type="number" 
                  placeholder="Number of seats"
                  className="form-input"
                  min="1"
                />
              </div>
            </div>

            <button className="search-button">
              <FaSearch />
              Search Rides
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="available-rides-section">
      <div className="section-content">
        <h2>Available Rides</h2>
        <p className="subtitle">Browse through available rides that match your criteria.</p>

        <div className="rides-grid">
          <div className="ride-card">
            <div className="ride-header">
              <h3>VIT to Chennai Airport</h3>
              <span className="status-badge">Available</span>
            </div>
            <div className="ride-details">
              <div className="detail-item">
                <span>Departure:</span>
                <span>May 15, 2025</span>
              </div>
              <div className="detail-item">
                <span>Available Seats:</span>
                <span>3</span>
              </div>
              <div className="detail-item">
                <span>Price:</span>
                <span>Rs.390 per seat</span>
              </div>
            </div>
            <button className="view-details-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Add SuccessPopup component
function SuccessPopup({ message, onClose }) {
  return (
    <div className="success-popup-overlay">
      <div className="success-popup">
        <div className="success-icon">✓</div>
        <h3>Success!</h3>
        <p>{message}</p>
        <button onClick={onClose} className="success-button">OK</button>
      </div>
    </div>
  );
}

// Update OfferRide component
function OfferRide() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '',
    price: '',
    vehicle: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.from || !formData.to || !formData.date || !formData.time || !formData.seats || !formData.price || !formData.vehicle) {
      setError('All fields are required');
      return false;
    }
    if (parseInt(formData.seats) < 1 || parseInt(formData.seats) > 6) {
      setError('Number of seats must be between 1 and 6');
      return false;
    }
    if (parseFloat(formData.price) < 0) {
      setError('Price cannot be negative');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please login to offer a ride');
      }

      // Format the date and time
      const formattedDate = new Date(formData.date).toISOString().split('T')[0];
      const formattedTime = formData.time + ':00';

      const requestBody = {
        from: formData.from,
        to: formData.to,
        date: formattedDate,
        time: formattedTime,
        availableSeats: parseInt(formData.seats),
        price: parseFloat(formData.price),
        vehicle: formData.vehicle
      };

      const response = await fetch('http://localhost:5000/api/rides/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create ride');
      }

      const data = await response.json();
      console.log('Ride created successfully:', data);

      // Show success popup
      setShowSuccess(true);

      // Dispatch event to update dashboard
      window.dispatchEvent(new Event('rideCreated'));

    } catch (err) {
      console.error('Error creating ride:', err);
      setError(err.message || 'An error occurred while creating the ride');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="offer-ride-container">
      <h1 className="offer-ride-title">Offer a Ride</h1>
      <p className="offer-ride-subtitle">Share your journey with others</p>
      
      <div className="ride-details-card">
        <h2 className="ride-details-title">Ride Details</h2>
        <p className="ride-details-subtitle">Fill in the details of your ride</p>

        {error && <div className="error-message">{error}</div>}
        
        <form className="ride-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                placeholder="Enter departure city"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                placeholder="Enter destination city"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="seats">Available Seats</label>
              <input
                type="number"
                id="seats"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                min="1"
                max="6"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price per Seat (₹)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="vehicle">Vehicle Model</label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              placeholder="Enter your vehicle model"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={loading}
          >
            {loading ? 'Creating Ride...' : 'Create Ride'}
          </button>
        </form>
      </div>

      {showSuccess && (
        <SuccessPopup 
          message="Ride successfully created!" 
          onClose={() => {
            setShowSuccess(false);
            navigate('/dashboard');
          }} 
        />
      )}
    </div>
  );
}

// Add PageTransition component
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaCar className="nav-logo" />
        <span>TravelBuddy</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        {isAuthenticated && (
          <>
            <NavLink to="/find-ride" className={({ isActive }) => isActive ? 'active' : ''}>Find a Ride</NavLink>
            <NavLink to="/offer-ride" className={({ isActive }) => isActive ? 'active' : ''}>Offer a Ride</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
          </>
        )}
      </div>
      <div className="nav-actions">
        {isAuthenticated ? (
          <>
            <button className="icon-button" onClick={() => navigate('/dashboard/notifications')}>
              <FaBell />
              <span className="notification-dot"></span>
            </button>
            <div 
              className="profile-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="profile-button">
                {user?.name ? user.name.charAt(0).toUpperCase() : <FaUser />}
              </button>
              <div className={`profile-dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <button onClick={() => navigate('/dashboard/profile')}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </>
        ) : (
          <div className="auth-buttons">
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
            <button className="register-button" onClick={() => navigate('/register')}>Register</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Notifications = () => {
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
            <h1>Notifications</h1>
          </div>
          <div className="header-right">
            <FaBell />
          </div>
        </div>

        <div className="notifications-card">
          <h2>Recent Notifications</h2>
          
          <div className="notifications-list">
            <div className="notification-item">
              <div className="notification-content">
                <h3>New Ride Request</h3>
                <p>Harshil Khanna requested a ride to Bangalore</p>
              </div>
              <button className="view-btn">View</button>
            </div>

            <div className="notification-item">
              <div className="notification-content">
                <h3>Ride Confirmed</h3>
                <p>Your ride to Bangalore has been confirmed</p>
              </div>
              <button className="view-btn">View</button>
            </div>
          </div>

          <div className="no-notifications">
            <FaBell className="no-notifications-icon" />
            <p>No new notifications</p>
          </div>
        </div>
      </main>
    </div>
  );
};

const Dashboard = () => {
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
            <h1>Dashboard</h1>
          </div>
          <div className="header-right">
            <Link to="/offer-ride" className="offer-ride-btn">
              + Offer a Ride
            </Link>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Rides</h3>
                <FaCar className="stat-icon" />
              </div>
              <div className="stat-value">12</div>
              <div className="stat-trend">+2 from last month</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <h3>Active Rides</h3>
                <FaCar className="stat-icon" />
              </div>
              <div className="stat-value">3</div>
              <div className="stat-label">Currently active</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <h3>Upcoming Rides</h3>
                <FaCar className="stat-icon" />
              </div>
              <div className="stat-value">5</div>
              <div className="stat-label">Next 7 days</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <h3>Completed Rides</h3>
                <FaCar className="stat-icon" />
              </div>
              <div className="stat-value">4</div>
              <div className="stat-label">Last 30 days</div>
            </div>
          </div>

          <div className="dashboard-sections">
            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <p className="section-subtitle">Common actions you might need</p>
              <div className="actions-list">
                <Link to="/find-ride" className="action-item">
                  <FaSearch /> Find a Ride
                </Link>
                <Link to="/offer-ride" className="action-item">
                  <FaCar /> Offer a Ride
                </Link>
                <Link to="/dashboard/my-rides" className="action-item">
                  <FaUserFriends /> View My Rides
                </Link>
              </div>
            </div>

            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <p className="section-subtitle">Your latest ride-related activities</p>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-content">
                    <h4>New ride request</h4>
                    <p>From: John Doe</p>
                  </div>
                  <button className="view-btn">View</button>
                </div>
                <div className="activity-item">
                  <div className="activity-content">
                    <h4>Ride confirmed</h4>
                    <p>To: New York</p>
                  </div>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Dispatch auth change event to update navigation state
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  if (!user) return null;

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
            <h1>Profile</h1>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-avatar">
              {user.name ? user.name.charAt(0).toUpperCase() : <FaUser />}
            </div>
            <div className="profile-details">
              <h2>{user.name}</h2>
            </div>
          </div>

          <div className="profile-contact">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>{user.email}</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>{user.phoneNumber}</span>
            </div>
          </div>

          <div className="profile-badge">
            <span className="verified-badge">Verified User</span>
          </div>

          <div className="profile-actions">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const Requests = () => {
  const [activeTab, setActiveTab] = React.useState('incoming');

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
            <h1>Ride Requests</h1>
          </div>
          <div className="header-right">
            <Link to="/find-ride" className="offer-ride-btn">
              + Find a Ride
            </Link>
          </div>
        </div>

        <div className="requests-tabs">
          <button 
            className={`tab-button ${activeTab === 'incoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('incoming')}
          >
            Incoming Requests
          </button>
          <button 
            className={`tab-button ${activeTab === 'sent' ? 'active' : ''}`}
            onClick={() => setActiveTab('sent')}
          >
            Sent Requests
          </button>
        </div>

        {activeTab === 'incoming' && (
          <div className="requests-section">
            <h2>Incoming Requests</h2>
            <p className="section-subtitle">Review and respond to ride requests</p>
            
            <div className="requests-list">
              <div className="request-item">
                <div className="request-info">
                  <h3>VIT to Chennai Airport</h3>
                  <p className="request-date">March 15, 2024 - 9:00 AM</p>
                  <p className="request-from">From: Harshil Khanna</p>
                </div>
                <div className="request-status">
                  <span className="seats-badge">2 seats requested</span>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="decline-btn">Decline</button>
                  </div>
                </div>
              </div>

              <div className="request-item">
                <div className="request-info">
                  <h3>Chennai Airport to VIT</h3>
                  <p className="request-date">March 18, 2024 - 2:00 PM</p>
                  <p className="request-from">From: Harshil Khanna</p>
                </div>
                <div className="request-status">
                  <span className="seats-badge">1 seat requested</span>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="decline-btn">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sent' && (
          <div className="requests-section">
            <h2>Sent Requests</h2>
            <p className="section-subtitle">Track your ride requests</p>
            
            <div className="requests-list">
              <div className="request-item">
                <div className="request-info">
                  <h3>VIT to Chennai Airport</h3>
                  <p className="request-date">March 20, 2024 - 11:00 AM</p>
                  <p className="request-to">To: Harshil Khanna</p>
                </div>
                <div className="request-status">
                  <span className="status-badge pending">Pending</span>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>

              <div className="request-item">
                <div className="request-info">
                  <h3>Chennai Airport to VIT</h3>
                  <p className="request-date">March 22, 2024 - 3:00 PM</p>
                  <p className="request-to">To: Harshil Khanna</p>
                </div>
                <div className="request-status">
                  <span className="status-badge awaiting">Awaiting Response</span>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © 2025 TravelBuddy. All rights reserved.
        </div>
        <div className="footer-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    setIsAuthenticated(!!token);
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const handleAuthChange = () => {
      const newToken = localStorage.getItem('token');
      const newUserData = localStorage.getItem('user');
      setIsAuthenticated(!!newToken);
      if (newUserData) {
        setUser(JSON.parse(newUserData));
      }
    };

    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation 
          isAuthenticated={isAuthenticated} 
          user={user}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          onLogout={handleLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/find-ride" element={<ProtectedRoute><FindRide /></ProtectedRoute>} />
            <Route path="/offer-ride" element={<ProtectedRoute><OfferRide /></ProtectedRoute>} />
            <Route path="/my-rides" element={<ProtectedRoute><MyRides /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/requests" element={<ProtectedRoute><Requests /></ProtectedRoute>} />
            <Route path="/dashboard/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
