// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // User Management
  users: {
    list: '/users/',
    detail: (id: number) => `/users/${id}/`,
    create: '/users/',
    update: (id: number) => `/users/${id}/`,
    delete: (id: number) => `/users/${id}/`,
  },
  
  // Reservation Management
  reservations: {
    list: '/reservations/',
    detail: (id: number) => `/reservations/${id}/`,
    create: '/reservations/',
    update: (id: number) => `/reservations/${id}/`,
    delete: (id: number) => `/reservations/${id}/`,
    checkIn: (id: number) => `/reservations/${id}/check-in/`,
    checkOut: (id: number) => `/reservations/${id}/check-out/`,
  },
  
  // Room Management
  rooms: {
    list: '/rooms/',
    detail: (id: number) => `/rooms/${id}/`,
    create: '/rooms/',
    update: (id: number) => `/rooms/${id}/`,
    delete: (id: number) => `/rooms/${id}/`,
    availability: '/rooms/availability/',
  },
  
  // Worker Management
  workers: {
    list: '/workers/',
    detail: (id: number) => `/workers/${id}/`,
    create: '/workers/',
    update: (id: number) => `/workers/${id}/`,
    delete: (id: number) => `/workers/${id}/`,
    schedule: (id: number) => `/workers/${id}/schedule/`,
  },
  
  // Payment Management
  payments: {
    list: '/payments/',
    detail: (id: number) => `/payments/${id}/`,
    create: '/payments/',
    update: (id: number) => `/payments/${id}/`,
    delete: (id: number) => `/payments/${id}/`,
    invoice: (id: number) => `/payments/${id}/invoice/`,
  },
};

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;
