# Reservation Management System - Guest View

## Overview

The Reservation Management subsystem for guests allows users to view, track, and manage their hotel reservations. The system includes a list view showing all reservations and a detailed view for each individual reservation.

---

## Features Implemented

### 1. My Reservations Page (`/my-reservations`)

**Purpose**: Display all reservations for the logged-in guest user

**Key Features**:
- ✅ Card-based layout showing reservation overview
- ✅ Filter by reservation status
- ✅ Displays 5 mock reservations with different statuses
- ✅ Shows key information at a glance
- ✅ Clickable cards that navigate to detail view
- ✅ Empty state when no reservations match filter
- ✅ Fully responsive design

**Displayed Information per Card**:
- Room number and type
- Status badge (color-coded)
- Check-in and check-out dates
- Number of nights
- Number of guests
- Total price
- Booking ID

**Status Types**:
1. **Pending** 🟡 - Awaiting confirmation
2. **Confirmed** 🟢 - Reservation confirmed
3. **Checked-In** 🔵 - Guest currently staying
4. **Checked-Out** 🟣 - Stay completed
5. **Cancelled** 🔴 - Reservation cancelled

---

### 2. Reservation Detail Page (`/my-reservations/:id`)

**Purpose**: Show complete information about a specific reservation

**Information Sections**:

#### Main Information
- Room number and type
- Reservation status (large badge)
- Booking ID
- Created date/time
- Last updated date/time

#### Stay Details
- Check-in date with time (After 3:00 PM)
- Check-out date with time (Before 11:00 AM)
- Number of nights (visual timeline)

#### Guest Information
- Name
- Email
- Phone number
- Number of guests

#### Room Information
- Room number
- Room type
- Floor
- Price per night

#### Price Breakdown
- Itemized costs
- Service fees
- Taxes
- Total amount

#### Actions (for active reservations)
- ✏️ Modify Reservation
- ❌ Cancel Reservation
- 💬 Contact Support

#### Important Information
- Check-in requirements
- Cancellation policy
- Hotel policies
- Special notes

---

## Mock Data

The system uses 5 sample reservations to demonstrate functionality:

```typescript
Reservation #1 - Confirmed
- Room 101 (Deluxe Suite)
- Check-in: Nov 15, 2025
- Check-out: Nov 18, 2025
- 2 guests, 3 nights
- Total: $450.00

Reservation #2 - Pending
- Room 205 (Family Suite)
- Check-in: Dec 20, 2025
- Check-out: Dec 25, 2025
- 4 guests, 5 nights
- Total: $1,000.00

Reservation #3 - Checked Out
- Room 310 (Standard Room)
- Check-in: Oct 1, 2025
- Check-out: Oct 5, 2025
- 1 guest, 4 nights
- Total: $400.00

Reservation #4 - Checked In
- Room 405 (Double Room)
- Check-in: Nov 12, 2025
- Check-out: Nov 14, 2025
- 2 guests, 2 nights
- Total: $240.00

Reservation #5 - Cancelled
- Room 150 (Premium Room)
- Check-in: Aug 10, 2025
- Check-out: Aug 12, 2025
- 2 guests, 2 nights
- Total: $300.00
```

---

## UI/UX Design

### Color Coding by Status
- **Pending**: #F5A623 (Orange) - Needs attention
- **Confirmed**: #7ED321 (Green) - All good
- **Checked-In**: #4A90E2 (Blue) - Currently active
- **Checked-Out**: #8E44AD (Purple) - Completed
- **Cancelled**: #E74C3C (Red) - Terminated

### Card Interaction
- **Hover Effect**: Card lifts up with enhanced shadow
- **Cursor**: Pointer to indicate clickability
- **Visual Feedback**: "View Details →" arrow on each card
- **Smooth Transition**: Animated hover states

### Detail Page Design
- **Back Button**: Easy navigation to list view
- **Timeline View**: Visual representation of stay duration
- **Information Cards**: Organized sections with icons
- **Action Buttons**: Prominent, color-coded by action type

---

## Routing Structure

```
/my-reservations              → List of all reservations
/my-reservations/:id          → Detail view for specific reservation
```

**Example URLs**:
- `/my-reservations` - Shows all 5 reservations
- `/my-reservations/1` - Shows details of reservation #1
- `/my-reservations/2` - Shows details of reservation #2

---

## File Structure

```
src/
├── data/
│   └── mockReservations.ts          # Mock reservation data
├── pages/
│   ├── MyReservations.tsx           # List view
│   ├── ReservationDetail.tsx        # Detail view
│   └── GuestDashboard.tsx           # Links to My Reservations
├── styles/
│   ├── MyReservations.css           # List view styles
│   └── ReservationDetail.css        # Detail view styles
├── types/
│   └── index.ts                     # Updated with roomDetails
└── App.tsx                          # Updated with new routes
```

---

## Key Functions

### My Reservations Page

**calculateNights(checkIn, checkOut)**
- Calculates number of nights between dates
- Returns: number of days

**formatDate(dateString)**
- Formats ISO date to readable format
- Returns: "Nov 15, 2025" format

**getStatusColor(status)**
- Returns color code for status badge
- Used for visual consistency

**getStatusText(status)**
- Converts status to display text
- Capitalizes and formats properly

**Filter Functionality**
- Dropdown to filter by status
- Shows count of filtered results
- "All" option to show everything

---

### Reservation Detail Page

**Timeline Display**
- Visual representation with dates
- Shows number of nights
- Check-in/check-out times included

**Price Breakdown**
- Itemized calculation
- Shows per-night cost × nights
- Service fees and taxes
- Bold total at bottom

**Action Buttons** (conditional display)
- Only shown for pending/confirmed reservations
- Modify, Cancel, Contact Support
- Alert placeholders (ready for backend)

**Back Navigation**
- Returns to list view
- Preserves any filters applied

---

## Responsive Design

### Desktop (1400px+)
- 2-3 cards per row in grid
- Wide detail cards
- All information visible

### Tablet (768px - 1399px)
- 2 cards per row
- Slightly narrower layouts
- Info grids adjust

### Mobile (< 768px)
- Single column layout
- Stacked date sections
- Vertical timeline
- Full-width action buttons
- Larger touch targets

---

## Status Filters

The filter dropdown allows users to view:
- **All Reservations** - Shows everything
- **Pending** - Only pending reservations
- **Confirmed** - Only confirmed reservations
- **Checked In** - Currently active stays
- **Checked Out** - Completed stays
- **Cancelled** - Cancelled reservations

**Empty State**:
When no reservations match the filter, displays:
- Empty state icon
- "No reservations found" message
- Context-specific text
- Button to browse rooms

---

## Integration Points (Backend Ready)

### API Endpoints Needed

```typescript
// Get all reservations for user
GET /api/reservations/my-reservations/
Response: Reservation[]

// Get single reservation detail
GET /api/reservations/:id/
Response: Reservation

// Modify reservation
PUT /api/reservations/:id/
Body: { checkInDate, checkOutDate, numberOfGuests }
Response: Reservation

// Cancel reservation
DELETE /api/reservations/:id/
Response: { success: boolean, message: string }

// Contact support
POST /api/support/
Body: { reservationId, message }
Response: { success: boolean, ticketId: string }
```

### Integration Steps

1. **Create API Service** (`src/services/reservationService.ts`):
```typescript
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

export const getMyReservations = async () => {
  const response = await axios.get(`${API_BASE_URL}/reservations/my-reservations/`);
  return response.data;
};

export const getReservationDetail = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/reservations/${id}/`);
  return response.data;
};

export const modifyReservation = async (id: number, data: any) => {
  const response = await axios.put(`${API_BASE_URL}/reservations/${id}/`, data);
  return response.data;
};

export const cancelReservation = async (id: number) => {
  const response = await axios.delete(`${API_BASE_URL}/reservations/${id}/`);
  return response.data;
};
```

2. **Update MyReservations.tsx**:
Replace line 8:
```typescript
// Current:
const [reservations] = useState<Reservation[]>(mockReservations);

// Replace with:
const [reservations, setReservations] = useState<Reservation[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchReservations = async () => {
    try {
      const data = await getMyReservations();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchReservations();
}, []);
```

3. **Update ReservationDetail.tsx**:
Replace lines 13-20:
```typescript
// Current:
const found = mockReservations.find(r => r.id === Number(id));

// Replace with:
const fetchReservation = async () => {
  try {
    const data = await getReservationDetail(Number(id));
    setReservation(data);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    navigate('/my-reservations');
  }
};
fetchReservation();
```

4. **Connect Action Buttons**:
```typescript
const handleModify = async () => {
  // Show modify modal/form
  // Call modifyReservation API
};

const handleCancel = async () => {
  if (window.confirm('Are you sure?')) {
    try {
      await cancelReservation(reservation.id);
      alert('Reservation cancelled successfully');
      navigate('/my-reservations');
    } catch (error) {
      alert('Failed to cancel reservation');
    }
  }
};
```

---

## Testing Checklist

### My Reservations Page
- [ ] All 5 mock reservations display
- [ ] Status filter works for each option
- [ ] Cards show correct information
- [ ] Hover effects work smoothly
- [ ] Clicking card navigates to detail
- [ ] Empty state shows when no matches
- [ ] Responsive on mobile devices
- [ ] Browse rooms button works

### Reservation Detail Page
- [ ] All information displays correctly
- [ ] Timeline shows dates properly
- [ ] Price breakdown calculates correctly
- [ ] Back button returns to list
- [ ] Action buttons show for active reservations
- [ ] Action buttons hidden for past/cancelled
- [ ] Button clicks trigger alerts
- [ ] Invalid ID redirects to list
- [ ] Responsive on mobile devices

---

## Future Enhancements

### Phase 1 - Basic Functionality
- [ ] Connect to real backend API
- [ ] Add loading states
- [ ] Add error handling
- [ ] Implement actual modify functionality
- [ ] Implement actual cancel functionality

### Phase 2 - Enhanced Features
- [ ] Add date range filter
- [ ] Add search by room number
- [ ] Add sort options (by date, price, status)
- [ ] Add pagination for many reservations
- [ ] Add print/download reservation details
- [ ] Add email confirmation resend

### Phase 3 - Advanced Features
- [ ] Add calendar view of reservations
- [ ] Add reservation history graphs
- [ ] Add notifications for upcoming check-ins
- [ ] Add review/rating system post-checkout
- [ ] Add special requests to reservations
- [ ] Add room upgrade options

---

## Performance Considerations

**Current State**:
- Static mock data (instant load)
- No API calls
- No loading states needed

**With Backend**:
- Add loading spinners
- Implement error boundaries
- Cache reservation data
- Debounce filter changes
- Lazy load images if added
- Implement pagination for 100+ reservations

---

## Accessibility

**Current Features**:
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast meets WCAG standards
- ✅ Alt text on icons (emoji currently)
- ✅ Descriptive labels on form elements

**Future Improvements**:
- [ ] Add ARIA labels
- [ ] Add screen reader announcements
- [ ] Add keyboard shortcuts
- [ ] Add skip links
- [ ] Test with screen readers

---

## Status Summary

**✅ Completed**:
- My Reservations list page with filtering
- Reservation detail page with full information
- Mock data for 5 different reservation statuses
- Complete styling and responsive design
- Card-based UI with hover effects
- Status-based color coding
- Navigation between list and detail views
- Empty states
- Action buttons (frontend only)

**⏳ Next Steps**:
- Backend API integration
- Real data fetching
- Actual modify/cancel functionality
- Loading and error states
- User authentication integration

---

**The Reservation Management system for guests is now fully functional on the frontend and ready for backend integration!**
