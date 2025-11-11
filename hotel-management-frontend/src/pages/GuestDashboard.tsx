import { Link } from 'react-router-dom';
import '../styles/GuestDashboard.css';

const GuestDashboard = () => {
  const guestFeatures = [
    {
      id: 1,
      title: 'Find Rooms',
      description: 'Search and browse available rooms with real-time availability',
      icon: '🔍',
      path: '/rooms',
      color: '#4A90E2'
    },
    {
      id: 2,
      title: 'My Reservations',
      description: 'View, modify, or cancel your current and past reservations',
      icon: '📅',
      path: '/my-reservations',
      color: '#F5A623'
    },
    {
      id: 3,
      title: 'Book a Room',
      description: 'Make a new reservation for your upcoming stay',
      icon: '🛏️',
      path: '/book',
      color: '#7ED321'
    },
    {
      id: 4,
      title: 'My Bills',
      description: 'View and pay your bills and invoices',
      icon: '💳',
      path: '/my-bills',
      color: '#50E3C2'
    }
  ];

  return (
    <div className="guest-dashboard">
      <div className="dashboard-header">
        <h1>👤 Guest Portal</h1>
        <p>Welcome back! Manage your reservations and bookings</p>
      </div>
      
      <div className="features-grid">
        {guestFeatures.map((feature) => (
          <Link 
            key={feature.id} 
            to={feature.path} 
            className="feature-card"
            style={{ borderTopColor: feature.color }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
            <span className="feature-arrow">→</span>
          </Link>
        ))}
      </div>

      <div className="quick-info">
        <div className="info-box">
          <h3>🏨 Hotel Information</h3>
          <p>Address: 123 Hotel Street, City</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: info@hotelmanagement.com</p>
        </div>
        <div className="info-box">
          <h3>⏰ Check-in/Check-out</h3>
          <p>Check-in: 3:00 PM</p>
          <p>Check-out: 11:00 AM</p>
          <p>Late check-out available upon request</p>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard;
