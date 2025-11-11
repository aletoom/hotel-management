import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockReservations } from '../data/mockReservations';
import type { Reservation } from '../types';
import '../styles/MyReservations.css';

const MyReservations = () => {
  const navigate = useNavigate();
  const [reservations] = useState<Reservation[]>(mockReservations);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Calculate number of nights
  const calculateNights = (checkIn: string, checkOut: string): number => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Format date to readable string
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get status badge color
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'confirmed':
        return '#7ED321';
      case 'pending':
        return '#F5A623';
      case 'checked-in':
        return '#4A90E2';
      case 'checked-out':
        return '#8E44AD';
      case 'cancelled':
        return '#E74C3C';
      default:
        return '#95A5A6';
    }
  };

  // Get status display text
  const getStatusText = (status: string): string => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Filter reservations
  const filteredReservations = filterStatus === 'all' 
    ? reservations 
    : reservations.filter(r => r.status === filterStatus);

  // Handle card click
  const handleCardClick = (reservationId: number) => {
    navigate(`/my-reservations/${reservationId}`);
  };

  return (
    <div className="my-reservations">
      <div className="page-header">
        <h1>📅 My Reservations</h1>
        <p>View and manage your hotel bookings</p>
      </div>

      <div className="reservations-controls">
        <div className="filter-section">
          <label htmlFor="status-filter">Filter by status:</label>
          <select 
            id="status-filter"
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Reservations</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="checked-in">Checked In</option>
            <option value="checked-out">Checked Out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="reservations-count">
          {filteredReservations.length} {filteredReservations.length === 1 ? 'reservation' : 'reservations'}
        </div>
      </div>

      {filteredReservations.length === 0 ? (
        <div className="no-reservations">
          <div className="empty-state">
            <span className="empty-icon">🏨</span>
            <h2>No reservations found</h2>
            <p>You don't have any {filterStatus !== 'all' ? filterStatus : ''} reservations yet.</p>
            <button 
              className="btn-primary"
              onClick={() => navigate('/rooms')}
            >
              Browse Available Rooms
            </button>
          </div>
        </div>
      ) : (
        <div className="reservations-grid">
          {filteredReservations.map((reservation) => (
            <div 
              key={reservation.id} 
              className="reservation-card"
              onClick={() => handleCardClick(reservation.id)}
            >
              <div className="card-header">
                <div className="room-info">
                  <h3>Room {reservation.roomDetails?.roomNumber}</h3>
                  <span className="room-type">{reservation.roomDetails?.roomType}</span>
                </div>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(reservation.status) }}
                >
                  {getStatusText(reservation.status)}
                </span>
              </div>

              <div className="card-body">
                <div className="date-section">
                  <div className="date-item">
                    <span className="date-label">Check-in</span>
                    <span className="date-value">{formatDate(reservation.checkInDate)}</span>
                  </div>
                  <div className="date-separator">→</div>
                  <div className="date-item">
                    <span className="date-label">Check-out</span>
                    <span className="date-value">{formatDate(reservation.checkOutDate)}</span>
                  </div>
                </div>

                <div className="reservation-details">
                  <div className="detail-item">
                    <span className="detail-icon">🛏️</span>
                    <span className="detail-text">
                      {calculateNights(reservation.checkInDate, reservation.checkOutDate)} {calculateNights(reservation.checkInDate, reservation.checkOutDate) === 1 ? 'night' : 'nights'}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span className="detail-text">
                      {reservation.numberOfGuests} {reservation.numberOfGuests === 1 ? 'guest' : 'guests'}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <span className="detail-text price">
                      ${reservation.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <span className="booking-id">Booking ID: #{reservation.id}</span>
                <span className="view-details">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReservations;
