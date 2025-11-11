import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Room } from '../data/mockRooms';
import '../styles/BookRoomForm.css';

interface BookingFormData {
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
}

const BookRoomForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, checkIn, checkOut, guests } = location.state as { 
    room: Room; 
    checkIn: string; 
    checkOut: string; 
    guests: number;
  };

  const [formData, setFormData] = useState<BookingFormData>({
    checkInDate: checkIn || '',
    checkOutDate: checkOut || '',
    numberOfGuests: guests || 1,
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!room) {
      navigate('/book-new-reservation');
    }
  }, [room, navigate]);

  if (!room) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const checkInDate = new Date(formData.checkInDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Check-in date is required';
    } else if (checkInDate < today) {
      newErrors.checkInDate = 'Check-in date cannot be in the past';
    }

    // Check-out date validation
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Check-out date is required';
    } else {
      const checkOutDate = new Date(formData.checkOutDate);
      if (checkOutDate <= checkInDate) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date';
      }
    }

    // Number of guests validation
    if (formData.numberOfGuests < 1) {
      newErrors.numberOfGuests = 'At least 1 guest is required';
    } else if (formData.numberOfGuests > room.capacity) {
      newErrors.numberOfGuests = `Maximum ${room.capacity} guests allowed for this room`;
    }

    // Name validation
    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Guest name is required';
    } else if (formData.guestName.trim().length < 2) {
      newErrors.guestName = 'Please enter a valid name';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.guestEmail) {
      newErrors.guestEmail = 'Email address is required';
    } else if (!emailRegex.test(formData.guestEmail)) {
      newErrors.guestEmail = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.guestPhone.trim()) {
      newErrors.guestPhone = 'Phone number is required';
    } else if (formData.guestPhone.trim().length < 10) {
      newErrors.guestPhone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success message
      alert(`✅ Booking Successful!\n\nYour reservation has been confirmed!\n\nBooking Details:\n• Room: ${room.roomNumber} - ${room.roomType}\n• Check-in: ${new Date(formData.checkInDate).toLocaleDateString()}\n• Check-out: ${new Date(formData.checkOutDate).toLocaleDateString()}\n• Guests: ${formData.numberOfGuests}\n• Total: $${calculateTotal().toFixed(2)}\n\nA confirmation email has been sent to ${formData.guestEmail}`);
      
      // Navigate back to reservations
      navigate('/my-reservations');
    }, 1500);
  };

  const calculateNights = (): number => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;
    const start = new Date(formData.checkInDate);
    const end = new Date(formData.checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const calculateSubtotal = (): number => {
    return calculateNights() * room.pricePerNight;
  };

  const calculateTax = (): number => {
    return calculateSubtotal() * 0.1; // 10% tax
  };

  const calculateServiceFee = (): number => {
    return 25; // Flat service fee
  };

  const calculateTotal = (): number => {
    return calculateSubtotal() + calculateTax() + calculateServiceFee();
  };

  const nights = calculateNights();

  return (
    <div className="book-room-form">
      <div className="form-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Rooms
        </button>
        <h1>📝 Complete Your Booking</h1>
      </div>

      <div className="form-container">
        {/* Booking Form */}
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            {/* Stay Dates */}
            <div className="form-card">
              <h3 className="card-title">📅 Your Stay</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkInDate">Check-in Date *</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  {errors.checkInDate && (
                    <span className="error-text">{errors.checkInDate}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="checkOutDate">Check-out Date *</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                    required
                  />
                  {errors.checkOutDate && (
                    <span className="error-text">{errors.checkOutDate}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="numberOfGuests">Number of Guests *</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  min="1"
                  max={room.capacity}
                  required
                />
                <span className="helper-text">Maximum {room.capacity} guests for this room</span>
                {errors.numberOfGuests && (
                  <span className="error-text">{errors.numberOfGuests}</span>
                )}
              </div>

              {nights > 0 && (
                <div className="nights-display">
                  <span className="nights-icon">🌙</span>
                  <span className="nights-text">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                </div>
              )}
            </div>

            {/* Guest Information */}
            <div className="form-card">
              <h3 className="card-title">👤 Guest Information</h3>
              
              <div className="form-group">
                <label htmlFor="guestName">Full Name *</label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                {errors.guestName && (
                  <span className="error-text">{errors.guestName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="guestEmail">Email Address *</label>
                <input
                  type="email"
                  id="guestEmail"
                  name="guestEmail"
                  value={formData.guestEmail}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                />
                {errors.guestEmail && (
                  <span className="error-text">{errors.guestEmail}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="guestPhone">Phone Number *</label>
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

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or preferences..."
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? '⏳ Processing...' : '✅ Confirm Booking'}
            </button>
          </form>
        </div>

        {/* Booking Summary */}
        <div className="summary-section">
          <div className="summary-card sticky">
            <h3 className="summary-title">📋 Booking Summary</h3>

            <div className="room-summary">
              <img src={room.images[0]} alt={room.roomType} className="summary-image" />
              <div className="room-info">
                <h4>{room.roomType}</h4>
                <p>Room {room.roomNumber} • Floor {room.floor}</p>
              </div>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-details">
              <div className="summary-row">
                <span className="label">🛏️ Bed Type:</span>
                <span className="value">{room.bedType}</span>
              </div>
              <div className="summary-row">
                <span className="label">👥 Capacity:</span>
                <span className="value">Up to {room.capacity} guests</span>
              </div>
              {nights > 0 && (
                <div className="summary-row">
                  <span className="label">📅 Nights:</span>
                  <span className="value">{nights}</span>
                </div>
              )}
            </div>

            {nights > 0 && (
              <>
                <div className="summary-divider"></div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span className="price-label">${room.pricePerNight.toFixed(2)} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                    <span className="price-value">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">Service fee</span>
                    <span className="price-value">${calculateServiceFee().toFixed(2)}</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">Taxes (10%)</span>
                    <span className="price-value">${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="price-row total">
                    <span className="price-label">Total</span>
                    <span className="price-value">${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}

            <div className="cancellation-policy">
              <h4>📌 Cancellation Policy</h4>
              <p>Free cancellation up to 24 hours before check-in. Cancel before then and get a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRoomForm;
