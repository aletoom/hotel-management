// User Types
export type UserRole = 'guest' | 'staff' | 'admin';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// Reservation Types
export interface Reservation {
  id: number;
  userId: number;
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  numberOfGuests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'checked-in' | 'checked-out' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  roomDetails?: {
    roomNumber: string;
    roomType: string;
    floor: number;
    pricePerNight: number;
  };
}

// Room Types
export interface Room {
  id: number;
  roomNumber: string;
  roomType: 'single' | 'double' | 'suite' | 'deluxe';
  floor: number;
  pricePerNight: number;
  capacity: number;
  status: 'available' | 'occupied' | 'maintenance' | 'reserved';
  amenities: string[];
  description: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Worker Types
export interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: 'manager' | 'receptionist' | 'housekeeping' | 'maintenance' | 'chef' | 'waiter';
  department: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'on-leave' | 'terminated';
  createdAt: string;
  updatedAt: string;
}

export interface WorkerSchedule {
  id: number;
  workerId: number;
  date: string;
  shiftStart: string;
  shiftEnd: string;
  status: 'scheduled' | 'completed' | 'absent';
}

// Payment Types
export interface Payment {
  id: number;
  reservationId: number;
  amount: number;
  paymentMethod: 'cash' | 'credit-card' | 'debit-card' | 'online';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: number;
  paymentId: number;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

// Form Types
export interface LoginForm {
  username: string;
  password: string;
}

export interface RegistrationForm {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
