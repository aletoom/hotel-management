import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockReservations } from '../data/mockReservations';
import type { Reservation } from '../types';
import ModifyReservationModal from '../components/ModifyReservationModal';
import '../styles/ReservationDetail.css';

const ReservationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  useEffect(() => {
    // TODO: Replace with actual API call
    const found = mockReservations.find(r => r.id === Number(id));
    if (found) {
      setReservation(found);
    } else {
      // Redirect if reservation not found
      navigate('/my-reservations');
    }
  }, [id, navigate]);

  if (!reservation) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

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
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Format time
  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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

  const nights = calculateNights(reservation.checkInDate, reservation.checkOutDate);
  const pricePerNight = reservation.roomDetails?.pricePerNight || 0;

  // Handle actions
  const handleModify = () => {
    setIsModifyModalOpen(true);
  };

  const handleSaveModification = (updatedData: Partial<Reservation>) => {
    if (reservation) {
      const updatedReservation = {
        ...reservation,
        ...updatedData,
        updatedAt: new Date().toISOString(),
      };
      setReservation(updatedReservation);
      // TODO: Send update to backend API
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this reservation? This action cannot be undone.')) {
      // Update reservation status to cancelled
      if (reservation) {
        const cancelledReservation = {
          ...reservation,
          status: 'cancelled' as const,
          updatedAt: new Date().toISOString(),
        };
        setReservation(cancelledReservation);
        
        // Show success message
        alert('✅ Reservation Cancelled Successfully!\n\nYour reservation has been cancelled.\n\nCancellation Details:\n• Booking ID: #' + reservation.id + '\n• Room: ' + reservation.roomDetails?.roomNumber + ' - ' + reservation.roomDetails?.roomType + '\n\nA confirmation email has been sent to ' + reservation.guestEmail);
        
        // TODO: Send cancellation to backend API
      }
    }
  };

  return (
    <div className="reservation-detail">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate('/my-reservations')}>
          ← Back to Reservations
        </button>
        <h1>Reservation Details</h1>
      </div>

      {/* Modify Reservation Modal */}
      {reservation && (
        <ModifyReservationModal
          reservation={reservation}
          isOpen={isModifyModalOpen}
          onClose={() => setIsModifyModalOpen(false)}
          onSave={handleSaveModification}
        />
      )}

      <div className="detail-container">
        {/* Main Info Card */}
        <div className="detail-card main-card">
          <div className="card-title-section">
            <div>
              <h2>Room {reservation.roomDetails?.roomNumber}</h2>
              <p className="room-type-large">{reservation.roomDetails?.roomType}</p>
            </div>
            <span 
              className="status-badge-large"
              style={{ backgroundColor: getStatusColor(reservation.status) }}
            >
              {getStatusText(reservation.status)}
            </span>
          </div>

          <div className="booking-info-section">
            <div className="info-row">
              <span className="info-label">Booking ID:</span>
              <span className="info-value">#{reservation.id}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Booked on:</span>
              <span className="info-value">{formatDateTime(reservation.createdAt)}</span>
            </div>
            {reservation.updatedAt !== reservation.createdAt && (
              <div className="info-row">
                <span className="info-label">Last updated:</span>
                <span className="info-value">{formatDateTime(reservation.updatedAt)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Stay Details */}
        <div className="detail-card">
          <h3 className="card-subtitle">📅 Stay Details</h3>
          <div className="stay-timeline">
            <div className="timeline-item">
              <div className="timeline-label">Check-in</div>
              <div className="timeline-date">{formatDate(reservation.checkInDate)}</div>
              <div className="timeline-time">After 3:00 PM</div>
            </div>
            <div className="timeline-connector">
              <div className="connector-line"></div>
              <div className="nights-badge">{nights} {nights === 1 ? 'night' : 'nights'}</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-label">Check-out</div>
              <div className="timeline-date">{formatDate(reservation.checkOutDate)}</div>
              <div className="timeline-time">Before 11:00 AM</div>
            </div>
          </div>
        </div>

        {/* Guest Information */}
        <div className="detail-card">
          <h3 className="card-subtitle">👤 Guest Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="item-label">Name:</span>
              <span className="item-value">{reservation.guestName}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Email:</span>
              <span className="item-value">{reservation.guestEmail}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Phone:</span>
              <span className="item-value">{reservation.guestPhone}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Number of Guests:</span>
              <span className="item-value">{reservation.numberOfGuests}</span>
            </div>
          </div>
        </div>

        {/* Room Information */}
        <div className="detail-card">
          <h3 className="card-subtitle">🛏️ Room Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="item-label">Room Number:</span>
              <span className="item-value">{reservation.roomDetails?.roomNumber}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Room Type:</span>
              <span className="item-value">{reservation.roomDetails?.roomType}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Floor:</span>
              <span className="item-value">Floor {reservation.roomDetails?.floor}</span>
            </div>
            <div className="info-item">
              <span className="item-label">Price per Night:</span>
              <span className="item-value">${pricePerNight.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="detail-card">
          <h3 className="card-subtitle">💰 Price Breakdown</h3>
          <div className="price-breakdown">
            <div className="price-row">
              <span className="price-label">${pricePerNight.toFixed(2)} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
              <span className="price-value">${(pricePerNight * nights).toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span className="price-label">Service fee</span>
              <span className="price-value">$0.00</span>
            </div>
            <div className="price-row">
              <span className="price-label">Taxes</span>
              <span className="price-value">$0.00</span>
            </div>
            <div className="price-row total-row">
              <span className="price-label">Total</span>
              <span className="price-value">${reservation.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        {(reservation.status === 'pending' || reservation.status === 'confirmed') && (
          <div className="detail-card actions-card">
            <h3 className="card-subtitle">⚙️ Actions</h3>
            <div className="action-buttons">
              <button className="btn-action btn-modify" onClick={handleModify}>
                ✏️ Modify Reservation
              </button>
              <button className="btn-action btn-cancel" onClick={handleCancel}>
                ❌ Cancel Reservation
              </button>
            </div>
          </div>
        )}

        {/* Important Information */}
        <div className="detail-card info-card">
          <h3 className="card-subtitle">ℹ️ Important Information</h3>
          <ul className="info-list">
            <li>Please bring a valid ID and credit card at check-in</li>
            <li>Early check-in and late check-out may be available for an additional fee</li>
            <li>Cancellation policy: Free cancellation up to 24 hours before check-in</li>
            <li>No-show or late cancellation may result in charges</li>
            <li>Contact hotel directly for special requests or questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
