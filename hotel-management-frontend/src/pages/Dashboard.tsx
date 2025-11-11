import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const subsystems = [
    {
      id: 1,
      title: 'User Management',
      description: 'Manage hotel staff and customer accounts, roles, and permissions',
      icon: '👥',
      path: '/users',
      color: '#4A90E2'
    },
    {
      id: 2,
      title: 'Reservation Management',
      description: 'Handle room bookings, check-ins, check-outs, and reservation modifications',
      icon: '📅',
      path: '/reservations',
      color: '#F5A623'
    },
    {
      id: 3,
      title: 'Room Management',
      description: 'Manage room inventory, types, availability, and maintenance status',
      icon: '🛏️',
      path: '/rooms',
      color: '#7ED321'
    },
    {
      id: 4,
      title: 'Worker Management',
      description: 'Oversee staff schedules, assignments, and performance tracking',
      icon: '👔',
      path: '/workers',
      color: '#BD10E0'
    },
    {
      id: 5,
      title: 'Payment Management',
      description: 'Process payments, generate invoices, and manage billing information',
      icon: '💳',
      path: '/payments',
      color: '#50E3C2'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Hotel Management System</h1>
        <p>Welcome to your centralized hotel management dashboard</p>
      </div>
      
      <div className="subsystems-grid">
        {subsystems.map((subsystem) => (
          <Link 
            key={subsystem.id} 
            to={subsystem.path} 
            className="subsystem-card"
            style={{ borderTopColor: subsystem.color }}
          >
            <div className="subsystem-icon">{subsystem.icon}</div>
            <h2 className="subsystem-title">{subsystem.title}</h2>
            <p className="subsystem-description">{subsystem.description}</p>
            <span className="subsystem-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
