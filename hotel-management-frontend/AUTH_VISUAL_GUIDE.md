# Authentication Pages - Visual Guide

## 🔐 Login Page (`/login`)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                    Purple Gradient Background                │
│                                                              │
│    ┌──────────────────────────────────────────────┐        │
│    │                                               │        │
│    │         🏨 Welcome Back                       │        │
│    │    Sign in to your hotel management account  │        │
│    │                                               │        │
│    │  I am a:                                      │        │
│    │  [Guest ▼]                                    │        │
│    │                                               │        │
│    │  Email Address                                │        │
│    │  [your.email@example.com          ]          │        │
│    │                                               │        │
│    │  Password                                     │        │
│    │  [••••••••••••••••                ]          │        │
│    │                                               │        │
│    │  ☐ Remember me        Forgot password?       │        │
│    │                                               │        │
│    │  [        Sign In        ]                    │        │
│    │                                               │        │
│    │  ─────────────────────────────────────       │        │
│    │                                               │        │
│    │  Don't have an account? Sign up here         │        │
│    │                                               │        │
│    │  👤 Guest Access                              │        │
│    │  Find rooms, manage reservations...           │        │
│    │                                               │        │
│    │  👔 Staff Access                              │        │
│    │  Manage day-to-day hotel operations...        │        │
│    │                                               │        │
│    │  🔑 Admin Access                              │        │
│    │  Full system control and management...        │        │
│    │                                               │        │
│    └──────────────────────────────────────────────┘        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Features
- **User Type Selector**: Dropdown with 3 options
  - Guest (default)
  - Hotel Staff
  - Administrator
  
- **Form Fields**:
  - Email (with placeholder)
  - Password (hidden text)
  
- **Options**:
  - Remember me checkbox
  - Forgot password link
  
- **Links**:
  - Sign up link (goes to /register)
  
- **Info Section**:
  - Description of each user type
  - Helps users understand access levels

---

## 📝 Register Page (`/register`)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                    Purple Gradient Background                │
│                                                              │
│    ┌──────────────────────────────────────────────┐        │
│    │                                               │        │
│    │         🏨 Create Account                     │        │
│    │      Join our hotel management system        │        │
│    │                                               │        │
│    │  Account Type                                 │        │
│    │  [Guest Account ▼]                            │        │
│    │  👤 Book rooms and manage your reservations   │        │
│    │                                               │        │
│    │  First Name          Last Name                │        │
│    │  [John        ]      [Doe         ]           │        │
│    │                                               │        │
│    │  Email Address                                │        │
│    │  [your.email@example.com          ]          │        │
│    │                                               │        │
│    │  Phone Number                                 │        │
│    │  [+1 (555) 123-4567               ]          │        │
│    │                                               │        │
│    │  Password            Confirm Password         │        │
│    │  [Min. 6 chars]      [Re-enter     ]         │        │
│    │                                               │        │
│    │  ☐ I agree to the Terms of Service and       │        │
│    │     Privacy Policy                            │        │
│    │                                               │        │
│    │  [        Create Account        ]             │        │
│    │                                               │        │
│    │  ─────────────────────────────────────       │        │
│    │                                               │        │
│    │  Already have an account? Sign in here       │        │
│    │                                               │        │
│    └──────────────────────────────────────────────┘        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Features
- **Account Type Selector**: 
  - Shows dynamic hint based on selection
  - Guest: "Book rooms and manage your reservations"
  - Staff: "Access hotel operations and services"
  - Admin: "Full system administration access"

- **Form Fields**:
  - First Name & Last Name (side-by-side)
  - Email
  - Phone Number
  - Password & Confirm Password (side-by-side)

- **Validation**:
  - Password minimum 6 characters
  - Password confirmation match
  - Error messages shown below fields
  - Required fields enforced

- **Agreement**:
  - Terms of Service checkbox (required)
  - Links to Terms and Privacy Policy

---

## 🧭 Updated Navigation Bar

### Desktop View
```
┌─────────────────────────────────────────────────────────────────────┐
│  🏨 Hotel Management System                                         │
│                                                                      │
│  [User Management] [Reservation] [Room] [Worker] [Payment]          │
│                                        [Sign In]  [Sign Up]          │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile View
```
┌──────────────────────────────┐
│  🏨 Hotel Management System   │
│                               │
│  [User Management]            │
│  [Reservation Management]     │
│  [Room Management]            │
│  [Worker Management]          │
│  [Payment Management]         │
│                               │
│  [Sign In]  [Sign Up]         │
└──────────────────────────────┘
```

### Styling
- **Sign In**: Regular link style
- **Sign Up**: White button with purple text
  - Stands out from other links
  - Hover effect: lifts up with shadow

---

## 👤 Guest Dashboard (`/guest-dashboard`)

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              👤 Guest Portal                                 │
│        Welcome back! Manage your reservations and bookings   │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │     🔍      │  │     📅      │  │     🛏️      │        │
│  │ Find Rooms  │  │     My      │  │  Book a     │        │
│  │             │  │ Reservations│  │   Room      │        │
│  │ Search and  │  │             │  │             │        │
│  │ browse...   │  │ View, mod...│  │ Make a new..│        │
│  │          → │  │          → │  │          → │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                              │
│  ┌─────────────┐                                            │
│  │     💳      │                                            │
│  │  My Bills   │                                            │
│  │             │                                            │
│  │ View and    │                                            │
│  │ pay your... │                                            │
│  │          → │                                            │
│  └─────────────┘                                            │
│                                                              │
│  ┌──────────────────────┐  ┌─────────────────────┐         │
│  │ 🏨 Hotel Information │  │ ⏰ Check-in/Check-out│         │
│  │                      │  │                      │         │
│  │ Address: 123 Hotel...│  │ Check-in: 3:00 PM    │         │
│  │ Phone: +1 (555)...   │  │ Check-out: 11:00 AM  │         │
│  │ Email: info@hotel... │  │ Late check-out...    │         │
│  └──────────────────────┘  └─────────────────────┘         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Features
- **4 Main Actions**:
  - Find Rooms (search functionality)
  - My Reservations (view/manage bookings)
  - Book a Room (create new reservation)
  - My Bills (payment management)

- **Quick Info**:
  - Hotel contact details
  - Check-in/check-out times
  - Important policies

---

## 🎨 Color Scheme

### Login/Register Pages
- **Background**: Purple gradient (#667eea → #764ba2)
- **Card**: White with shadow
- **Primary Button**: Purple gradient
- **Text**: Dark gray (#2c3e50)
- **Placeholder**: Light gray (#bdc3c7)
- **Links**: Purple (#667eea)
- **Error**: Red (#e74c3c)

### Interactive States
- **Input Focus**: Purple border with subtle shadow
- **Button Hover**: Lifts up with enhanced shadow
- **Link Hover**: Darker purple with underline

---

## 📱 Responsive Design

### Desktop (1200px+)
- Login/Register cards centered on screen
- Wide form fields
- Two-column layout for name/password fields

### Tablet (768px - 1199px)
- Slightly narrower cards
- Two-column fields maintained
- Navigation wraps appropriately

### Mobile (< 768px)
- Full-width cards with minimal padding
- Single-column form fields
- Stacked navigation
- Larger touch targets

---

## 🔄 User Flow

### New User Registration
```
Landing Page → Click "Sign Up" 
           → Select Account Type
           → Fill Registration Form
           → Accept Terms
           → Create Account
           → Redirect to Login
           → Sign In
           → Dashboard
```

### Returning User Login
```
Landing Page → Click "Sign In"
           → Select Account Type
           → Enter Credentials
           → Sign In
           → Dashboard (role-specific)
```

### Guest User Journey
```
Login as Guest → Guest Dashboard
              → Find Rooms
              → Book Room
              → View Reservation
              → Pay Bill
```

### Staff User Journey
```
Login as Staff → Main Dashboard
              → Access All Subsystems
              → Manage Operations
```

### Admin User Journey
```
Login as Admin → Main Dashboard
              → Full System Access
              → User Management
              → System Configuration
```

---

## ✅ Current Status

**Completed**:
- ✅ Login page with user type selection
- ✅ Register page with validation
- ✅ Guest-specific dashboard
- ✅ Updated navigation with auth links
- ✅ Professional styling and animations
- ✅ Fully responsive design
- ✅ Form validation
- ✅ TypeScript types

**Pending** (Backend Integration):
- ⏳ API connection
- ⏳ JWT token management
- ⏳ Session persistence
- ⏳ Protected routes
- ⏳ Role-based access control

---

**All pages are fully functional on the frontend and ready for backend integration!**
