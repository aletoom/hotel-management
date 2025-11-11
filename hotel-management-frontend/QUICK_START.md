# ⚡ Quick Start Guide

## Get Your App Running in 3 Steps

### Step 1: Update Node.js (REQUIRED)
Your current Node.js version is 20.18.0, but you need 20.19+ or 22.12+

**Download and install:**
👉 https://nodejs.org/ (Choose LTS version)

After installation, verify:
```bash
node --version
```

---

### Step 2: Navigate to Project
```bash
cd "c:\Users\TUF\OneDrive - ADA University\Desktop\Rustam_HabibovProjects\university_projects\hotel-management\hotel-management-frontend"
```

---

### Step 3: Start Development Server
```bash
npm run dev
```

**Your app will be at:** http://localhost:5173

---

## What You'll See

### 🏠 Home Page (Dashboard)
- Welcome header
- 5 colorful cards for each subsystem
- Click any card to navigate

### 🧭 Navigation
- Purple gradient navbar at the top
- Links to: Users, Reservations, Rooms, Workers, Payments

### 📄 Subsystem Pages
- Each page has a header and placeholder content
- Ready for you to add features!

---

## Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install <package-name>
```

---

## Project Structure at a Glance

```
src/
├── components/     ← Reusable UI components
├── pages/         ← Main pages (Dashboard, User Mgt, etc.)
├── services/      ← API configuration
├── types/         ← TypeScript types
└── styles/        ← CSS files
```

---

## Next Steps After Running

1. ✨ **Explore the UI** - Click through all pages
2. 🔧 **Set up Django backend** - Create REST API
3. 🎨 **Customize styling** - Modify colors/layouts
4. 📝 **Start coding features** - Begin with User Management

---

## Need Help?

📖 Read detailed guides:
- `README.md` - Overview
- `SETUP_GUIDE.md` - Complete setup instructions
- `UI_OVERVIEW.md` - Design details
- `PROJECT_SUMMARY.md` - Full project status

---

## Important Files to Know

- `src/App.tsx` - Main app component with routes
- `src/components/Navbar.tsx` - Navigation bar
- `src/pages/Dashboard.tsx` - Home page
- `src/types/index.ts` - Data type definitions
- `src/services/apiConfig.ts` - API endpoints

---

**Happy Coding! 🎉**
