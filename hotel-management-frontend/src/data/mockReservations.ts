// Mock reservation data for development/testing
import type { Reservation } from '../types';

export const mockReservations: Reservation[] = [
  {
    id: 1,
    userId: 1,
    roomId: 101,
    checkInDate: '2025-11-15',
    checkOutDate: '2025-11-18',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 2,
    totalPrice: 450.00,
    status: 'confirmed',
    createdAt: '2025-11-01T10:30:00Z',
    updatedAt: '2025-11-01T10:30:00Z',
    roomDetails: {
      roomNumber: '101',
      roomType: 'Deluxe Suite',
      floor: 1,
      pricePerNight: 150.00
    }
  },
  {
    id: 2,
    userId: 1,
    roomId: 205,
    checkInDate: '2025-12-20',
    checkOutDate: '2025-12-25',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 4,
    totalPrice: 1000.00,
    status: 'pending',
    createdAt: '2025-11-10T14:20:00Z',
    updatedAt: '2025-11-10T14:20:00Z',
    roomDetails: {
      roomNumber: '205',
      roomType: 'Family Suite',
      floor: 2,
      pricePerNight: 200.00
    }
  },
  {
    id: 3,
    userId: 1,
    roomId: 310,
    checkInDate: '2025-10-01',
    checkOutDate: '2025-10-05',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 1,
    totalPrice: 400.00,
    status: 'checked-out',
    createdAt: '2025-09-15T09:00:00Z',
    updatedAt: '2025-10-05T11:00:00Z',
    roomDetails: {
      roomNumber: '310',
      roomType: 'Standard Room',
      floor: 3,
      pricePerNight: 100.00
    }
  },
  {
    id: 4,
    userId: 1,
    roomId: 405,
    checkInDate: '2025-11-12',
    checkOutDate: '2025-11-14',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 2,
    totalPrice: 240.00,
    status: 'checked-in',
    createdAt: '2025-11-05T16:45:00Z',
    updatedAt: '2025-11-12T15:00:00Z',
    roomDetails: {
      roomNumber: '405',
      roomType: 'Double Room',
      floor: 4,
      pricePerNight: 120.00
    }
  },
  {
    id: 5,
    userId: 1,
    roomId: 150,
    checkInDate: '2025-08-10',
    checkOutDate: '2025-08-12',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 2,
    totalPrice: 300.00,
    status: 'cancelled',
    createdAt: '2025-07-20T12:00:00Z',
    updatedAt: '2025-08-05T10:30:00Z',
    roomDetails: {
      roomNumber: '150',
      roomType: 'Premium Room',
      floor: 1,
      pricePerNight: 150.00
    }
  }
];
