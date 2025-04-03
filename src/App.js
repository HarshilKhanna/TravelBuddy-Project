import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCar, FaBell, FaUser, FaMapMarkerAlt, FaSearch, FaUserFriends, FaCog, FaRegBell, FaEnvelope, FaPhone } from "react-icons/fa";
import "./App.css";

// Placeholder components
const Home = () => (
  <>
    <div className="home-container">
      <div className="hero-section">
        <h1>Find Your Travel Companion</h1>
        <p>Connect with fellow VIT Vellore students for shared rides to airports, cities, and more. Save money, make friends, and travel sustainably.</p>
        <div className="cta-buttons">
          <Link to="/find-ride" className="primary-button">Find a Ride</Link>
          <Link to="/offer-ride" className="secondary-button">Offer a Ride</Link>
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

function OfferRide() {
  return (
    <div className="offer-ride-container">
      <h1 className="offer-ride-title">Offer a Ride</h1>
      <p className="offer-ride-subtitle">Share your journey and help others reach their destination.</p>
      
      <div className="ride-details-card">
        <h2 className="ride-details-title">Ride Details</h2>
        <p className="ride-details-subtitle">Fill in the details about your ride to help others find you.</p>
        
        <form className="ride-form">
          <div className="form-row">
            <div className="form-group">
              <label>From</label>
              <input type="text" placeholder="Enter departure city" />
            </div>
            <div className="form-group">
              <label>To</label>
              <input type="text" placeholder="Enter destination city" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="text" placeholder="dd-mm-yyyy" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="text" placeholder="--:--" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Available Seats</label>
              <input type="text" placeholder="Number of seats" />
            </div>
            <div className="form-group">
              <label>Price per Seat</label>
              <input type="text" placeholder="Price in USD" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Vehicle</label>
            <input type="text" placeholder="Enter your vehicle details" />
          </div>

          <div className="form-group full-width">
            <label>Additional Details</label>
            <textarea placeholder="Enter any additional information about the ride"></textarea>
          </div>

          <button type="submit" className="post-ride-button">Post Ride</button>
        </form>
      </div>
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

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaCar className="nav-logo" />
        <span>TravelBuddy</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/find-ride" className={({ isActive }) => isActive ? 'active' : ''}>Find a Ride</NavLink>
        <NavLink to="/offer-ride" className={({ isActive }) => isActive ? 'active' : ''}>Offer a Ride</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
      </div>
      <div className="nav-actions">
        <button className="icon-button" onClick={() => navigate('/dashboard/notifications')}>
          <FaBell />
          <span className="notification-dot"></span>
        </button>
        <button className="profile-button" onClick={() => navigate('/dashboard/profile')}>
          <FaUser />
        </button>
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

const MyRides = () => {
  const [activeTab, setActiveTab] = React.useState('offered');

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
            
            <div className="rides-list">
              <div className="ride-item">
                <div className="ride-info">
                  <h3>VIT to Chennai Airport</h3>
                  <p className="ride-date">March 15, 2024 - 9:00 AM</p>
                </div>
                <div className="ride-status">
                  <span className="seats-badge">3 seats left</span>
                  <div className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>

              <div className="ride-item">
                <div className="ride-info">
                  <h3>Chennai Airport to VIT</h3>
                  <p className="ride-date">March 18, 2024 - 2:00 PM</p>
                </div>
                <div className="ride-status">
                  <span className="seats-badge">2 seats left</span>
                  <div className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'booked' && (
          <div className="rides-section">
            <h2>Rides You've Booked</h2>
            <p className="section-subtitle">View and manage your booked rides</p>
            
            <div className="rides-list">
              <div className="ride-item">
                <div className="ride-info">
                  <h3>VIT to Chennai Airport</h3>
                  <p className="ride-date">March 20, 2024 - 11:00 AM</p>
                </div>
                <div className="ride-status">
                  <span className="status-badge confirmed">Confirmed</span>
                  <div className="action-buttons">
                    <button className="view-details-btn">View Details</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>

              <div className="ride-item">
                <div className="ride-info">
                  <h3>Chennai Airport to VIT</h3>
                  <p className="ride-date">March 22, 2024 - 3:00 PM</p>
                </div>
                <div className="ride-status">
                  <span className="status-badge pending">Pending</span>
                  <div className="action-buttons">
                    <button className="view-details-btn">View Details</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const Profile = () => {
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
              <FaUser />
            </div>
            <div className="profile-details">
              <h2>Harshil Khanna</h2>
              <p className="member-since">Member since 2024</p>
            </div>
          </div>

          <div className="profile-contact">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>harshil.khanna@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 8178825433</span>
            </div>
          </div>

          <div className="profile-badge">
            <span className="verified-badge">Verified User</span>
          </div>

          <div className="profile-actions">
            <button className="logout-button">
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
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/find-ride" element={
              <PageTransition>
                <FindRide />
              </PageTransition>
            } />
            <Route path="/offer-ride" element={
              <PageTransition>
                <OfferRide />
              </PageTransition>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/my-rides" element={<MyRides />} />
            <Route path="/dashboard/requests" element={<Requests />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
