# Hotel Management System - Frontend

A modern React + TypeScript frontend application for managing hotel operations.

## Features

The system includes 5 main subsystems:

1. **User Management** - Manage hotel staff and customer accounts, roles, and permissions
2. **Reservation Management** - Handle room bookings, check-ins, check-outs, and modifications
3. **Room Management** - Manage room inventory, types, availability, and maintenance status
4. **Worker Management** - Oversee staff schedules, assignments, and performance tracking
5. **Payment Management** - Process payments, generate invoices, and manage billing

## Project Structure

```
hotel-management-frontend/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Navbar.tsx
│   ├── pages/            # Page components for each route
│   │   ├── Dashboard.tsx
│   │   ├── UserManagement.tsx
│   │   ├── ReservationManagement.tsx
│   │   ├── RoomManagement.tsx
│   │   ├── WorkerManagement.tsx
│   │   └── PaymentManagement.tsx
│   ├── services/         # API service layer (for backend integration)
│   ├── types/           # TypeScript type definitions
│   ├── styles/          # CSS stylesheets
│   │   ├── Navbar.css
│   │   ├── Dashboard.css
│   │   └── SubsystemPage.css
│   ├── App.tsx          # Main app component with routing
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling

## Prerequisites

- **Node.js version 20.19+ or 22.12+** (Important: upgrade your Node.js if needed)
- npm or yarn package manager

## Installation

1. Navigate to the project directory:
```bash
cd hotel-management-frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Note:** If you see a Node.js version error, please upgrade your Node.js to version 20.19 or higher.

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Next Steps

### Backend Integration
- Create API service files in `src/services/`
- Define API endpoints for each subsystem
- Implement data fetching and state management

### Feature Implementation
Each subsystem page is currently a placeholder. Next steps include:

1. **User Management**
   - User authentication and authorization
   - Role-based access control
   - User profile management

2. **Reservation Management**
   - Booking form with date picker
   - Real-time room availability check
   - Reservation listing and filtering

3. **Room Management**
   - Room inventory CRUD operations
   - Room status updates
   - Maintenance scheduling

4. **Worker Management**
   - Staff scheduling interface
   - Task assignment system
   - Performance metrics dashboard

5. **Payment Management**
   - Payment processing forms
   - Invoice generation
   - Transaction history

## License

This project is part of a university coursework assignment.
