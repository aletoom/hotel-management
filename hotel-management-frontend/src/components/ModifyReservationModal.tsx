import { useState } from 'react';
import type { Reservation } from '../types';
import '../styles/ModifyReservationModal.css';

interface ModifyReservationModalProps {
  reservation: Reservation;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedReservation: Partial<Reservation>) => void;
}

const ModifyReservationModal = ({ reservation, isOpen, onClose, onSave }: ModifyReservationModalProps) => {
  const [formData, setFormData] = useState({
    checkInDate: reservation.checkInDate,
    checkOutDate: reservation.checkOutDate,
    numberOfGuests: reservation.numberOfGuests,
    guestName: reservation.guestName,
    guestEmail: reservation.guestEmail,
    guestPhone: reservation.guestPhone,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) || 0 : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Check-in date validation
    const checkIn = new Date(formData.checkInDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      newErrors.checkInDate = 'Check-in date cannot be in the past';
    }

    // Check-out date validation
    const checkOut = new Date(formData.checkOutDate);
    if (checkOut <= checkIn) {
      newErrors.checkOutDate = 'Check-out date must be after check-in date';
    }

    // Number of guests validation
    if (formData.numberOfGuests < 1) {
      newErrors.numberOfGuests = 'At least 1 guest is required';
    }

    if (formData.numberOfGuests > 10) {
      newErrors.numberOfGuests = 'Maximum 10 guests allowed';
    }

    // Name validation
    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Guest name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.guestEmail)) {
      newErrors.guestEmail = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.guestPhone.trim()) {
      newErrors.guestPhone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Calculate new total price
      const nights = Math.ceil(
        (new Date(formData.checkOutDate).getTime() - new Date(formData.checkInDate).getTime()) 
        / (1000 * 60 * 60 * 24)
      );
      const pricePerNight = reservation.roomDetails?.pricePerNight || 0;
      const newTotalPrice = nights * pricePerNight;

      onSave({
        ...formData,
        totalPrice: newTotalPrice,
      });

      // Show success message
      alert('✅ Reservation updated successfully!');
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      checkInDate: reservation.checkInDate,
      checkOutDate: reservation.checkOutDate,
      numberOfGuests: reservation.numberOfGuests,
      guestName: reservation.guestName,
      guestEmail: reservation.guestEmail,
      guestPhone: reservation.guestPhone,
    });
    setErrors({});
    onClose();
  };

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(formData.checkInDate);
    const end = new Date(formData.checkOutDate);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const pricePerNight = reservation.roomDetails?.pricePerNight || 0;
  const estimatedTotal = nights * pricePerNight;

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>✏️ Modify Reservation</h2>
          <button className="modal-close" onClick={handleCancel}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="modify-form">
          <div className="form-section">
            <h3>📅 Stay Dates</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkInDate">Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                />
                {errors.checkInDate && (
                  <span className="error-text">{errors.checkInDate}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="checkOutDate">Check-out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                />
                {errors.checkOutDate && (
                  <span className="error-text">{errors.checkOutDate}</span>
                )}
              </div>
            </div>

            {nights > 0 && (
              <div className="nights-info">
                <span className="info-label">Number of nights:</span>
                <span className="info-value">{nights}</span>
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>👥 Guest Details</h3>
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                min="1"
                max="10"
                required
              />
              {errors.numberOfGuests && (
                <span className="error-text">{errors.numberOfGuests}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guestName">Guest Name</label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
              {errors.guestName && (
                <span className="error-text">{errors.guestName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guestEmail">Email Address</label>
              <input
                type="email"
                id="guestEmail"
                name="guestEmail"
                value={formData.guestEmail}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
              {errors.guestEmail && (
                <span className="error-text">{errors.guestEmail}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guestPhone">Phone Number</label>
              <input
                type="tel"
                id="guestPhone"
                name="guestPhone"
                value={formData.guestPhone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
              />
              {errors.guestPhone && (
                <span className="error-text">{errors.guestPhone}</span>
              )}
            </div>
          </div>

          <div className="form-section price-section">
            <h3>💰 Updated Price</h3>
            <div className="price-summary">
              <div className="price-row">
                <span>Room: {reservation.roomDetails?.roomNumber}</span>
                <span>{reservation.roomDetails?.roomType}</span>
              </div>
              <div className="price-row">
                <span>${pricePerNight.toFixed(2)} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                <span className="price-amount">${estimatedTotal.toFixed(2)}</span>
              </div>
              <div className="price-row total">
                <span>Estimated Total</span>
                <span className="total-amount">${estimatedTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyReservationModal;
